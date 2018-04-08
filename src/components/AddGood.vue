<template>
    <div class="add-good">
        <h3>商品添加</h3>
        <el-form ref="form" :model="form" label-width="40px" class="add-form">
            <el-form-item label="">
                <!-- <el-button type="success" icon="el-icon-picture" circle></el-button> -->
                <input id="img" style="margin-top:15px" accept="image/png,image/jpg" type="file">
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="form.name" placeholder="例：凹形管"></el-input>
            </el-form-item>
            <el-form-item label="品类">
                <el-input v-model="form.name" placeholder="例：管材"></el-input>
            </el-form-item>
            <el-form-item label="规格">
                <el-input v-model="form.name" placeholder="例：30mm"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.name" placeholder="例：100元/m"></el-input>
            </el-form-item>
            <el-form-item label="库存">
                <el-input v-model="form.name" placeholder="300"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.note" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                note: ''
            }
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    text-align: left;
}
.add-good {
    margin-top: 1rem;
}
.add-form {
    width: 300px;
    margin: 0 auto;
}
</style>
