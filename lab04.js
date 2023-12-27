//cau1 loop for
let  arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// a
// for(i = 0; i < arr.length; i++) {
//     console.log('Phan tu thu %s: %s', i, arr[i])
// }

// b
//  let tong = 0 
//  for(let i = 0; i < arr.length; i++) {
//     tong = tong + arr[i]
//  }

// console.log('Tong cac phan tu la: ', tong)

// c 
// let max = arr[0]
// for(let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log('Phan tu lon nhat: ', max)

// let min = arr[0]
// for(let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }

// console.log('Phan tu nho nhat: ', min)

// d
// let soPhanTuCuaMang = arr.length
// let trungBinhCong = tong / soPhanTuCuaMang
// console.log('Trung binh cong = ', trungBinhCong)

// e 
// let newArr = [1, 2, 4, 3]
// let mangDaoNguoc = []

// for(let i = newArr.length - 1; i >= 0; i-- ) {
//     console.log(newArr[i])
//     let indexDaoNguoc = mangDaoNguoc.length
//     mangDaoNguoc[indexDaoNguoc] = newArr[i]
// }
// console.log(mangDaoNguoc)

// cau e
// for(let i = 0; i < arr.lengthl / 2; i++) {
//     let tam = arr[i]
//     arr[i] = arr[arr.length -1 -i]
//     arr[arr.length -1 -i] = tam
// }

// console.log(arr)

// // cau f
// let tanSuatXuatHien = {}

// for (let i = 0; i < arr.length; i++) {

//     let phanTuThuI = arr[i]

//     if(tanSuatXuatHien[phanTuThuI] === undefined) {
//         tanSuatXuatHien[phanTuThuI] = 1
//     }
//     else {
//         tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
//     }
// }

// console.log(tanSuatXuatHien)

// // cau g 
// // cach 1
// for ( let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }

// arr[0] = 117
// console.log(arr)

// cach 2
// let mang2 = [117]
// for (let i = 0; i < arr.length; i++) {
//     mang2[mang2.length] = arr[i]
// }

// console.log(mang2)

// cau h
// let mangTangDan = true
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i+1]) {
//         mangTangDan = false
//         break
//     }
// }

// if (mangTangDan === true) {
//     console.log('Mang tang dan')
// }
// else {
//     console.log('Mang khong tang dan')
// }

// cau i
// for (let i = 0; i < arr.length -1; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//         if (arr[i] > arr[j]) {
//             let tam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }

// console.log(arr)

// cau k 
let mangSoChan = []
let mangSoLe = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        mangSoChan[mangSoChan.length] = arr[i] //mangSoChan.push(arr[i])
    }
    else {
        mangSoLe[mangSoLe.length] = arr[i]
    }
}

console.log('Mang so chan: ', mangSoChan)
console.log('Mang so le: ', mangSoLe)

