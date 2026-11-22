class Solution {
public:
    int removeDuplicates(vector<int>& nums) {

        // Create Write Pointer (k)
        int k = 1;

        // go through the arr 
        for( int i = 0 ; i < nums.size() ;  i++){

            // If the current elemnt != from previous one 
            if (nums[i] != nums[k-1]){

                // add it & Ignore the duplicate
                nums[k] = nums[i];
                k++ ;
            }
        }

        return k ;
        
    }
};