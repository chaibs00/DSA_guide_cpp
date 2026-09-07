/* ==========================================================================
   code.js — adds a copy button to each code block and runs highlight.js.
   ========================================================================== */

(function () {
  document.querySelectorAll(".code-block").forEach((block) => {
    const btn = block.querySelector(".copy-btn");
    const code = block.querySelector("code");
    if (!btn || !code) return;
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(code.textContent).then(() => {
        const original = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1400);
      });
    });
  });

  if (window.hljs) {
    document.querySelectorAll(".code-block code").forEach((block) => hljs.highlightElement(block));
  }
})();
