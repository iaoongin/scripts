async function _one() {
    var urlJson = "http://v3.wufazhuce.com:8000/api/channel/one/0/0?user_id=10467837&channel=360&sign=8787a2bf0c8d7d83718fce9da2140643&version=4.6.0&uuid=&platform=android"
    var ico = "http://image.wufazhuce.com/favicon.ico"

    var res = await requestJson(urlJson)

    var img_url = res.data.content_list[0].img_url

    var title = "「ONE · 一个」"
    var content = res.data.content_list[0].forward

    addText(title, 16)
    widget.addSpacer(15)
    addText(content, 14)

    var img = await requestImg(img_url)
    widget.backgroundImage = img

}