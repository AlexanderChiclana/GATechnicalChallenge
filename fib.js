let fib = function (indexInput) {
    let sequence = []
    let currentVal = 1

    for (let i = 0; i < indexInput; i++) {
        sequence.push(currentVal)
        if (i < 1) {
            currentVal = 1
        } else {
            currentVal = sequence[i] + sequence[i - 1]
        }
    }
    return sequence[sequence.length - 1]
}