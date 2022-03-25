/**
 * 参数说明:
 *  -type： 指定类型
 *      - one: 「ONE · 一个」
 */
(async () => {
    console.log('test start.')
    var widget = new ListWidget()
    var params = getParams()

    console.log(params)
    var type = params[0]


    try {

        const base_url = 'https://cdn.jsdelivr.net/gh/iaoongin/scripts@main'
        
       if (strIn(type, ['one', '1'])) {
            eval(await requestString(base_url + "/scriptable-code/compose/_one.js"))
            await _one()
        } else if (strIn(type, ['battery', '2'])) {
            eval(await requestString(base_url + "/scriptable-code/compose/_battery.js"))
            await _battery()
        } else if (strIn(type, ['weibo', '3'])) {
            eval(await requestString(base_url + "/scriptable-code/compose/_weibo.js"))
            await _weibo()
        } else if (strIn(type, ['zhihu', '4'])) {
            eval(await requestString(base_url + "/scriptable-code/compose/_zhihu.js"))
            await _zhihu()
        } else {
            eval(await requestString(base_url + "/scriptable-code/compose/_default.js"))
            // await _weibo()
            await _default()
        }

        console.log('compose done.')
    } catch (error) {
        console.error(error)
        addText('脚本错误: ' + error)
    } finally {
        end()
    }

    console.log('test end.')

    // 通用 start =================================================

    // http start =================================================
    /**
     * 请求图片
     * @param {*} url 
     * @param {*} headers 
     */
    async function requestImg(url, headers = {}) {
        return await new Request(url).loadImage().catch(requestError)
    }

    /**
     * 请求json
     * @param {*} url 
     * @param {*} headers 
     */
    async function requestJson(url, headers = {}) {
        return await new Request(url).loadJSON().catch(requestError)
    }

    /**
     * 请求String
     * @param {*} url 
     * @param {*} headers 
     */
    async function requestString(url, headers = {}) {
        return await new Request(url).loadString().catch(requestError)
    }

    /**
     * 处理请求异常
     * @param {*} e 
     */
    function requestError(e) {
        console.error(e)
        widget.addText('网络请求错误。' + e)
    }
    // http end =================================================








    // 组件 start =================================================


    // 添加文字
    function addText(text, fontSize = 20) {
        let wt = widget.addText(text)
        wt.font = Font.systemFont(fontSize)
        wt.textColor = Color.white()
        wt.shadowColor = Color.black()
        wt.shadowRadius = 3
    }


    // 结束
    function end() {
        if (config.runsInWidget) {
            Script.setWidget(widget)
            Script.complete()
        } else {
            // widget.presentMedium()
            widget.presentLarge()
        }
    }

    function getParams() {
        if (args.widgetParameter) {
            return ("" + args.widgetParameter).split(',')
        }

        return ['default']
    }

    // 组件 start =================================================



    // 其他 start
        // 其他 start
    function strIn(str, array) {
        return array.indexOf(str) != -1
    }
    // 其他 end



    // 通用 end =================================================
})()
