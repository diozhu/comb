/**
 * 解决IOS微信版本6.7.4 input 失去焦点软键盘收起后，页面卡住不还原位置，
 * 只能运行在mounted函数里面
 */

// /** ==================== 浏览器相关 ==================== */
import * as utils from './utils.js';
export function fix_iOSWechatInputBlank () {
    if (utils.isWechat && utils.isiOS) {
        setTimeout(() => {
            let inputs = document.getElementsByTagName('input');
            let textareas = document.getElementsByTagName('textarea');
            [].forEach.call(inputs, v => {
                v.onblur = function () { window.scrollTo(0, 1);};
            });
            [].forEach.call(textareas, v => {
                v.onblur = function () { window.scrollTo(0, 1);};
            });
        }, 2000);

    }
};
