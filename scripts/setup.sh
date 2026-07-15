#!/bin/bash
# Setup script for the practice project

echo "Setting up Git Practice Project..."
echo "Node version: $(node --version 2>/dev/null || echo 'not installed')"
echo "Git version:  $(git --version)"
echo ""
echo "Run 'npm test' to execute tests."
echo "Run 'npm start' to start the app."
