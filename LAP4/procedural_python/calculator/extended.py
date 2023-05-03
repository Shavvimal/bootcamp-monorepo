import math

def info(x):
    fac = math.factorial(x)
    square_root = math.sqrt(x)
    return f"\n\tfactorial of {x} is {fac}\n\tsquare root of {x} is {square_root}"

def rounding(x, direction):
    result = math.floor(x) if direction == 'down' else math.ceil(x)
    return result