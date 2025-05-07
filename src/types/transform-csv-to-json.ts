function TransformCsvToJson(Products) {
    const jsonArray = [];
    const headers = Products[0].split(',');

    for (let i = 1; i < Products.length; i++) {
        const obj = {};
        const currentline = Products[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        jsonArray.push(obj);
    }

    // escrever em db/products.json
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, '../db/products.json');
    fs.write(filePath, JSON.stringify(jsonArray, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });

    return jsonArray;
}
