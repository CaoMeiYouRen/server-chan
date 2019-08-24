import got = require('got')
/**
 *
 *
 * @author CaoMeiYouRen
 * @date 2019-08-24
 * @export
 * @class ServerChan
 */
export class ServerChan {
    /**
     *
     * 前往 https://sc.ftqq.com 领取
     * @private
     * @static
     * @type {string}
     * @memberof ServerChan
     */
    private static SCKEY: string
    /**
     * 初始化
     *
     * @author CaoMeiYouRen
     * @date 2019-08-24
     * @export
     * @param {string} SCKEY https://sc.ftqq.com 发的sckey，此处配置后为全局配置
     */
    static init(SCKEY: string) {
        this.SCKEY = SCKEY
    }
    /**
     * 发起一个get请求
     *
     * @author CaoMeiYouRen
     * @date 2019-08-13
     * @export
     * @param {string} url
     * @param {object} [data={}]
     * @param {*} [headers={}]
     * @returns {(Promise<object | string>)}
     */
    static async sendGet(url: string, data: object = {}, headers: any = {}): Promise<object | string> {
        try {
            let res = await got(url, { timeout: 10000, method: 'get', query: data, form: true, headers })
            return res.body
        } catch (error) {
            console.error(error)
            return ''
        }
    }
    /**
     * 发送通知
     *
     * @author CaoMeiYouRen
     * @date 2019-07-23
     * @export
     * @param {string} text 标题
     * @param {string} desp 内容
     * @returns {(Promise<object | string>)}
     */
    static async  noticeMaster(text: string, desp?: string): Promise<object | string> {
        try {
            let url = `https://sc.ftqq.com/${this.SCKEY}.send`
            let res = await this.sendGet(url, { text, desp })
            return res
        } catch (error) {
            console.error(error)
            return ''
        }
    }

}

