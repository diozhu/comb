import * as utils from '../js/utils/utils';

export function thumb (src) {
    return src;
}

/**
 * 时间过滤器，显示规则如下：
 *  当天的消息显示时间：XX：XX 例如：12:10
 *  昨天的消息：昨天 XX：XX 例如：昨天 05:10
 *  昨天以前直接显示日期：XX-XX XX:XX 例如：12-02 12:10
 *  隔年则多加入年份：XXXX-XX-XX XX:XX 例如：2014-12-02 12:10
 *              -- Author by Dio Zhu. on 2017.3.13
 */
export function specialTime (time) {
    if (!time) {
        return '';
    }
    if (typeof time === 'string') {
        time = time.toString().replace(/-/g, '/'); // ios下new Date(2016-10-31)报错:invalid date...要改为: 2016/10/31样式
    }
    if (typeof time === 'number' && (time.toString().length) === 10) {
        time = parseInt(time + '000');
    }
    let cur = new Date(),
        stamp = new Date(time),
        rtn = '';
    // console.log('filters.specialTime: ', cur.getFullYear(), stamp.getFullYear());
    if (cur.getFullYear() === stamp.getFullYear() &&
        cur.getMonth() === stamp.getMonth() &&
        cur.getDate() === stamp.getDate()) { // 当天
        rtn = '今天 ' + utils.formatTime(time, 'hh:mm:ss');
    } else if (
        cur.getFullYear() === stamp.getFullYear() &&
        cur.getMonth() === stamp.getMonth() &&
        (cur.getDate() - 1) === stamp.getDate()
    ) { // 昨天
        rtn = '昨天 ' + utils.formatTime(time, 'hh:mm');
    } else if (
        cur.getFullYear() === stamp.getFullYear()
    ) { // 今年
        rtn = utils.formatTime(time, 'MM-dd hh:mm');
    } else {
        rtn = utils.formatTime(time, 'yyyy-MM-dd hh:mm');
    }

    return rtn;
}

