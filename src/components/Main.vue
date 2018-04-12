<template>
    <div class="main" v-loading="this.$store.state.isRequesting">
        <h3>
            <i class="el-icon-menu"> </i> 舜新建材公司库存管理系统</h3>
        <span class="line"></span>
        <div v-show="pass">
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
            <p v-show="isError">出错了</p>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pass: false
            // isError: this.$store.state.isError,
        };
    },
    mounted() {
        // console.log(this.$store.state.isError);
        this.openPass();
        // this.pass = true;
    },
    methods: {
        openPass() {
            this.$prompt('请输入管理员密码', '验证', {
                confirmButtonText: '确定',
                inputType: 'password'
            })
                .then(({ value }) => {
                    if (value == 'lly') {
                        this.tipSuccess('登录成功');
                        this.pass = true;
                    } else {
                        this.openPass();
                        this.tipError('密码错误');
                    }
                })
                .catch(() => {
                    this.openPass();
                });
        }
    },
    computed: {
        activeIndex() {
            return this.$route.path.replace('/', '');
        },
        isError() {
            return this.$store.state.isError;
        }
    },
    watch: {
        isError(newVal) {
            if (newVal) {
                this.tipError('服务器出错啦T.T');
                //  显示完后重置为false
                this.$store.dispatch('setIsError', false);
            }
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
