// 1. Two Sum — Easy
// https://leetcode.com/problems/two-sum/
// Topic: Arrays, Hash Table

#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:

    // Brute Force (Naive Approach)
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i=0 ; i<nums.size()  ; i++  ){
            for (int j=i+1 ; j < nums.size() ; j++){
                if (nums[i] + nums[j] == target){
                    return {i,j} ;
                }  
            }
        }
        return {} ;
    }

    // Hash Table (Optimal Approach)
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> map ;
        for (int i=0 ; i<nums.size() ; i++){
            int complement = target - nums[i] ;
            if (map.find(complement) != map.end()){
                return {map[complement],i} ;
            }
            map[nums[i]] = i ;
        }
        return {} ;
    }
};