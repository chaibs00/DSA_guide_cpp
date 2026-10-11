// 0283. Move Zeroes — Easy
#include <vector>
#include <utility>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int w = 0;                                  // next slot for a non-zero
        for (int r = 0; r < (int)nums.size(); ++r)
            if (nums[r] != 0) swap(nums[w++], nums[r]);
    }
};
