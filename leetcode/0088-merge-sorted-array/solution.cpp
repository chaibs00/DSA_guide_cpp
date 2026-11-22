class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

        // we need 3 indexes : (i,j) read , (k) write
        int i  = m - 1 ;  // read nums1
        int j = n - 1 ;   // read nums2
        int k = m + n - 1;   // the final array size = m + n

        // for num1 & num2 finished 
        // if num1 finished the rest will be merged automatically 
        while(i >= 0 && j >= 0){
            if(nums1[i] > nums2[j]){
                nums1[k] = nums1[i];
                i--;
            }
            else{
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }

        // if num2 is finished the rest will be merged since we are editing the nums1
        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }



        


        
        
    }
};