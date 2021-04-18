<template>
  <el-card>
    <p>特征选取:</p>
    <el-form label-width="100px" size="medium">
      <el-form-item label="模型选取:">
        <el-select v-model="modelType">
          <el-option label="模型一"></el-option>
          <el-option label="模型二"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="canshupeizhi">参数配置:</div>
    <el-form :inline="true" label-width="150px" size="medium">
      <el-row>
        <el-col :span="10">
          <el-form-item label="max_depth:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form :inline="true" label-width="150px" size="medium">
      <el-row>
        <el-col :span="10">
          <el-form-item label="n_estimators:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form :inline="true" label-width="150px" size="medium">
      <el-form-item label="模型保存路径:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain>确认</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button @click="startTraining" class="startToTraining" type="primary">开始训练</el-button>
      <span id="training" class="xunlianzhong"></span>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      modelType: [],
      uploadFiles: ''
    };
  },
  methods: {
    startTraining(){
      document.getElementById("training").innerHTML = "模型训练中..."
    }
  }
};
</script>

<style lang="less" scoped>
// .formStyle{
//   width: 100%;
//   position: absolute;
//   left: 240px;
// }
.el-upload{
  margin-top: 20px;
}
.el-select{
  width: 300px;
}
el-input{
  width: 300px;
}
.canshupeizhi{
  margin-bottom: 30px;
}
.xunlianzhong{
  color: #00DB00;
  margin-left: 15px;
}
.startToTraining{
  margin-left: 120px;
  margin-top: 20px;
}
.el-form-item{
  width: 450px !important;
}
</style>
