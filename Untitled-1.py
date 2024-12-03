
def removeElement( nums, val):
      j=0
      k=len(nums)
      for i in range(0,k,1):
        if nums[i]!=val:
            nums[j]=nums[i]
            j=j+1
      del nums[j::]
      return nums
    

print(removeElement([0,1,2,2,3,0,4,2],2))
