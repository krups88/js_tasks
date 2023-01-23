
function zeroArray(m, n) {
    // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
    let newArray= [];
        for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
        row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

