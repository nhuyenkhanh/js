//  cau 1a
// function kiemTraSoAmDuong (n) {
//     if (n > 0) {
//         console.log('so duong')
//     }
//     else if (n < 0 ) {
//         console.log('So Duong')
//     }
//     else {
//         console.log('khong am khong duong')
//     }
// }

// kiemTraSoAmDuong(9)
// console.clear()

// // cau 1b
// function kiemTraSoChanSoLe (n) {
//     if (n % 2 === 0) {
//         console.log('So Chan')
//     }
//     else {
//         console.log('So Le')
//     }
// }

// kiemTraSoChanSoLe(1)
// console.clear()

// cau 1c
// function timSoLonNhat(a, b, c) { 

//     let max = a 
//     if (b > max ) {
//         max = b
//     }
//     if (c > max ) {
//         max = c
//     }
//     return max
// }

// let ketQua = timSoLonNhat(1, 4 ,5)
// console.log('ket qua', ketQua) 
// console.clear()

// cau1d
// function tinhNamNhuan(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
//         console.log ("Nam" + year + "la nam nhuan")
//     }
//     else {
//         console.log("Nam" + year + "khong la nam nhuan")
//     }
// }

// tinhNamNhuan(2024)
// console.clear()

// cau1e
// function timNguyenAm(c) {

//      // O,U,E,A,I
//      switch(c) {
//         case 'O': {
//             console.log('Nguyen Am')
//             break
//         }
//         case 'U': {
//             console.log('Nguyen Am')
//             break
//         }
//         case 'E': {
//             console.log('Nguyen Am')
//             break
//         }
//         case 'A': {
//             console.log('Nguyen Am')
//             break
//         }
//         case 'I': {
//             console.log('Nguyen Am')
//             break
//         }
//         default: {
//             console.log('Phu Am')
//         }
//     }
// } 

// timNguyenAm('O')
// console.clear()

// cau2A
// function nghiemPhuongTrinhBacHai(a,b,c) {
    // ax^2 + bx + c = 0
//     if(a == 0) {
//         if(b == 0) {
//             if(c == 0) {
//                 console.log('Phuong Trinh Vo So Nghiem')
//             }
//             else {
//                 console.log('Phuong Trinh Vo Nghiem')
//             }
//         }
//         else {
//             x = -c/b 
//             console.log('Nghiem Phuong Trinh x = ' + x)
//         }
//     }
//     else {
//         dt = b*b - 4*a*c
//         if(dt < 0) {
//             console.log('Phuong Trinh Vo Nghiem')
//         }
//         else if(dt == 0) {
//             x = -b / (2*a)
//             console.log('Nghiem Phuong Trinh x1 = x2 = ' + x)
//         }
//         else {
//             x1 = (-b + Math.sqrt(dt)) / (2*a)
//             x2 = (-b - Math.sqrt(dt)) / (2*a)
//             console.log('Ngiem x1 = ${x1}, x2 = ${x2}')
//         }
//     }
// }

// nghiemPhuongTrinhBacHai
 
// cau2b
// function tinhLuong(l) {
//     let t = 0 
//     let net = 0
//     if(l > 20) {
//         t = l * 0.2
//         net = l - t
//         console.log('Thue thu nhap', t)
//         console.log('Luong net', net)
//     }
//     else if(l >= 15 && l <= 20) {
//         t = l * 0.18
//         net = l - t
//         console.log('Thue thu nhap', t)
//         console.log('Luong net', net)
//     }
//     else if(l >= 8 && l < 15) {
//         t = l * 0.15 
//         net = l -t 
//         console.log('Thue thu nhap', t)
//         console.log('Luong net', net)
//     }
//     else {
//         console.log('Khong dong thue')
//     }
// }

// tinhLuong(7)

// cau2c
// function xepHangHocSinh(diemKT, diemGK, diemCk) {
//     let diemTB = (diemKT + diemGK + diemCk) / 3

//     if(diemTB >= 9) {
//         console.log('Xep loai A')
//     }
//     else if(diemTB >= 7 && diemTB < 9) {
//         console.log('Xep loai B')
//     }
//     else if(diemTB >= 5 && diemTB < 7) {
//         console.log('Xep loai C')
//     }
//     else if(diemTB < 5) {
//         console.log('Xep loai F')
//     }
// }

// xepHangHocSinh(9,6,9)
// xepHangHocSinh(1,4,9)
// xepHangHocSinh(9,2,4)

// cau2d
function tinhGiaCuoc(t) {
    let cuocNoiMang = 25000
    let cuocGoi = 0
    if(t > 0 && t <= 50) {
        cuocGoi = t * 600
    } 
    else if(t > 50 && t <= 200) {
        cuocGoi = 50 * 600 + (t-50) * 400
    }
    else if(t > 200) {
        cuocGoi = 50 * 600 + 150 * 400 + (t - 200) * 200
    }

    let tongTien = cuocNoiMang + cuocGoi

    console.log('Tong tien phai tra: ', tongTien)
}

tinhGiaCuoc(50)
tinhGiaCuoc(125)
tinhGiaCuoc(250)
