function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Змініть код лише під цим рядком
    newArr.push([...arr]);
      // Змініть код лише над цим рядком
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));