import { checkBarcode } from "./checkBarcode.js";
import { generateBarcode } from "./generateBarcode.js";
import { pngBarcode } from "./pngBarcode.js";

let barcode = process.argv[2];
let height = process.argv[3];
let name = process.argv[4];
//Checksum barcode
console.log(checkBarcode(barcode));
console.log("> Barcode: "+barcode);
console.log("> Height: "+height);
//Generate barcode binary
let barcodeBinary = generateBarcode(barcode);
console.log("> Barcode binary: "+barcodeBinary);
//Create barcode PNG
pngBarcode(barcodeBinary, parseInt(height), name);
console.log("> Barcode generated: ./output/"+name);
