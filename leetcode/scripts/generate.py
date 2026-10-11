"""
Regenerates every index page from data/topics.json + data/problems.json:

  topics/<topic>/README.md       topic page    -> lists its patterns
  topics/<topic>/<pattern>.md    pattern page  -> explains it + lists its problems
  problems/README.md             all problems by ID
  the tags block inside each problems/<id>-<slug>/README.md

Problem explanations and solution.cpp are hand-written; inside them this
script only rewrites the block between <!-- tags:start --> and <!-- tags:end -->.

Usage:  python scripts/generate.py
"""
import json
import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
TOPICS = json.loads((ROOT / "data/topics.json").read_text(encoding="utf-8"))
PROBLEMS = sorted(json.loads((ROOT / "data/problems.json").read_text(encoding="utf-8")),
                  key=lambda p: p["id"])
DIFF = {"Easy": "00B8A3", "Medium": "FFC01E", "Hard": "FF375F"}

PATTERN_BY_TAG = {f'{t["id"]}/{p["id"]}': (t, p) for t in TOPICS for p in t["patterns"]}


def pid(p):
    return f'{p["id"]:04d}'


def pdir(p):
    return f'{pid(p)}-{p["slug"]}'


def diff_badge(d):
    return f'![{d}](https://img.shields.io/badge/-{d}-{DIFF[d]})'


def badge_text(s):
    # shields.io: '-' must be doubled, spaces as %20
    return quote(s.replace("-", "--"))


def problems_with(tag):
    return [p for p in PROBLEMS if tag in p["tags"]]


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.strip() + "\n", encoding="utf-8")


# ---------- validate ----------
for p in PROBLEMS:
    for tag in p["tags"]:
        if tag not in PATTERN_BY_TAG:
            raise SystemExit(f"{pid(p)}: unknown tag '{tag}'")

# ---------- topic + pattern pages ----------
for t in TOPICS:
    rows = []
    for i, pat in enumerate(t["patterns"], 1):
        n = len(problems_with(f'{t["id"]}/{pat["id"]}'))
        rows.append(f'| {i} | [**{pat["name"]}**](./{pat["id"]}.md) | {pat["when"]} | `{n}` |')

    write(ROOT / "topics" / t["id"] / "README.md", f'''
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:{t["color"]},100:0F1420&height=120&text={quote(t["icon"] + " " + t["name"])}&fontSize=42&fontColor=ffffff&animation=fadeIn" width="100%" />
</p>

<sub>[🏠 Home](../../README.md) › **{t["name"]}**</sub>

{t["intro"]}

## 🧩 Patterns

| Step | Pattern | Use it when… | Problems |
|:-:|:--|:--|:-:|
{chr(10).join(rows)}

> 📘 Theory for this topic lives in the DSA guide.
''')

    for pat in t["patterns"]:
        tag = f'{t["id"]}/{pat["id"]}'
        probs = problems_with(tag)
        if probs:
            lines = ["| # | Problem | Difficulty | Also in |", "|:-:|:--|:-:|:--|"]
            for p in probs:
                others = []
                for o in p["tags"]:
                    if o == tag:
                        continue
                    ot, op = PATTERN_BY_TAG[o]
                    others.append(f'[{op["name"]}](../{ot["id"]}/{op["id"]}.md)')
                lines.append(f'| {pid(p)} | [{p["title"]}](../../problems/{pdir(p)}) '
                             f'| {diff_badge(p["difficulty"])} | {" · ".join(others) or "—"} |')
            table = "\n".join(lines)
        else:
            table = "_No problems yet._"

        write(ROOT / "topics" / t["id"] / f'{pat["id"]}.md', f'''
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=transparent&fontColor={t["color"]}&height=90&text={quote(pat["name"])}&fontSize=40&animation=twinkling" width="100%" />
</p>

<sub>[🏠 Home](../../README.md) › [{t["name"]}](./README.md) › **{pat["name"]}**</sub>

## 💡 The pattern
{pat["explain"]}

**Use it when:** {pat["when"]}

## 📝 Problems

{table}
''')

# ---------- problems/README.md (by ID) ----------
counts = {d: sum(p["difficulty"] == d for p in PROBLEMS) for d in DIFF}
rows = []
for p in PROBLEMS:
    tags = " · ".join(f'[{PATTERN_BY_TAG[tg][1]["name"]}](../topics/{tg}.md)' for tg in p["tags"])
    rows.append(f'| {pid(p)} | [{p["title"]}](./{pdir(p)}) | {diff_badge(p["difficulty"])} | {tags} |')

write(ROOT / "problems" / "README.md", f'''
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:B5701E,100:0F1420&height=120&text=%F0%9F%94%A2%20All%20problems&fontSize=42&fontColor=ffffff&animation=fadeIn" width="100%" />
</p>

<sub>[🏠 Home](../README.md) › **All problems**</sub>

<p align="center">
  <img src="https://img.shields.io/badge/Total-{len(PROBLEMS)}-1F8F86?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Easy-{counts["Easy"]}-00B8A3?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Medium-{counts["Medium"]}-FFC01E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Hard-{counts["Hard"]}-FF375F?style=for-the-badge" />
</p>

| # | Problem | Difficulty | Patterns |
|:-:|:--|:-:|:--|
{chr(10).join(rows)}
''')

# ---------- tags block inside each problem README ----------
BLOCK = re.compile(r"<!-- tags:start -->.*?<!-- tags:end -->", re.S)
for p in PROBLEMS:
    f = ROOT / "problems" / pdir(p) / "README.md"
    if not f.exists():
        print(f"warning: missing {f.relative_to(ROOT)}")
        continue
    lines = ["<!-- tags:start -->", "<p>",
             f'  <img src="https://img.shields.io/badge/Difficulty-{p["difficulty"]}-{DIFF[p["difficulty"]]}?style=for-the-badge" />']
    for tg in p["tags"]:
        t, pat = PATTERN_BY_TAG[tg]
        lines.append(f'  <a href="../../topics/{tg}.md"><img src="https://img.shields.io/badge/'
                     f'{badge_text(t["name"])}-{badge_text(pat["name"])}-{t["color"]}?style=for-the-badge" /></a>')
    lines += [f'  <a href="https://leetcode.com/problems/{p["slug"]}/"><img src="https://img.shields.io/badge/'
              f'LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>',
              "</p>", "<!-- tags:end -->"]
    block = "\n".join(lines)
    f.write_text(BLOCK.sub(lambda _: block, f.read_text(encoding="utf-8")), encoding="utf-8")

print(f"Generated {len(TOPICS)} topics, "
      f"{sum(len(t['patterns']) for t in TOPICS)} patterns, {len(PROBLEMS)} problems.")
