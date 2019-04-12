var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// const express = require("express");
const charset = require("superagent-charset");
const superagent = require("superagent");
const cheerio = require("cheerio");
charset(superagent);
// const app = express();

// let header = {
//   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//   'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
//   'Host': 'www.dianping.com',
//   'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
//   'Cache-Control': 'max-age=0',
//   'Connection': 'keep-alive'
// };

// let header = {
//   ":authority": "www.jianshu.com",
//   ":method": "GET",
//   ":path": "/p/b915732b7ddb",
//   ":scheme": "https",
//   "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
//   "accept-encoding": "gzip, deflate, br",
//   "accept-language": "zh-CN,zh;q=0.9",
//   "cache-control": "max-age=0",
//   "cookie": "__yadk_uid=QsNSvEGMGzzjtiaCTGyI6MPv1U3oQSzT; read_mode=day; default_font=font2; locale=zh-CN; _m7e_session_core=432247dab3c667b4fd151d035a79383b; signin_redirect=https%3A%2F%2Fwww.jianshu.com%2Fp%2Ffb2ea27d8587; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2216a054c7b0a633-0b2479b61a88d1-e323069-2073600-16a054c7b0bb99%22%2C%22%24device_id%22%3A%2216a054c7b0a633-0b2479b61a88d1-e323069-2073600-16a054c7b0bb99%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24latest_referrer_host%22%3A%22www.google.com%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%7D%7D; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1554870306,1554894930,1554950429,1554954715; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1554955363",
//   "if-none-match": 'W/"174afcf76e31a88ae9cc6c8723c300e7"',
//   "upgrade-insecure-requests": "1",
//   "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
// }


// app.get('/', (req, res, next) => {
//   console.log(req)
//   superagent.get('https://www.v2ex.com/')
//     .end((err, sres) => {
//       // 常规的错误处理
//       if (err) {
//         return next(err);
//       }
//       // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
//       // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
//       // 剩下就都是 jquery 的内容了
//       let $ = cheerio.load(sres.text);
//       let items = [];
//       items.push($('.item_title a'));
//       console.log("*****************")  initialize
//       console.log(items)
//       res.send(sres.text);
//       // $('.item_title a').each((idx, element) => {
//       //   let $element = $(element);
//       //   items.push({
//       //     title: $element.text(),
//       //     href: $element.attr('href')
//       //   });
//       // });

//       // res.send(items);
//     });
// });

// 简书请求头
// let header = {
//   "Host": "www.jianshu.com",
//   "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
//   "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
//   "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
//   "Accept-Encoding": "gzip, deflate, br",
//   "Referer": "https://www.baidu.com/link?url=B2O1LU08AQMKjNTd4x834ymsOFvFkYX-y1_FiUdlxIx2M2igfHQrX9hwiDoW1V7K&wd=&eqid=b5068db50003cff3000000045cb04a89",
//   "Connection": "keep-alive",
//   "Cookie": "signin_redirect=https%3A%2F%2Fwww.jianshu.com%2Fu%2FyZq3ZV; read_mode=day; default_font=font2; locale=zh-CN; _m7e_session_core=13c953d86b328db80b3ca31a2f673d44; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2216a10a3467e5a5-0279c776738b4f8-4c312c7c-2073600-16a10a3467f185%22%2C%22%24device_id%22%3A%2216a10a3467e5a5-0279c776738b4f8-4c312c7c-2073600-16a10a3467f185%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%2C%22%24latest_referrer_host%22%3A%22www.baidu.com%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%7D%7D; sajssdk_2015_cross_new_user=1; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1555057297; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1555057297",
//   "Upgrade-Insecure-Requests": "1",
//   "If-None-Match": 'W/"8ed1aed8322088f78cc96efcd711534f"',
//   "Cache-Control": "max-age=0"
// }

