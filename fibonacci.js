// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.


function fibonacci(number) {
    if (number <= 0) {
        return 'Please enter a number greater than 0';
    }
    if (number ===1) {  
        return 1;
    }
    if (number === 2) {
        return 1
    }

    return fibonacci(number - 1) + fibonacci(number - 2)
}


fibonacci(7)