async function _default() {
    var urlImgJson = "https://api.ixiaowai.cn/api/api.php?return=json"
    var res = await requestJson(urlImgJson)
    var img_url = res.imgurl
    var img = await requestImg(img_url)
    widget.backgroundImage = img
}