# ! Determine if a number is positive, negative, or zero
def solve(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"

n = int(input())
print(solve(n))