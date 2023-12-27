let  arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

//while

// cau b
// let tong = 0 
// let i = 0
// while(i < arr.length) {
//     tong = tong + arr[i]
//     i++
// }
// console.log('tong', tong)

// cau c
// let max = arr[0]
// let i = 0
// while(i < arr.length) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
//     i++
// }

// console.log('Phan tu lon nhat:', max)

// let min = arr[0]
// i = 0
// while(i < arr.length) {
//     if(arr[i] < min) {
//         min = arr[i]
//     }
//     i++
// }
// console.log('Phan tu lon nhat:', min)


// cau e
// let i = 0
// while(i < arr.length / 2) {
//     let tam = arr[i]
//     arr[i] = arr[arr.length -1 -i]
//     arr[arr.length -1 -i] = tam
//     i++
// }
// console.log(arr)

// cau f
for (let i = 0; i < arr.length -1; i++) {
    for (let j = i + 1; j < arr.length; i++) {
        if (arr[i] > arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
    }
}

console.log(arr)