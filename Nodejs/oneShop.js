const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const url = "http://search.yhd.com/c0-0/k%25E7%258F%258D%25E7%258F%25A0/";
axios.get(url).then(function (res) {
  let $ = cheerio.load(res.data);

  listData($);
  // len =$("#itemSearchList .mod_search_pro");
  // console.log(len.html());
  // fs.writeFile('listData.html',res.data, (err) => {
  //   if (err) throw err;
  //   console.log('The file has been saved!');
  // });
});
let Data ={
  imgSrc:'',
  price:0,
  title:''
}
function listData($) {
  let list = [];
  var items = $(".itemBox");
  for (var i = 0; i < items.length; i++) {
      let item = items.eq(i);
      list.push({
        imgSrc :  item.find(".proImg img").attr("src"),
        price : item.find(".proPrice em").attr("yhdprice"),
        title :  item.find(".proName a").attr("title")
      });
    }
    // })
  fs.writeFile('listData.js',JSON.stringify(list), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
