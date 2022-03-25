async function _gif() {
    var img_url = 'http://img.adoutu.com/picture/1601094144948.gif'
    var img = await requestImg(img_url)
    widget.backgroundImage = img

    var num = 0
    Timer.schedule(1000, true, () => {

        widget.addText("" + num++)
    })
}