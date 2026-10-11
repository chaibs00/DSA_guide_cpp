// 0121. Best Time to Buy and Sell Stock — Easy

#include <vector>
#include <climits>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX, best = 0;
        for (int p : prices) {
            minPrice = min(minPrice, p);
            best = max(best, p - minPrice);
        }
        return best;
    }
};
