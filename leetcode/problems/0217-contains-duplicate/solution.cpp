// 0217. Contains Duplicate — Easy
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int x : nums)
            if (!seen.insert(x).second) return true;   // insert failed → already seen
        return false;
    }
};
