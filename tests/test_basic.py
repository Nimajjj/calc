import pytest
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
import main

def test_add():
    """Test `add` function
    """
    assert main.add(2, 3) == 5
    assert main.add(-1, 1) == 0
    assert main.add(0, 0) == 0

def test_divide():
    """Test `divide` function
    """
    assert main.divide(10, 2) == 5
    assert main.divide(-9, 3) == -3
    assert main.divide(5, 0) == "Error: Division by zero"

