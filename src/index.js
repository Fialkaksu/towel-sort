module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    let resArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse().forEach(el => {
                resArr.push(el);
            })
        } else {
            matrix[i].forEach(el => {
                resArr.push(el);
            })
        }
    }
    
    return resArr;
}
