<template>
  <el-card>
    <div>
      <span>请选择文件：</span>
      <input type="file" class="file" multiple />
      <el-button type="primary" @click="changeShow" size="mini" plai
        >导入文件</el-button
      >
    </div>
    <span>数据内容:</span>
    <el-table :data="tableData" stripe style="width: 100%" v-show="isShow" border="">
      <el-table-column prop="id" label="序号" > </el-table-column>
      <el-table-column prop="name1" label="A流量1" > </el-table-column>
      <el-table-column prop="name2" label="A流量2"> </el-table-column>
       <el-table-column prop="name3" label="B流量1" > </el-table-column>
      <el-table-column prop="name4" label="B流量2"> </el-table-column>
      <el-table-column prop="name5" label="壁温01-1"> </el-table-column>
      <el-table-column prop="name6" label="壁温01-2"> </el-table-column>
      <el-table-column prop="name7" label="壁温01-3"> </el-table-column>
      <el-table-column prop="name8" label="更多"> </el-table-column>
      <!-- <el-table-column prop="name8" label="壁温01-4"> </el-table-column> -->
      <!-- <el-table-column prop="name7" label="壁温01-5"> </el-table-column>
      <el-table-column prop="name8" label="壁温01-6"> </el-table-column>
      <el-table-column prop="name9" label="壁温01-7"> </el-table-column>
      <el-table-column prop="name10" label="壁温01-8"> </el-table-column>
      <el-table-column prop="name11" label="壁温01-9"> </el-table-column>
      <el-table-column prop="name12" label="壁温01-10"> </el-table-column> -->
    </el-table>
    <div id="content"></div>
    <!-- <div id="content2"></div>
    <div id="content3"></div>
    <div id="content4"></div>
    <div id="content5"></div> -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      fileList: "",
      isShow: false,
      tableData: [
        { id:1,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..."},
        { id:2,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:3,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:4,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:5,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:6,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:7,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:8,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:9,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:10,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:11,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:12,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:13,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:14,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:15,name1:33.791,name2:31.647,name3:18.389,name4:17.071,name5:597.96,name6:595.809,name7:610.186,name8:"..." },
        { id:15,name1:"...",name2:"...",name3:"...",name4:"...",name5:"...",name6:"...",name7:"...",name8:"..." }
      ]
    };
  },
  methods: {
    changeShow(){
       this.isShow = true
    },
    readFile() {
      // this.isShow = ture
      // let fileSelect = document.querySelector("input[type=file]").files[0]; //找到文件上传的元素
      // let reader = new FileReader();
      // if (typeof FileReader === "undefined") {
      //   console.log("您的浏览器不支持FileReader接口");
      //   return;
      // }
      // reader.readAsText(fileSelect, "gb2312"); //注意读取中文的是用这个编码，不是utf-8
      // const _this = this;
      // reader.onload = function () {
      //   console.log(reader.result);
      //   var strArray = reader.result.split(",");
        // for (var i = 0; i < strArray.length; i++) {
          // document.write("<p>" + strArray[i] + "</p>");
        //    document.getElementsById("content").innerHTML = "<p>" + strArray[i] + "</p>";
        // }

        // _this.$nextTick(() => {
        //   _this.voiceContent = reader.result
        //   console.log(_this.voiceContent)
        // })
      // };
      // console.log(reader);
    },
  },
};
</script>

<style lang="less" scoped>
.el-upload {
  margin-left: 100px;
}
.fileSelect {
  margin-bottom: 30px;
}
.file {
  width: 180px;
}
.el-button{
  margin-bottom: 20px;
}
</style>
