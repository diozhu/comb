<template>
    <li class="p-infinite-item tombstone">
        <a class="version-item">
            <div class="version-item-img">
                <img class="lazy" src="http://static1.systoon.com/share/img/185x185.png">
            </div>
            <div class="version-item-intro">
                <div class="version-item-name">
                    <p></p>
                </div>
                <div class="version-item-brief">
                    <p></p>
                </div>
            </div>
        </a>
    </li>
</template>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .p-infinite-item.tombstone p {
        width: 100%;
        height: 0.5em;
        background-color: #ccc;
        margin: 0.5em 0;
    }
</style>
