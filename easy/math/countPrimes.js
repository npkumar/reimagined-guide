/**
 * https://leetcode.com/problems/count-primes/
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primes = []
    
    const isPrime = (num) => {
        if (num < 2) return false; // 2 is prime
        
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false
        }
        
        return true
    }
    
    // 2 and above is prime
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) primes.push(i)
    }
    
    return primes.length;
};
