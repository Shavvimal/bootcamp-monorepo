import pricer
from math import modf

def test_predict_round():
    """custom predict method returns a float with decimals .99"""
    result = pricer.predict('150')
    dec = round(modf(result)[0], 2)
    assert dec == 0.99