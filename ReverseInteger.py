class Solution:
    def reverse(self, x: int) -> int:  
        if x > 0:    
            y =  int(str(x)[::-1])  
        if x <=0:    
            y = -1 * int(str(x*-1)[::-1])  
    
        mina = -2**31  
        maxa = 2**31 - 1  
        if y not in range(mina, maxa):  
            return 0  
        else:  
            return y
        
