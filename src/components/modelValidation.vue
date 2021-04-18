<template>
  <el-card>
    <el-form :inline="true">
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <h3>测试数据接入:</h3>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <h3>异常模型选择:</h3>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <div>
              <span>请选择文件：</span>
              <input type="file" class="file" multiple />
              <el-button type="primary" @click="alreadyInsert" size="mini" plai
                >导入文件</el-button
              >
            </div>
            <span id="insert" class="insertFontColor"></span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模型名称：" v-model="modelNameList.value">
            <el-select placeholder="请选择模型">
              <el-option
                v-for="item in modelNameList"
                :label="item.label"
                :key="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- 获取验证结果 -->
    <el-button type="primary" size="medium"  @click="showEcharts">获取验证结果</el-button>
    <h3>模型验证结果:</h3>
    <!-- echarts绘图区域 -->
    <div id="myChart" style="width: 800px; height: 700px" v-show="ifEcharts" class="echarts"></div>
    <el-form :inline="true">
      <el-form-item label="准确率：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <h3 class="fontcolor">............................................</h3>
      </el-form-item>
      <el-form-item label="召回率：">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      ifEcharts: false,
      msg: "welcome",
      modelNameList: [
        { value: "选项1", label: "XXXX" },
        { value: "选项2", label: "XGboost" },
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("myChart"),
        "vintage"
      );
      var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
      var dateList = data.map(function (item) {
        return item[0];
      });
      var valueList = data.map(function (item) {
        return item[1];
      });
      // 绘制图表
      myChart.setOption({
        // title: { text: '在Vue中使用echarts' },
      //   tooltip: {},
      //   xAxis: {
      //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       name: "销量",
      //       type: "line",
      //       data: [5, 20, 36, 10, 10, 20],
      //     },
      //   ],
      // });

    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
    }],
    title: [{
        left: 'center',
        text: 'Gradient along the y axis'
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        data: dateList
    }],
    yAxis: [{
    }],
    grid: [{
        bottom: '60%'
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        data: valueList
    }]
    })
  },
    alreadyInsert() {
      document.getElementById("insert").innerHTML = "已成功导入!";
    },
    showEcharts() {
    this.ifEcharts = !this.ifEcharts
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 0 !important;
}
.fontcolor {
  color: #ffff;
}
.el-image {
  margin-bottom: 20px;
  margin-left: 60px;
}
.insertFontColor {
  color: #00db00;
  margin-left: 10px;
}
.file {
  width: 170px;
}
// .echarts{
//   margin-bottom: 0px !important;
// }
</style>