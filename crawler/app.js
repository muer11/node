var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
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

app.get("/", (req, res, next) => {
  console.log(req);
  superagent.get("https://item.taobao.com/item.htm?id=567060908115&ali_refid=a3_430406_1007:1103286570:N:3035_0_100:2da7a5a36b7e973e50b4d484707a525f&ali_trackid=1_2da7a5a36b7e973e50b4d484707a525f&spm=a21bo.2017.201874-sales.36")
    // 豆瓣小组 https://www.douban.com/group/explore 
    // 知乎 https://www.zhihu.com/question/21747929
    // 云音乐 https://music.163.com/#/discover/toplist
    // 淘宝 https://www.taobao.com/
    // 淘宝详情 https://item.taobao.com/item.htm?id=567060908115&ali_refid=a3_430406_1007:1103286570:N:3035_0_100:2da7a5a36b7e973e50b4d484707a525f&ali_trackid=1_2da7a5a36b7e973e50b4d484707a525f&spm=a21bo.2017.201874-sales.36
    // 京东详情 https://item.jd.com/100000721312.html
    // .set("header", header)
    .end((err, sres) => {
      if (err) {
        return next(err);
      }
      // console.log("sres");
      // console.log(sres);
      // res.send(sres.text);
      let $ = cheerio.load(sres.text);
      res.send(sres.text);
      // let html = $("#description").html();
      // res.send(sres.text);
      let items = [];
      items.push($("#description .content").html());
      // console.log("*************************")
      // console.log($);
      // const types = typeof $("#description .content p");
      // items.push($("#description .content").attr("src"))
      // console.log("----------------------------------")
      // console.log($("#description .content img").length);
      res.send($("#description .content").html());
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
