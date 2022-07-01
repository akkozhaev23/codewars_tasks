function betterThanAverage(classPoints, yourPoints) {
    let res = classPoints.reduce((a, b) => a + b, 0) / classPoints.length
    console.log(res)
    console.log(classPoints.length)
    return yourPoints > res ? true : false
}
console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))