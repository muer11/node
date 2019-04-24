// // 参考Nightmare-api:  https://github.com/segmentio/nightmare#api

// const Nightmare = require('nightmare')
// const options = {
//     paths: { //关于Eletron的路径 https://github.com/atom/electron/blob/master/docs/api/app.md#appgetpathname
//         userData: '/user/data',
//     },
//     switches: { //设置代理
//         'proxy-server': '1.2.3.4:5678',
//         'ignore-certificate-errors': true
//     },
//     electronPath: require('electron'), //引用的electron版本
//     openDevTools: {
//         mode: "bottom",  // 开发者工具位置: right, bottom, undocked, detach
//     },
//     show: true, // 要不要显示浏览器, 默认false
//     dock: true, // 要不要在Dock上显示图标, 默认false
//     waitTimeout: 60000, // .wait()方法超时时长，单位ms，默认30s
//     gotoTimeout: 1000, // .goto()方法超时时长，单位ms, 默认30s
//     loadTimeout: 1000, // 触发事件后的加载超时时长， 单位ms，默认infinite
//     executionTimeout: 86400000, //.evaluate()方法超时时长，单位ms 
//     typeInterval: 20, //使用.type()时，击键之间需要等待多长时间，单位ms，默认100ms
//     pollInterval: 50, //检查等待多长时间，.wait()条件才能成功，单位ms，默认250ms
//     maxAuthRetries: 3, //定义在使用.authenticate()设置身份验证时重试身份验证的次数, 默认3
//     certificateSubjectName: 'tester', //用于确定电子选择的客户端证书的字符串。如果设置了此选项，则select-client-certificate事件将被设置为遍历certificatist并找到电子证书对象上匹配subjectName的第一个证书
// }
// const nightmare = Nightmare(options)

// nightmare
//     .engineVersions() //
//     .useragent(useragent)
//     .authentication(user, password)
//     .goto(
//         //可设置参数：url, code, method, referrer, headers
//         //若失败，则会返回一个对象，{message、code、details、url} 
//         //注意，来自服务器的任何有效响应都被认为是“成功的”, 这意味着404“未找到”错误是goto的成功结果。
//         //只有那些不会导致浏览器窗口中出现页面的情况才是错误，比如没有服务器响应给定的地址、服务器挂在响应中间或url无效。
//         //您还可以通过在Nightmare构造函数上设置gotoTimeout选项来调整goto在超时之前将等待多长时间
//         'https://duckduckgo.com', 
//     )
//     // .back()
//     // .forward()
//     // .refresh()
//     .type('#search_form_input_homepage', 'github nightmare')
//     // .insert(selector[, text]) //注意跟type()方法区分 
//     // .check(selector)
//     // .uncheck(selector)
//     // .select(selector, option)
//     .click('#search_button_homepage')
//     // .mousedown(selector)
//     // .mouseup(selector)
//     // .mouseover(selector)
//     // .mouseout(selector)
//     // .scrollTo(top, left)
//     // .viewport(width, height)
//     // .inject(type, file) //引入本地文件，仅限js或css
//     .wait('#r1-0 a.result__a')
//     //.evaluate(fn[, arg1, arg2,...])
//     .evaluate(() => document.querySelector('#zero_click_wrapper .c-info__title a').href)
//     .end()
//     .then(function (resullt) {
//         console.log(resullt);
//     })
//     .catch(error => {
//         console.error('Search failed:', error)
//     })
//     .halt(error, done) //杀死进程，并返回“Nightmare Halted”
