# workday-scheduler

## Functions
This app lets displays a workday's schedule with the current date. 
It displays a separate input area to type the tasks that need to be done in the hour.
There is a button to save that text, so when the page is loaded later the saved tasks display.
There is also a visual feature that displays a different background color for the input area based on the current time of day.
If the hour has passed: the input area for that hour displays a gray background and that hour's save button is disabled, if it is currently that hour: the input area for the hour displays a red background, and if the hour is in the future: the input area for the hour displays a green background.

## Files
index.html - Hypertext markup
style.css - Style Sheet
script.js - JavaScript using jquery

## Features
Input: Type text into text area that will later be stored.
Save Button: Saves text to local storage which will show upon refresh.
Color Coding by Time: Determines local time of user and displays background color for each text area based on whether hour is reached. 
Button Disable: Save button is disabled when hour has passed for the day.

## Set Up
### Install
#### Clone npm
In command line, change the current working directory to the location you would like the cloned directory to be made. Copy and paste the following:
```
git clone git@github.com:tamaralynn/workday-scheduler.git
```
Press Enter. The local clone will be created.

#### Download
[From Github Reopsitory](https://github.com/tamaralynn/workday-scheduler)

### Deployment
 [Live GitHib Site](https://tamaralynn.io/workday-scheduler)

#### Display
[On mobile](www.githubusercontent.com/tamaralynnrenee/workday-scheduler/master/assets/mobile.png)

[On Desktop](www.githubusercontent.com/tamaralynnrenee/workday-scheduler/master/assets/desktop.png)

