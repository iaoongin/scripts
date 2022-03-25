async function _weibo() {

    var title = "微博热搜"
    // var urlJson = 'http://api.rosysun.cn/weibo/'
    var urlJson = 'https://v1.alapi.cn/api/new/wbtop'
    var cosimgStr = 'http://api.repeater.vip/cos-img/'
    var dogImgJson = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true'
    var res = await requestJson(urlJson)

    addText(title, 16)
    widget.addSpacer(15)

    for (let i = 0; i < 10; i++) {
        let n = res.data[i]
        let no = i + 1
        let word = n.hot_word
        let num = n.hot_word_num
        addText(no + ".  " + word + '  ' + num, 14)
        widget.addSpacer(5)
    }

    var imgJson = await requestJson(dogImgJson)
    // var imgUrl = imgurl[0]
    var imgUrl = 'https://picsum.photos/1920/1080'
    var img = await requestImg(imgUrl)
    widget.backgroundImage = img
    widget.backgroundColor = Color.black()

}