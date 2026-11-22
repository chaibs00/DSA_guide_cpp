class Solution {
public:
    int maxProfit(vector<int>& prices) {

        // The lowest price seen so far
        int min_price = INT_MAX;

        // The maximum profit we can make
        int best = 0;

        // Iterate through each day's price
        for (int p : prices) {

            // Update the minimum price (best day to buy so far)
            min_price = min(p, min_price);

            // Calculate the profit if we sell today
            // and keep the maximum profit found so far
            best = max(best, p - min_price);
        }

        // Return the maximum profit
        return best;
    }
};