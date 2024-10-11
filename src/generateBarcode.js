export function generateBarcode(barcode) {
    //Split barcode
    let barcodeFirstDigit = barcode[0];
    let barcodeDigits = barcode.substring(1);
    //Init arrays
    let barcodeCaps = [1,0,1];
    let barcodeLeftSide = new Array(42);
    let barcodeMid = [0,1,0,1,0];
    let barcodeRightSide = new Array(42);
    //Convert number to binary applying mask
    let mask = firstDigitLookUp(barcodeFirstDigit);
    let barcodeDigitsBinary = "";
    for(let i = 0; i<barcodeDigits.length; i++) {
        barcodeDigitsBinary += DigitLookUp(barcodeDigits[i], mask[i])+" ";
    }
    //Write binary to arrays
    let barcodeLeftDigitsBits = barcodeDigitsBinary.substring(0,48).split(" ");
    barcodeLeftDigitsBits.pop();
    barcodeLeftDigitsBits = barcodeLeftDigitsBits.join('');
    for(let i = 0; i<barcodeLeftDigitsBits.length; i++) {
        barcodeLeftSide[i] = parseInt(barcodeLeftDigitsBits[i]);
    }
    let barcodeRightDigitsBits = barcodeDigitsBinary.substring(48).split(" ");
    barcodeRightDigitsBits.pop();
    barcodeRightDigitsBits = barcodeRightDigitsBits.join('');
    for(let i = 0; i<barcodeLeftDigitsBits.length; i++) {
        barcodeRightSide[i] = parseInt(barcodeRightDigitsBits[i]);
    }
    //Join arrays
    let barcodeBin = barcodeCaps.concat(barcodeLeftSide, barcodeMid, barcodeRightSide, barcodeCaps);
    return barcodeBin;
}

function firstDigitLookUp(number) { //Returns the mask to be used when converting the numbers to binary
    if(number==0) {
        return "LLLLLLRRRRRR";
    } else if(number==1) {
        return "LLGLGGRRRRRR";
    } else if(number==2) {
        return "LLGGLGRRRRRR";
    } else if(number==3) {
        return "LLGGGLRRRRRR";
    } else if(number==4) {
        return "LGLLGGRRRRRR";
    } else if(number==5) {
        return "LGGLLGRRRRRR";
    } else if(number==6) {
        return "LGGGLLRRRRRR";
    } else if(number==7) {
        return "LGLGLGRRRRRR";
    } else if(number==8) {
        return "LGLGGLRRRRRR";
    } else if(number==9) {
        return "LGGLGLRRRRRR";
    }
}

function DigitLookUp(number, mode) { //Converts numbers to binary based on the given mask
    if(number==0) {
        if(mode=="L") {
            return "0001101";
        } else if(mode=="G") {
            return "0100111";
        } else if(mode=="R") {
            return "1110010";
        }
    } else if(number==1) {
        if(mode=="L") {
            return "0011001";
        } else if(mode=="G") {
            return "0110011";
        } else if(mode=="R") {
            return "1100110";
        }
    } else if(number==2) {
        if(mode=="L") {
            return "0010011";
        } else if(mode=="G") {
            return "0011011";
        } else if(mode=="R") {
            return "1101100";
        }
    } else if(number==3) {
        if(mode=="L") {
            return "0111101";
        } else if(mode=="G") {
            return "0100001";
        } else if(mode=="R") {
            return "1000010";
        }
    } else if(number==4) {
        if(mode=="L") {
            return "0100011";
        } else if(mode=="G") {
            return "0011101";
        } else if(mode=="R") {
            return "1011100";
        }
    } else if(number==5) {
        if(mode=="L") {
            return "0110001";
        } else if(mode=="G") {
            return "0111001";
        } else if(mode=="R") {
            return "1001110";
        }
    } else if(number==6) {
        if(mode=="L") {
            return "0101111";
        } else if(mode=="G") {
            return "0000101";
        } else if(mode=="R") {
            return "1010000";
        }
    } else if(number==7) {
        if(mode=="L") {
            return "0111011";
        } else if(mode=="G") {
            return "0010001";
        } else if(mode=="R") {
            return "1000100";
        }
    } else if(number==8) {
        if(mode=="L") {
            return "0110111";
        } else if(mode=="G") {
            return "0001001";
        } else if(mode=="R") {
            return "1001000";
        }
    } else if(number==9) {
        if(mode=="L") {
            return "0001011";
        } else if(mode=="G") {
            return "0010111";
        } else if(mode=="R") {
            return "1110100";
        }
    }
}