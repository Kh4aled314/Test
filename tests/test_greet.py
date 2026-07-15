"""Python test file — practice adding/removing files in Git."""

def greet(name: str) -> str:
    return f"Hello, {name}!"


def test_greet():
    assert greet("Git") == "Hello, Git!"
    assert "World" in greet("World")


if __name__ == "__main__":
    test_greet()
    print("All Python tests passed!")
