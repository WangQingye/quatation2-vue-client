<template>
    <div class="good-detail">
        <el-dialog title="商品操作页" :visible.sync="show" width="350px" class="good-dialog" :before-close="close">
            <!-- 库存基本信息页 -->
            <el-form ref="infoForm" :model="form" class="info-form" label-position="center" v-show="opsShow">
                <el-form-item label="商品名称" prop="name" class="form-item">
                    <span>{{form.name}}</span>
                </el-form-item>
                <el-form-item label="当前库存" class="form-item">
                    <span>{{form.nowStock}}</span>
                </el-form-item>
            </el-form>
            <!-- 库存操作页 -->
            <el-form ref="manageForm" :model="form" class="add-form" label-position="center" v-show="manageShow">
                <el-form-item label="商品名称" prop="name" class="form-item">
                    <span>{{form.name}}</span>
                </el-form-item>
                <el-form-item label="当前库存" class="form-item">
                    <span>{{form.nowStock}}</span>
                </el-form-item>
                <el-form-item label="本次操作" class="form-item">
                    <el-select v-model="manageForm.opType" placeholder="请选择活动区域">
                        <el-option label="出库" value="0"></el-option>
                        <el-option label="入库" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="变动数量" class="form-item">
                    <el-input-number v-model="manageForm.opNum" :min="1" label="库存"></el-input-number>
                </el-form-item>
                <el-form-item label="变动后库存" class="form-item">
                    <span>{{form.nowStock}}</span>
                </el-form-item>
                <el-form-item label="操作说明：" class="form-item">
                    <el-input type="textarea" v-model="form.note" placeholder="例：供货给东南建筑公司"></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button type="primary" @click="submitManage">确认修改</el-button>
                    <el-button @click="backToMain">返回</el-button>
                </el-form-item>
            </el-form>
            <!-- 修改信息页 -->
            <el-form ref="changeForm" :model="form" :rules="rules" label-width="50px" class="add-form" label-position="left" v-show="formShow" size="small">
                <el-form-item label="图片" class="form-item">
                    <!-- <el-button type="success" icon="el-icon-picture" circle></el-button> -->
                    <!-- <input id="img" style="margin-top:15px" accept="image/png,image/jpg" type="file"> -->
                    <div class="avatar-uploader">
                        <el-upload :on-remove="onImgRemove" :on-change="onImgChange" action="" :auto-upload="false">
                            <img v-if="form.img" :src="form.img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                </el-form-item>
                <el-form-item label="名称" prop="name" class="form-item">
                    <el-input v-model="form.name" placeholder="例：凹形管"></el-input>
                </el-form-item>
                <el-form-item label="品类" class="form-item">
                    <el-input v-model="form.category" placeholder="例：管材"></el-input>
                </el-form-item>
                <el-form-item label="规格" class="form-item">
                    <el-input v-model="form.format" placeholder="例：30mm"></el-input>
                </el-form-item>
                <el-form-item label="价格" class="form-item">
                    <el-input v-model="form.price" placeholder="例：100元/m"></el-input>
                </el-form-item>
                <el-form-item label="库存" class="form-item">
                    <el-input-number v-model="form.nowStock" :min="1" label="库存"></el-input-number>
                </el-form-item>
                <el-form-item label="备注" class="form-item">
                    <el-input type="textarea" v-model="form.note" placeholder=""></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button size="small" type="primary" @click="submitChange">确认修改</el-button>
                    <el-button size="small" @click="backToMain">返回</el-button>
                </el-form-item>
            </el-form>
            <!-- 操作记录页 -->
            <div v-show="hisShow">
                <p>
                    <i class="el-icon-tickets"></i>库存操作记录</p>
                <el-table :data="tableData" style="width: 100%" max-height="350" stripe size="small" :fit='false'>
                    <el-table-column prop="date" label="操作日期" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="opType" label="类型" width="80" align="center">
                        <template slot-scope="props">
                            <span>{{props.row.opType ? '入库' : '出库'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="opNum" label="变动数量" width="80" align="center">
                    </el-table-column>
                    <el-table-column prop="afterOpNum" label="操作后剩余" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="note" label="操作说明" width="150" align="center">
                    </el-table-column>
                </el-table>
                <el-button type="primary" @click="backToMain" style="margin-top:20px">返回</el-button>
            </div>
            <div v-show="opsShow" style="margin-top:20px">
                <el-button type="success" style="margin-bottom:10px" @click="clickOps('manageShow')">修改库存</el-button>
                <el-row>
                    <el-button size="small" type="primary" @click="clickOps('formShow')">信息修改</el-button>
                    <el-button size="small" type="warning" @click="clickOps('hisShow')">库存记录</el-button>
                    <el-button size="small" type="danger" @click="delGood">删除商品</el-button>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: 'dasdas',
                category: 'dsadas',
                format: 'dasdas',
                price: 'dasdas',
                nowStock: 0,
                note: 'dsadas',
                img: ''
            },
            changeForm: {},
            manageForm: {
                name: '',
                opType: 0,
                opNum: 0,
                afterOpNum: 0,
                note: '',
                goodId: ''
            },
            tableData: [
                {
                    date: '2016-05-02',
                    opType: 0,
                    opNum: 200,
                    afterOpNum: 100,
                    note: '供货给东南建筑公司'
                },
                {
                    date: '2016-05-02',
                    opType: 0,
                    opNum: 200,
                    afterOpNum: 100,
                    note: '供货给东南建筑公司'
                },
                {
                    date: '2016-05-02',
                    opType: 0,
                    opNum: 200,
                    afterOpNum: 100,
                    note: '供货给东南建筑公司'
                },
                {
                    date: '2016-05-02',
                    opType: 0,
                    opNum: 200,
                    afterOpNum: 100,
                    note: '供货给东南建筑公司'
                }
            ],
            rules: {
                name: [
                    { required: true, message: '必须输入商品名称哦', trigger: 'blur' }
                ]
            },
            opsShow: true,
            formShow: false,
            hisShow: false,
            manageShow: false
        };
    },
    props: {
        show: {
            default: false,
            type: Boolean
        },
        good: {
            default: function() {
                return {};
            },
            type: Object
        }
    },
    mounted() {
        // console.log(this.$store.state.isError);
    },
    methods: {
        submitChange() {},
        submitManage() {},
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
        backToMain() {
            this.opsShow = true;
            this.formShow = false;
            this.hisShow = false;
            this.manageShow = false;
        },
        clickOps(block) {
            this[block] = true;
            this.opsShow = false;
        },
        delGood() {
            this.$confirm('本次操作将彻底删除该商品的一切信息，是否确认？', '确认操作', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info'
            })
                .then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });
        },
        close() {
            this.$emit('close');
        }
    },
    computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body,
div,
ul,
p,
blockquote,
img {
    padding: 0;
    margin: 0;
}
.info-form {
    width: 200px;
    margin: 0 auto;
}
.good-dialog {
    margin-top: -8vh;
}
.form-item {
    margin: 10px 0;
}
.info-form .form-item {
    margin: 0px 0;
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
.el-message-box {
    width: 320px !important;
}
</style>
