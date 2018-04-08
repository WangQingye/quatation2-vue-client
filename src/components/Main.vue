<template>
    <div class="main">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="goods">
                <template slot="title">
                    <i class="el-icon-goods"></i>
                    <span>库存列表</span>
                </template>
            </el-menu-item>
            <el-menu-item index="addGood">
                <template slot="title">
                    <i class="el-icon-circle-plus"></i>
                    <span>添加商品</span>
                </template>
            </el-menu-item>
        </el-menu>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed: {
        activeIndex() {
            return this.$route.path.replace('/', '');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
