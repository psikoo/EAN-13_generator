export function checkBarcode(barcode) { //Calculate and check checksum diggit based on https://www.gs1.org/services/how-calculate-check-digit-manually
    let barcode12Digits = barcode.substring(0,12);
    let sum = 0;
    for(let i = 0; i < barcode12Digits.length; i++) {
        if(i%2 != 0) {
            sum += parseInt(barcode12Digits[i])*3;
        } else if(i%2 == 0) {
            sum += parseInt(barcode12Digits[i])*1;
        }
    }
    let checkSum = 10-sum%10;
    if(checkSum != barcode[12]) {
        return"🟥 The given barcode is invalid";
    } else if(checkSum == barcode[12]) {
        return"🟩 The given barcode is valid";
    }
}