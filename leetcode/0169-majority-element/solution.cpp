class Solution {
public:
    int majorityElement(vector<int>& nums) {

        // Get the size of the array
        int n = nums.size();

        int val;

        // Store the frequency of each number
        map<int, int> freq;

        // Count how many times each number appears
        for (int val : nums) {
            freq[val]++;
        }

        // Find the number that appears more than n/2 times
        for (auto itr = freq.begin(); itr != freq.end(); itr++) {

            // itr->first  = number
            // itr->second = its frequency
            if (itr->second > n / 2) {
                val = itr->first;
            }
        }

        // Return the majority element
        return val;
    }
};