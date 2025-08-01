from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> any:
        """
        Do not return anything, modify s in-place instead.
        """

        start = 0
        end = len(s) - 1

        while start < end:
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1

        return s


obj = Solution()
result = obj.reverseString(["h","e","l","l","o"])
print(result)