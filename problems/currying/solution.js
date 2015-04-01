function curryN(fn, n) {
  // If `n` argument was omitted, use the function .length property.
  if (typeof n !== 'number') n = fn.length

	return function (arg) {
	  // Implement rest of function for the final argument
		if (n <= 1) return fn(arg)
		// Otherwise, continue to calling grouped arguments with bind method
		return curryN(fn.bind(null, arg), n - 1)
	}
}

module.exports = curryN
