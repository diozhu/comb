/**
 * Created by chaihao on 2016/12/28.
 */
var crypto = require('crypto');

module.exports = function (str) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
};
