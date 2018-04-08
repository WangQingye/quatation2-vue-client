<template>
    <div class="good-list">
        <div class="select-area">
            <span style="margin-right:1rem">种类筛选</span>
            <el-select v-model="value4" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="list-area">
            <el-card class="box-card my-card" shadow="never">
                <p>名称：二极管</p>
                <p>规格：39mm</p>
                <p>类别：管材</p>
                <p>价格：100元/m</p>
                <p>备注：这是非常优质的管材</p>
            </el-card>
            <el-card class="box-card my-card" shadow="never">
                <p>名称：二极管</p>
                <p>规格：39mm</p>
                <p>类别：管材</p>
                <p>价格：100元/m</p>
                <p>备注：这是非常优质的管材</p>
            </el-card>
            <el-card class="box-card my-card" shadow="never">
                <p>名称：二极管</p>
                <p>规格：39mm</p>
                <p>类别：管材</p>
                <p>价格：100元/m</p>
                <p>备注：这是非常优质的管材</p>
            </el-card>
            <el-card class="box-card my-card" shadow="never">
                <p>名称：二极管</p>
                <p>规格：39mm</p>
                <p>类别：管材</p>
                <p>价格：100元/m</p>
                <p>备注：这是非常优质的管材</p>
            </el-card>
            <el-card class="box-card my-card" shadow="never">
                <p>名称：二极管</p>
                <p>规格：39mm</p>
                <p>类别：管材</p>
                <p>价格：100元/m</p>
                <p>备注：这是非常优质的管材</p>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value4: ''
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
