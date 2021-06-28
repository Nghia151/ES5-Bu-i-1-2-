var giaCar = [8000, 7500, 7000];
var giaChoCar = 2000;

var giaSUV = [9000, 8500, 8000];
var giaChoSUV = 3000;

var giaBlack = [10000, 9500, 9000];
var giaChoBlack = 3500;

function getEle (ele){
    return document.getElementById(ele);
}
function LoaiXe(){
    var result;
    var grabCar = getEle('grabCar').checked;
    var grabSUV = getEle('grabSUV').checked;
    var grabBlack = getEle('grabBlack').checked;

    if(grabCar){
        result = 'grabCar';
    }else if(grabSUV){
        result = 'grabSUV';
    }else if (grabBlack){
        result = 'grabBlack';
    }
    return result;
}
function tinhTienCho(checkThoiGianCho, giaCho) {
    // cứ 3p tính 1 lân chờ 
    // 6p => 2 lần 
    // 5p => 1 lần
    var tienCho = 0;
    if((checkThoiGianCho % 3) == 0){
        tienCho =(checkThoiGianCho/3)* giaCho;
    }
    tienCho = ((checkThoiGianCho - checkThoiGianCho % 3)/3) * giaCho;
    return tienCho;

}

function tinhTien(checkSoKM, checkThoiGianCho, arrPrice, giaCho) {
    var tienCho = tinhTienCho(checkThoiGianCho, giaCho);
    if (checkSoKM <= 1) {
        return arrPrice[0] + tienCho; 
    } else if (checkSoKM > 1 && checkSoKM <= 19) {
        return arrPrice[0] + (checkSoKM - 1) * arrPrice[1] + tienCho;
    } else if (checkSoKM > 19) {
        return arrPrice[0] + 19 * arrPrice[1] + (checkSoKM - 19) * arrPrice[2] + tienCho ;
    }
    
};

function TongTien(){
    var checkSoKM = getEle('soKM').value;
    checkSoKM = parseFloat(checkSoKM);
    var checkThoiGianCho = getEle('thoiGianCho').value;
    checkThoiGianCho = parseFloat(checkThoiGianCho);
    
    var divThanhTien = getEle('divThanhTien');
    divThanhTien.style.display = 'block';

    var thanhTien = 0;

    var loaiXe = LoaiXe();
    
    switch(loaiXe){
        case 'grabCar':
            thanhTien = tinhTien(checkSoKM, checkThoiGianCho, giaCar, giaChoCar);
        break;
        case 'grabSUV':
            thanhTien = tinhTien(checkSoKM, checkThoiGianCho, giaSUV, giaChoSUV);
        break;
        case 'grabBlack':
        thanhTien = tinhTien(checkSoKM, checkThoiGianCho, giaBlack, giaChoBlack);
        break;
    }
    var spanTien = getEle('xuatTien');
    spanTien.innerHTML = thanhTien;
}


