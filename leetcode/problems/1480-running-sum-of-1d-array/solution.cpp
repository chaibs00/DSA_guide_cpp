// 1480. Running Sum of 1d Array — Easy
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for (int i = 1; i < (int)nums.size(); ++i)
            nums[i] += nums[i - 1];
        return nums;
    }
};
