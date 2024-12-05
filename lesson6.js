//Bài 1: Tính tổng các số hạng-------------------------------------------------------------------------------
function tinhTong(number)
{
    let result = 0
    for(let i = 1; i<=number; i++)
    {
        result = result + i;//result += i;
        console.log(i);
    }
    return result;
}
ket_qua = tinhTong(3);
console.log(ket_qua);

//Bài 2: Xác định số nguyên tố---------------------------------------------------------------------------------
function soNguyenTo(num)
{
    if(num < 2)
    {
        return false;
    }
    //Vòng lập từ 2 tới num
    for(let i = 2; i<num; i++)
    {
        if (num % i == 0) 
        {
            return false;
        }
    }
    return true;
}
let nguyenTo = 5;
console.log(soNguyenTo(nguyenTo));
if (soNguyenTo(nguyenTo))
{
    console.log("Số", nguyenTo, "là số nguyên tố");
}
else
{
    console.log("Số", nguyenTo, "không là số nguyên tố");
}