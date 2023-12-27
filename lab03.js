//  cau1:a 
// function inRaThang(n) {
//     if(n < 1 || n > 12) {
//         console.log('nhap loi')
//     }
//     else {
//         switch(n) {
//             case 1: {
//                 console.log('Thang 1')
//                 break
//             }
//             case 2: {
//                 console.log('Thang 2')
//                 break
//             }
//             case 3: {
//                 console.log('Thang 3')
//                 break
//             }
//             case 4: {
//                 console.log('Thang 4')
//                 break
//             }
//             case 5: {
//                 console.log('Thang 5')
//                 break
//             }
//             case 6: {
//                 console.log('Thang 6')
//                 break
//             }
//             case 7: {
//                 console.log('Thang 7')
//                 break
//             }
//             case 8: {
//                 console.log('Thang 8')
//                 break
//             }
//             case 9: {
//                 console.log('Thang 9')
//                 break
//             }
//             case 10: {
//                 console.log('Thang 10')
//                 break
//             }
//             case 11: {
//                 console.log('Thang 11')
//                 break
//             }
//             case 12: {
//                 console.log('Thang 12')
//                 break
//             }
//         }
//     }
// }
// inRaThang(13)

//cau1.b

// function inRaXepLoai(n) {
    
//         switch(n) {
//             case n >=90 & n <=100: { 
//             console.log('Hang A')
//             break
//             }
//             case n >=80 & n <=89: {
//                 console.log('Hang B')
//                 break
//             }
//             case n >=70 & n <=79: {
//                 console.log('Hang C')
//                 break
//             }
//             case n >= 60 & n <=69: {
//                 console.log('Hang D')
//                 break
//             }
//             default: {
//                 console.log('Hang F')
//             }
//         }   
//     }

// inRaXepLoai(60)

// cau1.c
// function tinhToan(a, b, phepToan) {
//     switch(phepToan) {
//         case '+': {
//             console.log('%s %s %s = %s', a, phepToan, b, a+b)
//             break
//         }
//         case '-': {
//             console.log('%s %s %s = %s', a, phepToan, b, a-b)
//             break
//         }
//         case '*': {
//             console.log('%s %s %s = %s', a, phepToan, b, a*b)
//             break
//         }
//         case '/': {
//             console.log('%s %s %s = %s', a, phepToan, b, a/b)
//             break
//         }
//     }
// }

// tinhToan(8, 2, '-')

// cau2.b 
function xacDinhMuaTrongNam(n) {
   switch(true) {
    case n >=3 && n <=5: {
        console.log('Mua Xuan')
        break
    }
    case n >=6 && n <=8: {
        console.log('Mua He')
        break
    }
    case n >=9 && n <=11: {
        console.log('Mua Xuan')
        break
    }
    default: {
        console.log('Mua Dong')
    }
   }
}

xacDinhMuaTrongNam(4)

// cau2.c
function xacDinhDoTuoiXemPhim(theLoai, tuoi) {
    switch(theLoai) {
        case 'HD': {
            if(tuoi > 16 ) {
                console.log('Duoc xem')
            }
            else {
                console.log('Khong duoc xem')
            }
            break
        }case 'KD': {
            if(tuoi > 18 ) {
                console.log('Duoc xem')
            }
            else {
                console.log('Khong duoc xem')
            }
            break
        }
        case 'Hk':
        case 'HH': {
            console.log('Duoc xem')
            break
        }
    }
}

xacDinhDoTuoiXemPhim('HH', 19)


