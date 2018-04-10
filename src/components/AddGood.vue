<template>
    <div class="add-good">
        <h3>商品添加</h3>
        <el-form ref="form" :model="form" :rules="rules" label-width="60px" class="add-form" label-position="left" size="small">
            <el-form-item label="图片">
                <!-- <el-button type="success" icon="el-icon-picture" circle></el-button> -->
                <!-- <input id="img" style="margin-top:15px" accept="image/png,image/jpg" type="file"> -->
                <div class="avatar-uploader">
                    <el-upload :on-remove="onImgRemove" :on-change="onImgChange" action="" :auto-upload="false">
                        <img v-if="form.img" :src="form.img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="form.name" placeholder="例：凹形管"></el-input>
            </el-form-item>
            <el-form-item label="品类">
                <el-input v-model="form.category" placeholder="例：管材"></el-input>
            </el-form-item>
            <el-form-item label="规格">
                <el-input v-model="form.format" placeholder="例：30mm"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.price" placeholder="例：100元/m"></el-input>
            </el-form-item>
            <el-form-item label="库存">
                <el-input-number v-model="form.nowStock" :min="1" label="库存"></el-input-number>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.note" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addGood">确认添加</el-button>
                <el-button @click="resetForm">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { addGood } from '../config/api';
export default {
    data() {
        return {
            form: {
                name: '',
                category: '',
                format: '',
                price: '',
                nowStock: 0,
                note: '',
                img: ''
            },
            rules: {
                name: [
                    { required: true, message: '必须输入商品名称哦', trigger: 'blur' }
                ]
            }
        };
    },
    mounted() {
        // this.tipSuccess('添加成功');
    },
    methods: {
        async addGood() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.loading = true;
                    const res = await addGood(this.form);
                    this.loading = false;
                    if (res.meta) {
                        this.tipSuccess('添加成功');
                        this.resetForm();
                    } else {
                        this.tipError(res.msg);
                    }
                } else {
                    this.tipError('商品信息还有误哦');
                    console.log(222);
                    return;
                }
            });
        },
        onImgChange(file, fileList) {
            // 读出 base64
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onloadend = () => {
                console.log(reader.result);
                this.form.img = reader.result;
            };
        },
        onImgRemove() {
            this.form.img = '';
        },
        resetForm() {
            this.form = {
                name: '',
                category: '',
                format: '',
                price: '',
                nowStock: 0,
                note: '',
                img: ''
            };
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-good {
    margin-top: 1rem;
}
.add-form {
    width: 300px;
    margin: 0 auto;
}
.avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}
.avatar {
    width: 120px;
    height: 120px;
    display: block;
}
</style>