// 网易云音乐
let header = {
  "Host": "music.163.com",
  // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
  // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  // "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
  // "Accept-Encoding": "gzip, deflate, br",
  // "Connection": "keep-alive",
  // "Cookie": "JSESSIONID-WYYY=fNwXgq329NfAb%2Bqvm2dWNJv%5CuEefUuPy3NxBxMn3tO1dmjNi0oOkrKfmCaaX4%2BokykTNpJI2rJ2k8fdQbZEqcZtUXXk%5CmZbpwoty9iCoHpNOpxHlctApkHpI3BZbrrq9S6gq64UFNGBu8juggCh404b5g0qOA56xKMbgu4G7hw2npQb1%3A1555061019264; _iuqxldmzr_=32; _ntes_nnid=38a9b10499f00c54fe2d3c09c4ebe512,1555059219279; _ntes_nuid=38a9b10499f00c54fe2d3c09c4ebe512; WM_NI=39aemAVFQRpRzOdq2X7F9%2F6I5sriA82fisPefGwjFMT1tr0j6dsHngxLmFnI7s%2BbxIpeVPHSAIXvDxBsovX%2BIZD0hMfRteqsf7LK%2FH%2FzUI2k%2BFM6HUEeyv3xO3nT%2Fp%2BvSW4%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eea5f95ffcac8cb6f8529a9e8fa6c14f978a9bbab86397bc8a94c46085bc8da2c52af0fea7c3b92af1e7af86f04b969a9fb3f35aba91ac92b154f59af7d0b543f7adbe8ac434f2baa794d36fa699b98bc54798efbc93b362f6bcbda9ed6dbc94a3a7ed43f5ade583fb43b4bb9ab1cb5983979897c77482ada197db218b868cd1eb47a68ebc86f479a6e984acae44eda69baab161e99a83d7cb5f87bbb797b2748deda2b5ae7ce9aa9db8b737e2a3; WM_TID=wm1T03YT1ClFEEQEERJ5zUZE4VGTNCQU",
  // "Upgrade-Insecure-Requests": "1",
  // "Cache-Control": "max-age=0"
}

app.get("/", (req, res, next) => {
  console.log(req);
  superagent.get("https://music.163.com/discover/toplist")
    // 豆瓣小组 https://www.douban.com/group/explore 
    // 知乎 https://www.zhihu.com/question/21747929
    // 云音乐 https://music.163.com/#/discover/toplist
    // https://music.163.com/discover/toplist
    // 淘宝 https://www.taobao.com/
    // 淘宝详情 https://item.taobao.com/item.htm?id=567060908115&ali_refid=a3_430406_1007:1103286570:N:3035_0_100:2da7a5a36b7e973e50b4d484707a525f&ali_trackid=1_2da7a5a36b7e973e50b4d484707a525f&spm=a21bo.2017.201874-sales.36
    // 京东详情 https://item.jd.com/100000721312.html
    .set(header)
    // .charset('gbk')
    .end((err, sres) => {
      if (err) {
        return next(err);
      }
      // console.log("sres");
      // console.log(sres);
      res.send(sres.text);
      let $ = cheerio.load(sres.text);
      // let content = null;
      // $("#description .content").each((idx, element) => {
      //   // console.log($element.attr("src"));
      //   let $element = $(element);
      //   content = $element;
      //   console.log($element);
      //   // items.push({
      //   //   // title: $element.text(),
      //   //   // href: $element.attr("href")
      //   //   src: $element.attr("src")
      //   // });
      // });
      // console.log(content);
      // res.send(content);
      // res.send(sres.text);
      // let html = $("#description").html();
      // res.send(sres.text);
      // let items = [];
      // items.push($("#description .content").html());
      // console.log("*************************")
      // console.log($);
      // const types = typeof $("#description .content p");
      // items.push($("#description .content").attr("src"))
      // console.log("----------------------------------")
      // console.log($("#description .content img").length);
      // res.send($("#description .content").html());
      // $(".item_title a")
      // $("#description img").each((idx, element) => {
      //   console.log($element.attr("src"));
      //   let $element = $(element);
      //   items.push({
      //     // title: $element.text(),
      //     // href: $element.attr("href")
      //     src: $element.attr("src")
      //   });
      // });
      // res.send(items);
    })
});

// app.listen(3000, function () {
//   console.log("app is listening at port 3000");
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
