#!/usr/bin/env zx
import { $ } from "zx";

// Welcome message
console.log("Welcome to GIF Generator");

// Get input from user with a prompt
let validResponse = false;

// Necessary to use prompt
const prompt = require("prompt-sync")();

while (!validResponse) {
    let response = await prompt("Enter what type of GIF you want to generate: ");

    if (response.length > 0) {
        // Run curl command 
        await $`curl gif.xyzzy.run/${response}`;
        validResponse = true; // Set to true to exit the loop
    } else {
        console.log("Error: Please enter a term.");
    }
}
