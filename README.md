
# EAN-13 generator

EAN-13 generator is a small JavaScript script that generates EAN-13 barcodes from their human readable number (9771234567003).  

## Running the script

**Usage information:**

This script runs with Node.js and npm. To runn the script you must install Node.js and npm.

**Before running:**

- You need to install the needed dependencies by running the following command:

```bash
npm install
```

### Actually running the script

**start.cmd:**
Generates a png for the given barcode number (it stores the .png in the /output file).
**(The outputFileName must end in .png)**
```bash
.\start.cmd {barcodeNumber} {barcodeHeight} {outputFileName}
```
