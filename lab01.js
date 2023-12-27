let x =3 
let y = 4
let z = 6 

// 
let t1 = x*x+2*x+1
console.log(t1)

// 
let t2 = x*x*x-3*x*y-5*y+3*y*y
console.log(t2)

// 
let t3 = ((x*y)*(x*y))-2*x*x*y+13*y
console.log(t3)

// 
let t4 = 4*x*x*x+3*x*y+y*y-(2*x*x-3*y)
console.log(t4)

// 
let t5 = (5*x*x/4*x*y)+y*y
console.log(t5)

// 
let t6 = x*x-2*z*x*y/y*y+5*x-2*y*y+4*x*z*z*z+z*z*z
console.log(t6)
console.clear()

// Khởi tạo object 
let dienThoai = {
    ten: 'Iphone 14 promax',
    hangSanXuat: 'Apple',
    mauSac: 'Trang',
    gia: '10000USD'
}

dienThoai.gia = '750USD'

console.log(dienThoai)
console.clear

// Tính chu vi diện tích đường tròn 
let d = 5
const pi = 3.14
// Chu vi 
let chuvi = d*pi
console.log(chuvi) 
// Diện tích 
let s = pi*((d/2)*(d/2))
console.log(s)
console.clear()

// Chu vi, diện tích hình chủ nhật 
let a = 15
let b = 10
// Chu vi 
let p = (a+b)*2
console.log(p)
// Diện tích 
let S = a*b
console.log(S)
console.clear()

// tinh do dai ab
let thoiGianDiChuyen = 8/3
let vanToc = 42 

let quangDuong = vanToc * thoiGianDiChuyen

console.log(quangDuong)
console.clear()

// the tich khoi go
let theTichHinh1 = 8 * 5 * 6

let theTichHinh2 = 24 * 5 * 6

console.log(theTichHinh1 + theTichHinh2)
console.clear()

// ham so
function tinhTong2So(a, b) {
    let tong = a + b

    console.log('Tong:', tong)
}

tinhTong2So(1, 2)
console.clear()

// 
function chuViHinhTron(d) {
    const pi = 3.14
    let chuVi = d * pi 
    
    console.log('Chu Vi', chuVi)
   return chuVi
}

chuViHinhTron(5)
console.clear()

function tinhTheTichKhoiHop(d, r, c) {
    let theTich = (d * r * c)

    return theTich
}

let theTich1 = tinhTheTichKhoiHop(24, 5, 6)
let theTich2 = tinhTheTichKhoiHop(8, 5, 6)

console.log('The Tich Khoi Hop:', theTich1 + theTich2)