function evenFib(n) {
	var high = 2;
	var low = 1;
	var next = 0;
	var sum = 2;
	while (next <= n) {
		if (next % 2 == 0) {
			sum += next;
		}
		next = high + low;
		low = high;
		high = next;
	}
	return sum;
}

console.log(evenFib(4000000));