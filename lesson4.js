let array = [1,2,3,4,5];
//           0 1 2 3 4 
console.log(array[3]);

let name = ["Huy", "Khang", "Long"]
console.log(name[0]);

for(let i = 0; i< array.length; i++)
{
    console.log(array[i]);
}
//Dùng push để thêm phần tử vào
array.push(6);
console.log(array);

// để cập nhật phần tử(vd : thay phần tử 3 thành phần tử số 10)
array[2] = 10;
console.log(array);

//Tìm kiếm phần từ trong mảng array
console.log(array.indexOf(6));

//Xóa phần tử
let arr = ['a', 'b', 'c', 'd'];
arr.splice(1,3);
// 1: Vị trí bắt đầu để xóa
// 3: Số lượng phần tử cần xóa tính từ phần tử bắt đầu (có tính)
console.log(arr);

//Object -------------------------------------------------------------------------
let human = {
    ten : "Huy",
    tuoi : 25,
};
console.log(human);// In ra tất cả những gì khai báo trong phần human
console.log(human.ten);// In ra mỗi phần tên trong phần human

human.gender = "male";

//Duyệt tất cả thuộc tính có trong human
for(let key in human)
{
    console.log(key);
} 

//Tìm kiếm thuộc tính
if("ten" in human)
{
    console.log("Key ten có tồn tại trong human")
} 
else
{
    console.log("Key ten không tồn tại trong human")
}

// Xóa thuộc tính
delete human.ten;
console.log(human);

//CRUD Create read update delete -----------------------------------------------------
let Hocsinh = [
    {ten : "An", tuoi : "15", lop : "10A1"},
    {ten : "Bình", tuoi : "16", lop : "11A2"},
    {ten : "Châu", tuoi : "15", lop : "10A1"},
];
console.log(Hocsinh);
// Thêm phần tử Dũng vào trong Hocsinh
Hocsinh.push({ten : "Dũng", tuoi : "17", lop : "11A3"})
//Cập nhật tuổi của bình thành 17 (16-->17)
Hocsinh[1].tuoi = 17;
console.log(Hocsinh);
//Xóa phần tử Châu
Hocsinh.splice(2,1);
console.log(Hocsinh);
//In ra hết tất cả các phần tử
for (let i = 0; i< Hocsinh.length; i++)
{
    console.log(Hocsinh);
}