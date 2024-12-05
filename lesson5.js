
//file sửa bài tập về nhà buổi 4---------------------------------------------------------------------------------------------------------------------------------------
// 1.Lấy thông tin từ form
// const loginForm = document.getElementById("login-form");
// console.log(loginForm);

// loginForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     .value: lấy giá trị người dùng nhập vào
//     .trim(): loại bỏ đi khoảng trắng
//     const userName = document.getElementById("userName").value.trim();
//     const password = document.getElementById("password").value.trim();

//     console.log(userName, password);
// })

// 2. Chỉnh màu nền cho đoạn văn bản
// const text = document.getElementById("text");
// text.style.backgroundColor = "green";
// text.style.color = "white";

// 3. Hiển thị nội dung các mục của danh sách thả xuống
// const color = document.getElementById("color");
// console.log(color);
// const option = color.options;
// console.log(option);
// for(let i =0; i<option.length; i++)
// {
//     console.log(option[i].text);
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//BÀI 5
//Function -------------------------------------------------------------------------------------------------------------------------------------------------
//Hàm có giá trị trả về 
function dienTichHCN(chieuDai, chieuRong)
{
    return chieuDai * chieuRong;
}

//Hàm không có giá trị trả về
function Hello(){
    console.log("Hello World");
}

let a = 5;
let b = 10;
let result = dienTichHCN(a,b);
console.log(result);
Hello();

//LocalStorage --------------------------------------------------------------------------------------------------------------------------------------------
//setItem(key, value) : thêm khóa và giá trị vào 
localStorage.setItem("userName", "Huy");
localStorage.setItem("number", 123);
//getIte(key) : Tìm kiếm giá trị dựa vào key
let getNumber = localStorage.getItem("number");
console.log(123);
console.log(getNumber);
let arr = [1, 2, 3, 4, 5];
//JSON.stringify(arr): Chuyển đổi từ kiểu dữ liệu array sang string
localStorage.setItem("ARRAY", JSON.stringify(arr));
//Chuyển đổi từ kiểu dữ liệu string sang kiểu dữ liệu gốc
console.log(JSON.parse(localStorage.getItem("ARRAY")));
//Xóa cặp key value trong local storage
localStorage.removeItem("number");
//Xóa tất cả cặp key trong local storage
localStorage.clear();