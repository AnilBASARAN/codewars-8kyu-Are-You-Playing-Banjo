
let areYouPlayingBanjo = (name) => name.toLowerCase().split('')[0]
== 'r' ? name + " plays banjo" : name + " does not play banjo"



/*
8kyu-Are You Playing Banjo?


Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript