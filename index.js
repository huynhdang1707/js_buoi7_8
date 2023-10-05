function tinhTongDuong() {
  var soNguyen = document.getElementById("number").value;
  var numbersArray = soNguyen.split("");
  var tongSoNguyen = 0;
  var cacSoNguyen = 0;
  var soNguyenMin = 0;

  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
      tongSoNguyen += Number(numbersArray[i]);
      cacSoNguyen++;
      //   soNguyenMin = Math.min(...numbersArray[i]);
    }
  }
  var soNguyenMin = numbersArray[0];
  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < soNguyenMin) {
      soNguyenMin += numbersArray[i];
    }
  }
  //   console.log("timSvGioiNhat-soLonNhat", soLonNhat);
  //   var soNguyenMin = Math.min(...numbersArray);
  var message = `
    <h2>Tổng số dương: ${tongSoNguyen}</h2>
    <h2> Các số dương : ${cacSoNguyen++}</h2>
    <h2>Số nhỏ nhất : ${soNguyenMin}
    <h2>Số nhỏ nhất trong mang : ${soNguyenMin}`;

  document.getElementById("result-tinh-tong").innerHTML = message;
}
