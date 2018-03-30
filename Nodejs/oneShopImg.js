const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const list = require("./listData");

// for(var i = 0;i<list.length;i++){
//     downlond("http:"+list[i].imgSrc,i);

//     // console.log(list[i].imgSrc);
// }
// function downlond(url,i){
//     // GET request for remote image
//     axios({
//         method:'get',
//         url:url,
//         responseType:'stream'
//     }).then(function(response) {
//         response.data.pipe(fs.createWriteStream(`./img/list${i}.jpg`))
//     });
// }
let data =[];
for(var i = 0;i<list.length;i++){
    data.push({
        imgSrc :  `./img/list${i}.jpg`,
        price : list[i].price,
        title : list[i].title
    });
}
fs.writeFile('listData.js',JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});