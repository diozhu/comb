<template>
    <div class="page page-api">
        <h2>api</h2>

        <p class="desc">axios</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>形参一</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>{}</td><td>接口需要参数</td><td>Object</td><td>-</td><td>-</td></tr>
            </table>
            <table>
                <tr><th>形参二</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>loading</td><td>是否显示全局菊花</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>method</td><td>接口类型</td><td>String</td><td>request、get、delete、head、options、post、put、patch</td><td>get</td></tr>
                <tr><td>emulateJSON</td><td>如果包含复杂对象、数组，请开启此配置，会把其换为字符串传给后台。。。</td><td>Boolean</td><td>-</td><td>false</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <p class="desc">get方式：</p>
        <v-row>
            <v-col>
                <v-button size="small" @click="handleGet">get方式</v-button>
                <v-button type="danger" size="small" @click="handleGet2">带菊花</v-button>
                <!--<v-button type="primary" size="small">primary</v-button>-->
                <!--<v-button type="info" size="small">info</v-button>-->
            </v-col>
        </v-row>
        <p class="desc">post方式：</p>
        <v-row>
            <v-col>
                <v-button size="small" @click="handlePost">post方式</v-button>
                <v-button type="danger" size="small" @click="handlePost2">带菊花</v-button>
                <v-button type="primary" size="small" @click="handlePost3">复杂对象类型提交</v-button>
                <!--<v-button type="info" size="small">info</v-button>-->
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import vRow from 'comb-ui/src/vendors/v-row.vue';
    import vCol from 'comb-ui/src/vendors/v-col.vue';
    import vButton from 'comb-ui/src/vendors/v-button';
    import * as utils from '../js/utils/utils.js';
    import * as api from '../js/core/api.js';
    import Trans from '../js/core/trans.js';

    export default {
        components: { vButton, vRow, vCol },

        data () {
            return {

            };
        },

        mounted () {
            console.log('page-api.mounted...');
            this.init();
        },

        methods: {
            init () {
                console.log('page-api.init...');
                if (!utils.getSessionStorage().get('token')) {
                    api.bindPhone({ // qa环境使用手机号获取token
                        phone: '18612795267',
                        validate_code: '1111'
                    }).then(res => {
                        this.$toast('token 获取成功~');
                        utils.getSessionStorage().set('token', res.access_token);
                    }).catch(e => {
                        this.$toast(Trans(e));
                    });
                }
            },
            handleGet () {
                console.log('page-api.handleGet...');
                api.getTest().then(res => {
                    this.$toast('success!!!');
                    console.log('page-api.getTest.success: ', res);
                }).catch(e => this.$toast(Trans(e)));
            },
            handleGet2 () {
                console.log('page-api.handleGet2...');
                api.getTest({}, {loading: true}).then(res => {
                    this.$toast('success!!!');
                    console.log('page-api.getTest.success: ', res);
                }).catch(e => this.$toast(Trans(e)));
            },
            handlePost () {
                console.log('page-api.handlePost...');
                api.postTest({
                    name: 'test',
                    phone: '18612795267',
                    province_id: '1',
                    city_id: '1',
                    county_id: '10',
                    address: '蜂巢测试'
                }).then(res => {
                    this.$toast('success!!!');
                    console.log('page-api.postTest.success: ', res);
                }).catch(e => { // 登录失败的判断，正常项目别这么写。。。这里只是测试。。。
                    this.$toast(Trans(e));
                    console.error('page-api.postTest.error: ', e);
                    if (e.errcode === 10003 || e.errcode === 10004 || e.errcode === 10005 || e.errcode === 10006 || e.errcode === 10011) {
                        utils.getSessionStorage().set('token', '');
                        this.init();
                    }
                });
            },
            handlePost2 () {
                console.log('page-api.handlePost2...');
                api.postTest({
                    name: 'test',
                    phone: '18612795267',
                    province_id: '1',
                    city_id: '1',
                    county_id: '10',
                    address: '蜂巢测试'
                }, {loading: true}).then(res => {
                    this.$toast('success!!!');
                    console.log('page-api.getTest.success: ', res);
                }).catch(e => this.$toast(Trans(e)));
            },
            handlePost3 () { // 复杂对象，不用管好不好使，直接看发送的数据格式
                console.log('page-api.handlePost3...');
                utils.getSessionStorage().set('token', '1523590804.8.1296e38ead0b230caf4e371a5837dfcc042afb1c'); // 临时~
                api.postTest2({
                    sales_name: '蜂巢测试~',
                    begin_time: '2018-01-13 00:00:00',
                    end_time: '2018-04-27 00:00:00',
                    type: 1,
                    city_id: 1,
                    information: '',
                    content: '',
                    goods_rel: [{'sales_range': 1, 'city_id': 1, 'goods_id': '1412', 'sales_range_rel': 1, 'city_id_rel': 1, 'goods_rel_id': '1412', 'is_limit': 0, 'goods_nums': '', 'showRelationBtn': false}, {'sales_range': 1, 'city_id': 1, 'goods_id': '1408', 'sales_range_rel': 1, 'city_id_rel': 1, 'goods_rel_id': '1412', 'is_limit': 0, 'goods_nums': '', 'showRelationBtn': false}]
                }, {loading: true}).then(res => {
                    this.$toast('success!!!');
                    console.log('page-api.getTest.success: ', res);
                }).catch(e => this.$toast(Trans(e)));
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-api {
        padding: 0 ($grid-gutter-width / 2);

    }
</style>
