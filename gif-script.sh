#!/bin/bash 

# Welcome message
echo "Welcome to GIF Generator"

# Get input from user with a prompt
while true; do
    read -p "Enter what type of GIF you want to generate: " searchTerm

    # Check if the input is empty
    if [ -z "$searchTerm" ]; then
        echo "Error: Please enter a term."
    else
        break  # Break out of the loop if valid input is provided
    fi
done

# Send input to curl command
curl gif.xyzzy.run/$searchTerm