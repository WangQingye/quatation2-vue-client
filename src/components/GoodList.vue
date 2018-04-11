<template>
    <div class="good-list">
        <div class="select-area">
            <span style="margin-right:1rem">种类筛选</span>
            <el-select v-model="value4" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <ul class="list-area">
            <li v-for="(good,index) in goods" :key="index" class="">
                <img :src="good.img || noImg" alt="" class="good-img">
                <div class="good-text">
                    <p class="good-name">{{good.name}}
                        <span>
                            {{good.category}}</span>
                    </p>
                    <p class="good-stock">当前库存：
                        <span>{{good.nowStock}}</span>
                    </p>
                    <span class="good-price">价格: {{good.price}}</span>
                    <span class="good-format"> 规格: {{good.format}}</span>
                </div>
                <el-button class="good-button" type="text" @click="showOps(good)">操作</el-button>
            </li>
        </ul>
        <good-detail :show="showGoodDetail" @close="showGoodDetail = false" :good="nowGood" @refreshGoodList="getAllGoods"></good-detail>
    </div>
</template>
<script>
import { getAllGoods } from '../config/api';
import { noImgSrc } from '../config/env';
import GoodDetail from './GoodDetail.vue';
import Bus from '../util/bus';
export default {
    data() {
        return {
            options: [],
            goods: [],
            value4: '',
            noImg: noImgSrc,
            showGoodDetail: false,
            nowGood: {} //当前正在操作的商品
        };
    },
    created() {
        this.getAllGoods();
        Bus.$on('refreshGoodList', this.getAllGoods);
    },
    methods: {
        async getAllGoods() {
            let res = await getAllGoods();
            console.log(res);
            if (res.goods) {
                this.goods = res.goods;
            }
        },
        /* 展示某产品的操作界面 */
        showOps(good) {
            this.showGoodDetail = true;
            this.nowGood = good;
        }
    },
    components: { GoodDetail }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,
div,
ul,
li,
p,
blockquote,
img {
    padding: 0;
    margin: 0;
}
.select-area {
    margin: 1rem 1rem;
}
.my-card {
    margin-bottom: 1rem;
}
.my-card p {
    margin: 0;
    display: inline-block;
    width: 40%;
}
.list-area {
    list-style-type: none;
    width: 350px;
    margin: 0 auto;
}
.list-area li {
    display: flex;
    align-items: center;
    margin: 10px 0;
}
.good-img {
    width: 90px;
    height: 90px;
    border-radius: 15px;
    margin-right: 6px;
}
.good-text {
    width: 100%;
    height: 90px;
    text-align: left;
    padding-left: 10px;
    color: #777;
    border-bottom: 1px solid #eee;
}
.good-name {
    font-size: 18px;
    color: #333;
    font-weight: 600;
}
.good-name span {
    color: #777;
    font-size: 12px;
    width: 100%;
    text-align: right;
}
.good-stock {
    margin: 8px 0;
    font-size: 14px;
}
.good-stock span {
    font-size: 15px;
    color: #333;
}
.good-format,
.good-price {
    font-size: 12px;
}
.good-price {
    margin-right: 3px;
}
.good-button {
    margin-right: 10px;
    height: 90px;
    border-bottom: 1px solid #eee;
    border-radius: 0;
}
</style>
