function is_prime(n) {
	for (var i = 2; i < n/2; i++) {   // Remember prime iterations should start at smallest possible prime, 2. 
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

function largest_prime_factor(num) {
	var LgPrimeFactor = 0;
	for (var factor = 2; factor < num/2; factor++) {
		if ((num % factor === 0) && (factor === true)){
				LgPrimeFactor = factor;
		}
	}
	return LgPrimeFactor;
}
console.log(largest_prime_factor(600851475143));