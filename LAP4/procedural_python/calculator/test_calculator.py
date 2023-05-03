import pytest
from . import basics
from . import extended

@pytest.mark.parametrize('x, y, expected', [(2, 4, 6), (3, 4, 7), (9, 2, 11)])
def test_add(x, y, expected):
    assert basics.add(x, y) == expected

@pytest.mark.parametrize('x, y, expected', [(2, 4, -2), (3, 4, -1), (9, 2, 7)])
def test_subtract(x, y, expected):
    assert basics.subtract(x, y) == expected

@pytest.mark.parametrize('x, y, expected', [(2, 4, 8), (3, 4, 12), (9, 2, 18)])
def test_multiply(x, y, expected):
    assert basics.multiply(x, y) == expected

@pytest.mark.parametrize('x, y, expected', [(2, 4, 0.5), (12, 4, 3), (9, 2, 4.5)])
def test_divide(x, y, expected):
    assert basics.divide(x, y) == expected

@pytest.mark.parametrize('x, factorial, sqrt', [(5, 120, 2.236), (9, 362880, 3)])
def test_info(x, factorial, sqrt):
    result = extended.info(x)
    assert str(factorial) in result
    assert str(sqrt) in result

@pytest.mark.parametrize('x, direction, expected', [(5.3, 'up', 6), (5.3, 'down', 5)])
def test_rounding(x, direction, expected):
    result = extended.rounding(x, direction)
    assert result == expected
