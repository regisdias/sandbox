import os
import sys

def main():
    print("Checking environment...")
    print(f"Python version: {sys.version}")
    print(f"Current working directory: {os.getcwd()}")
    
    # Check for .env file
    if os.path.exists(".env"):
        print(".env file found.")
    else:
        print(".env file NOT found (this is expected for fresh install, verify .env.example exists)")
        
    if os.path.exists("directives") and os.path.exists("execution") and os.path.exists(".tmp"):
        print("Directory structure verified.")
    else:
        print("Directory structure incomplete.")

if __name__ == "__main__":
    main()
