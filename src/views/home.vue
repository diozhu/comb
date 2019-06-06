<template>
    <div class="page page-home">
        <div class="logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf94U/93Tv9vSP9vSP9vSP+Sbf+CVf9vSf9vS/9vSP9yTv9vSP9vSP9vSP9zSv9xSf9vSP9vSP9wSf9vSP9wSf9wSv9vSP9vSP91Sv9wSP9vSP9vSP9xSv9vSP9wSf9vSP9wSf9vSP9vSv9wSv9vSJlteWgAAAAldFJOUwAKD/j80QIGeUDGF+ji8yMz24BPu2Ir7bAda5KgOolZqHWaSD0A4EBrAAACIUlEQVR42u2Z3XaCMBCEAYGAaEXxDwVUlPd/xbbH0OU0hGGBNjfkCiN+xjEMO4vVeySJNfU47qtqf5wU6Vzd6mu4V2cypH85VXKcLv40zNCrGsMLJ0BuzpK23cqD82asmMXiTfoIhAg+3seLYpS0h5VcXRZ9v4wy+XJ1GIzMl5KxjOup+GcqH4RM7/Lz61tz+raW0/eUjbR3tYA7+/c7tcz0Dh7qevBvwIOU817tJ7w8RW0wotKt/2Nfe5HV+8Itox5I8ZBiuoXTvYNdKe1DIOZTvW7wtfZEBifFlOeBFdTS7o/A4BQvQv4lTRGcQNpj54/KroWE9FN4zk+ShVrRE77zJ+1/riCDG+L8ZIqiOUsGN8T5yRQVqBePcf7Ya4UG45w/QFDs/Bwo3/kxlO/8GMp3fgxlO//W50Bf/Zx/x1pp2Mv51zYfWiLnv1l8aIic3/oDqDVDZ+gMnaEzdAqoU0RcKN2i9Depkg2lCk9bCboxC7qh235XbF2yoJZQCpTWEsVn1lJpRqVUe2zNUp6matEHyj4A1ZanoECFUJKvaCaMRilt8za/PgspyQZAKUigcEKbFwcJkk4XoyhIociDwxkFPop8OJzhGEkBlMIpjpEkXecntd9HYrOzuxCwRzB9E+Ff2h1YdHBd4BaSEmtBE/QhTDS7+G05Iw1EfuA125SlkZNyqtq5sUY33o1gBxt+eICbXeYfyOAGovmHXOMfx30CPRTVXNdLE+8AAAAASUVORK5CYII=">
            <p>蜂巢（Comb）</p>
        </div>
        <div class="listview simple">
            <ul>
                <router-link :to="{ name: 'index' }" tag="li">示例<i class="icon icon-arrow-r"></i></router-link>
            </ul>
        </div>
        <div class="listview simple">
            <ul>
                <li @click="go('http://github.com/diozhu/comb/blob/develop/README.md')">readme<i class="icon icon-arrow-r"></i></li>
                <li @click="go('http://github.com/diozhu/comb/issues')">issues<i class="icon icon-arrow-r"></i></li>
            </ul>
        </div>
        <div class="listview simple">
            <ul>
                <li @click="go('http://github.com/diozhu/vue-cli-plugin-comb/blob/develop/README.md')">脚手架<i class="icon icon-arrow-r"></i></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-home",
        data () {
            return {
            };
        },
        mounted () {
            console.log('page.home.mounted: ');
        },
        methods: {
            go (url) {
                document.location.href = url;
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/_variables.scss";
    @import "../scss/_mixins.scss";

    .page-home{
        .logo {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            img {
                width: pxTorem(50px);
                padding: pxTorem(15px);
            }
            p {
                font-size: pxTorem(12px);
            }
        }

        .listview {
            padding: 0 0 pxTorem(10px) 0;

            li {
                display: flex;
                justify-content: space-between;
                font-size: pxTorem(14px);

                .icon {
                    margin: 0 pxTorem(15px);
                    font-size: pxTorem(16px);
                    color: #dddee3;
                }
            }
        }
    }
</style>
