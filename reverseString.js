// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


function reverseString(string) {
    if (string === '') {
        return ''
    }
    return reverseString(string.substr(1)) + string[0];
 
}

reverseString('hello')