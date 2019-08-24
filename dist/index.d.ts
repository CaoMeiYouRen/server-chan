/**
 *
 *
 * @author CaoMeiYouRen
 * @date 2019-08-24
 * @export
 * @class ServerChan
 */
export declare class ServerChan {
    /**
     *
     * 前往 https://sc.ftqq.com 领取
     * @private
     * @static
     * @type {string}
     * @memberof ServerChan
     */
    private static SCKEY;
    /**
     * 初始化
     *
     * @author CaoMeiYouRen
     * @date 2019-08-24
     * @export
     * @param {string} SCKEY https://sc.ftqq.com 发的sckey，此处配置后为全局配置
     */
    static init(SCKEY: string): void;
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
    static sendGet(url: string, data?: object, headers?: any): Promise<object | string>;
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
    static noticeMaster(text: string, desp?: string): Promise<object | string>;
}
