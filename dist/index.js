"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var got = require("got");
/**
 *
 *
 * @author CaoMeiYouRen
 * @date 2019-08-24
 * @export
 * @class ServerChan
 */
var ServerChan = /** @class */ (function () {
    function ServerChan() {
    }
    /**
     * 初始化
     *
     * @author CaoMeiYouRen
     * @date 2019-08-24
     * @export
     * @param {string} SCKEY https://sc.ftqq.com 发的sckey，此处配置后为全局配置
     */
    ServerChan.init = function (SCKEY) {
        this.SCKEY = SCKEY;
    };
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
    ServerChan.sendGet = function (url, data, headers) {
        if (data === void 0) { data = {}; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, got(url, { timeout: 10000, method: 'get', query: data, form: true, headers: headers })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.body];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, ''];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ServerChan.noticeMaster = function (text, desp) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = "https://sc.ftqq.com/" + this.SCKEY + ".send";
                        return [4 /*yield*/, this.sendGet(url, { text: text, desp: desp })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, ''];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ServerChan;
}());
exports.ServerChan = ServerChan;
