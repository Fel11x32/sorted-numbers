const searchButton = document.getElementById('searchButton')
const inputArray = document.getElementById('inputArray')
const outputElement = document.getElementById('outputArray')

searchButton.addEventListener('click', () => {
	const inputValue = inputArray.value

	if (inputValue.trim() !== '') {
		const numbers = inputValue
			.split(',')
			.map(function (item) {
				return parseInt(item, 10)
			})
			.sort(function (a, b) {
				return a - b
			}) // Sort numbers in ascending order

		const filteredNumbers = numbers.filter(function (number) {
			return !isNaN(number)
		})

		const filledArray = fillSequence(filteredNumbers)
		outputElement.textContent = `Output: ${filledArray.join(',')}`
	}
})

function fillSequence(sortedNumbers) {
	if (sortedNumbers.length === 0) return []

	const start = sortedNumbers[0]
	const end = sortedNumbers[sortedNumbers.length - 1]

	const filledArray = []
	for (let i = start; i <= end; i++) {
		filledArray.push(i)
	}

	return filledArray
}
