<template>
    <div class="page page-org">
        <h2>企通-组织选择器 参考样例</h2>

        <!--:to="{name: 'org-selector', query: {type: 0, key: 'depts'}}"-->
        <v-cell class="dept-cell"
                title="参与部门"
                :is-link="true"
                value="（部门新员工将自动加入）"
                :desc="selectedDeptsNum + '个部门'"
                @click.native="goSelector('depts')"
        ></v-cell>
        <dl class="labs">
            <dd class="labs__item" v-for="item in depts" v-text="item.nodeName"></dd>
            <dd class="labs__item labs__add icon icon-add"></dd>
        </dl>

        <!--:to="{name: 'org-selector', query: {type: 1, key: 'userGroup1'}}"-->
        <v-cell class="user-cell"
                title="参与人员"
                :is-link="true"
                :desc="userGroup1Str"
                @click.native="goSelector('userGroup1')"
        ></v-cell>

        <!--:to="{name: 'org-selector', query: {type: 1, key: 'userGroup2'}}"-->
        <v-cell class="user-cell"
                title="负责人"
                :is-link="true"
                :desc="userGroup2Str"
                @click.native="goSelector('userGroup2')"
        ></v-cell>
    </div>
</template>

<script type="text/ecmascript-6">
    import vCell from '../../src/vendor/v-cell.vue';
    import MicroOrg from '../../src/vendor/v-org-selector';
    import * as api from '../../src/js/core/api';

    export default {
        components: { vCell },

        data () {
            return {
                depts: [],              // 当前选择的部门
                userGroup1: [],         // 当前选择的用户1
                userGroup2: [],         // 当前选择的用户2
                selectedDeptsNum: 0,
                userGroup1Str: '',
                userGroup2Str: '',
                userInfo1: [],        // 通过部门计算选出的人userGroup1
                userInfo2: []        // 通过部门计算选出的人userGroup2
            };
        },

        watch: {
            depts (val) { // 部门数据变化
                console.log(val, '11111111111111111111部门数据变化');
                let num = 0;
                val.forEach((v) => {
                    if (parseInt(v.nodeType) === 0) num += 1;
                });
                this.selectedDeptsNum = num;
            },
            userInfo1 (val) {
                this.userGroup1Str = val.length + '人';
            },
            userInfo2 (val) {
                this.userGroup2Str = val.length + '人';
            }
        },

        activated () {
            let self = this,
                param = {},
                deptIds = [],
                uids = [];
            if (this.$router.direct()) { // come in
                // do nothing
            } else { // back
                let res = MicroOrg.getCurrentItem();
                this.$logger.log('org.activated: ', res);
                if (res && res.hasOwnProperty('key') && res.key === 'depts') {
                    self.$set(self, 'depts', res.value);
                } else {
                    res.value.forEach((e) => {
                        if (e.nodeType === 0) {
                            deptIds.push(e.nodeId);
                        } else if (e.nodeType === 1) {
                            uids.push(e.nodeId);
                        };
                    });
                    param = {
                        deptIds: deptIds,
                        uids: uids,
                        loading: true
                    };
                    if (res && res.hasOwnProperty('key') && res.key === 'userGroup1') {
                        self.$set(self, 'userGroup1', res.value);
                        self.getUserList(param);
                    } else if (res && res.hasOwnProperty('key') && res.key === 'userGroup2') {
                        self.$set(self, 'userGroup2', res.value);
                        self.getUserList(param);
                    }
                }
                MicroOrg.clearCurrentItem();
            }
        },

        mounted () {
    //        this.$logger.log('feed mounted... ');
        },

        methods: {
            goSelector (tag) {
                this.$logger.log('org.goSelector: ', tag, this.$data[tag]);
                if (this.$data[tag]) {
                    MicroOrg.setCurrentItem(this.$data[tag]);
                    this.$router.push({name: 'org-selector', query: {nodeId: 1, type: tag === 'depts' ? 0 : 1, key: tag}});
                }
            },
            /**
             * 获取到部门和人在调getUserList去获取人的具体信息
             * */
            getUserList (param) {
                let current = MicroOrg.getCurrentItem(),
                    self = this;
                api.getUserList(param).then(function (res) {
                    if (current && current.hasOwnProperty('key') && current.key === 'userGroup1') {
                        self.userInfo1 = res.dataList;
                    } else if (current && current.hasOwnProperty('key') && current.key === 'userGroup2') {
                        self.userInfo2 = res.dataList;
                    }
                }).catch(function (e) {
                    console.log(e);
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-org {

        .dept-cell .v-cell__wrapper {
            border-bottom: 0;
        }

        .labs {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: pxTorem(5px);
            border-bottom: #DDDEE3 1px solid;
        }
        .labs__item {
            background: #3395ff;
            color: #FFF;
            padding: pxTorem(3px) pxTorem(10px);
            font-size: pxTorem(13px);
            border-radius: pxTorem(3px);
            margin: 0 0 pxTorem(10px) pxTorem(15px);
        }
        .labs__add {
            background: transparent;
            border: #3395ff 1px dashed;
            color: #3395ff;
            padding: pxTorem(3px) pxTorem(30px);
        }
    }
</style>
