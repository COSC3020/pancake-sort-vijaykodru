[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.


In terms of Comparisons, I think that the runtime analysis for the written code is $\Theta(n^2)$. This is because the two for loops used, one in the maxindex function and the other in the pancakesort function. Both of them have a runtime of n because they iterate over n elements in the array and doing it for n times for the function to stop resulting in the runtime complexity of n * n = $\Theta(n^2)$

In terms of the number of flips, the runtime analysis for the code is $\Theta(n)$. This is because of the two calls to the function flip(). The first flip is for the having the maximum element to be set to the first element in the array and the second flip is to correctly place the top element to its place. This results in the time of 2n, because of 2 flips for n elements. And finally because we can neglect the constants for asymptotical analysis the runtime analysis for the code is $\Theta(n)$ 


References:

https://www.geeksforgeeks.org/pancake-sorting/\
pancake-sort-kbuss26\
pancake-sort-IshitaPatel18\
pancake-sort-Greg-Saul\
ChatGPT for optimizing my code
