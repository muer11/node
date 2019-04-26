
var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });

nightmare
//   .goto('https://www.taobao.com/')
  // .goto('https://s.taobao.com/search?q=%E6%96%87%E5%85%B7&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306')
  .goto('https://detail.tmall.com/item.htm?id=37778083077&ali_refid=a3_430583_1006:1109237610:N:cuuuw%20Kb4u2n9%20E30U5Itg==:133664c375a29e98971ec03926e271c1&ali_trackid=1_133664c375a29e98971ec03926e271c1&spm=a230r.1.14.3',)
  //   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#zero_click_wrapper .c-info__title a')
  .evaluate(function () {
    // return document.querySelector('#zero_click_wrapper .c-info__title a').href;
    // console.log("------------------------");
    // console.log(document.querySelector("body").innerHTML);
    return document.querySelector("body").innerHTML;
  })
  .end()
  .then(function (result) {
    // console.log("22222222222222222222")
    console.log(result);
    console.log(typeof result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });