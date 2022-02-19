// sum amount operations
export const balanceAmount = (operations) =>
	operations.reduce((acc, operation) => {
		if (operation.incomOrExit == 'egreso') return acc - +operation.amount
		return acc + +operation.amount
	}, 0)
