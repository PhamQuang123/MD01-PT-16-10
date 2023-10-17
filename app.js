// ex - 1: sắp xếp chuỗi
function str1() {
  let temp = prompt("Nhập 1 chuỗi");
  let arr = temp.split(",");
  temp = arr.sort();
  temp = arr.join();
  return temp;
}
console.log(str1());

// ex=2: tìm độ dài chủa chuỗi
// let input = prompt("Nhập 1 chuỗi:");
// function str(par) {
//   return par.length;
// }
// console.log(str(input));

// ex = 3: trả về 1 chuỗi viét hoa

// function str() {
//   let input = prompt("Nhập 1 chuỗi:");
//   return input.toUpperCase();
// }
// console.log(str());

// ex - 4: đảo ngược thứ tự chuỗi
//debugger;
// function str() {
//   let input = prompt("Nhập 1 chuỗi:");
//   let newstr = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     newstr += input[i];
//   }
//   return newstr;
// }
// console.log(str());

// ex - 5: trả về mảng mới chỉ chứa số nguyên tố
//debugger;
let number2 = prompt("Nhập số để check nào:");
let arr = number2.split(",");
let seach = (Prime) => {
  let newArr = [];

  for (let i = 0; i < Prime.length; i++) {
    if (+Prime[i] > 2) {
      let check = 0;
      for (let j = 2; j < Prime[i]; j++) {
        if (+Prime[i] % j === 0) {
          check++;
        }
      }
      if (check <= 0) {
        newArr.push(+Prime[i]);
      }
    } else if (+Prime[i] === 2) {
      newArr.push(+Prime[i]);
    } else {
      continue;
    }
  }
  return newArr;
};

console.log(seach(arr));
