import { generateBarcode } from "./generateBarcode.js";
import { pngBarcode } from "./pngBarcode.js";

// get barcode from cmd
console.log("> barcode: "+process.argv[2]);
let barcodeBinary = generateBarcode(process.argv[2]);
console.log(barcodeBinary);
pngBarcode(generateBarcode);

//TODO create a funcition to calculate checksum to see if the barcode is valid before everything