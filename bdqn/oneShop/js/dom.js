// var listDate = require('./listData').navList;
var navList = document.querySelector(".nav-list");
var itemsList = document.querySelector(".items-list");
var hisList = document.querySelector(".his-list");
var addSpan = function (items, item) { return items + `<span>${item}</span>`; };
var addList = function (list,item) {
    return list+`<div><div>${item.name}</div><div>${item.list.reduce(addSpan,"")}</div></div>`
}
// console.log(listDate.reduce(addList,""));
navList.innerHTML = navDate.reduce(addList,"");
var list = function(items,item){
    return items+
    `<div class="item" title="${item.title}">
    <img src="${item.imgSrc}" alt="${item.imgSrc}">
    <p class="text-oranger">￥${item.price}</p>
    <p class="title"><a href="#">${item.title}</a></p>
    <div class="btns">
    <div>收藏</div>
    <div>加入购物车</div>
    </div>
    </div>`;
}
itemsList.innerHTML = listData.reduce(list,"");
var hisData = listData.slice(0,4);
console.log(hisData);
var his = function(items,item){
    return items+
    `<div title="${item.title}">
        <img src="${item.imgSrc}" alt="${item.imgSrc}">
        <p class="text-center">${item.title}</p>
        <p class="text-red">
        ￥${item.price}
        </p>
    </div>`
}
hisList.innerHTML =  hisData.reduce(his,"");