let  arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
let  arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// cau d
for (let i = 0; i < arr2.length -1; i++) {
        for (let j = i + 1; j < arr2.length; i++) {
            if (arr2[i] > arr2[j]) {
                let tam = arr2[i]
                arr2[i] = arr2[j]
                arr2[j] = tam
            }
        }
    }

    let tong3SoLonNhat = arr2[0] + arr[1] + arr[2]

    console.log('Tong 3 so lon nhat la: ', tong3SoLonNhat)