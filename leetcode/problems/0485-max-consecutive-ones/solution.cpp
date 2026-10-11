// 0485. Max Consecutive Ones — Easy
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int best = 0, cur = 0;
        for (int x : nums) {
            cur = x ? cur + 1 : 0;
            best = max(best, cur);
        }
        return best;
    }
};
