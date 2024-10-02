import sharp from "sharp";
import fs from "fs";

export async function pngBarcode(barcodeBinary, height, name) { //Main funciton
    fs.mkdirSync("output");
    await generatePNG("tmp.png", height);
    await editPixels("tmp.png", barcodeBinary)
    await cutPNG("tmp.png", height, name)
}

async function generatePNG(name, height) { //Creates a blank png 95x(height+1)
    await new sharp({create: {
        width: 95,
        height: height+1,
        channels: 3,
        background: { r: 255, g: 255, b: 255 }
    }}).png().toFile(name);
}

async function editPixels(img, barcodeBinary) { //Colors the PNG based on the barcodeBinary
    await sharp(img).ensureAlpha().raw().toBuffer({ resolveWithObject: true }).then( async ({ data, info }) => {
        const { width, height, channels } = info;  
        let rowMod = 0; 
        for(let i = 0; i < ((data.length/4)/95); i++) {
            let pixelCounter = 0; 
            for(let j = 0; j < barcodeBinary.length; j++) {
                if(barcodeBinary[j]=="1") {
                    data[0+pixelCounter+rowMod] = 0;
                    data[1+pixelCounter+rowMod] = 0;
                    data[2+pixelCounter+rowMod] = 0;
                    data[3+pixelCounter+rowMod] = 255;
                    pixelCounter+=4;
                } else {
                    pixelCounter+=4;
                }
                rowMod=i*95*4;
            }
        }
    await sharp(data, { raw: { width, height, channels } }).toFormat("png").toFile(img);
  })
}

async function cutPNG(img, height, name) { //Cuts of the last row of the PNG
    await sharp(img).resize(95, height, {
        kernel: sharp.kernel.nearest,
        position: "left top",
        fit: "cover"
    }).toFile("output/"+name);
    fs.unlinkSync("tmp.png");
}