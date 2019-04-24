
var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });

nightmare
//   .goto('https://www.taobao.com/')
  .goto('https://s.taobao.com/search?q=%E6%96%87%E5%85%B7&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#zero_click_wrapper .c-info__title a')
  .evaluate(function () {
    // return document.querySelector('#zero_click_wrapper .c-info__title a').href;
    return document.querySelector("body").innerHTML;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });