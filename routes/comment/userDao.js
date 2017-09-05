/**
 * 用户管理，柴浩没在，没用数据库，直接写个json文件。。。
 *              -- Author by Dio Zhu. on 2017.1.22
 */

var path = require('path');
var fs = require('fs');
var userDb = path.join(__dirname, 'user.json');

module.exports = {
    get: function () {
        var result = JSON.parse(fs.readFileSync(userDb));
        return result;
    },
    set: function (val) {
        var org = this.get() || [];
        var flag = false;
        org.forEach(function (v) {
            // console.log('---> ', v.userId, val.userId);
            if (v.userId === val.userId) {
                flag = true;
            }
        });
        if (flag) {
            return;
        }
        org.push(val);
        fs.writeFileSync(userDb, JSON.stringify(org));
    }
};
