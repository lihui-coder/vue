<template>
  <el-card>
    <el-form ref="form" label-width="140px">
      <el-form-item label="选取预测指标：">
        <el-select v-model="value1" multiple placeholder="请选择">
          <el-option
            v-for="item in predictPoint"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择特征选取方法：">
        <el-select
          placeholder="请选择特征选取方法"
          style="width: 50%"
          v-model="methodList"
        >
          <el-option label="相关性分析" value="xianggaunxing"></el-option>
          <el-option label="因果分析" value="yinguo"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" size="medium" plain @click="tableShow">确认</el-button>
    </el-form>
    <span>选取结果：</span>
    <el-table stripe border style="width: 69%" :data="tableData" v-show="ifShow">
      <el-table-column label="序号" width="50" prop="id"> </el-table-column>
      <el-table-column
        label="特征编号"
        width="180"
        align="center"
        prop="featureId"
      >
      </el-table-column>
      <el-table-column
        label="特征名称"
        width="180"
        align="center"
        prop="featureName"
      >
      </el-table-column>
      <el-table-column
        label="相关程度"
        width="180"
        align="center"
        prop="relevance"
      >
      </el-table-column>
      <el-table-column label="选择" width="70" type="selection">
        <!-- <el-checkbox v-model="checked" @change="ischecked"></el-checkbox> -->
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      value1: [],
      checked: '',
      ifShow: false,
      methodList: "",
      predictPoint: [
        {
          value: "选项1",
          label: "锅炉高温过热器出口管屏壁温01-01",
        },
        {
          value: "选项2",
          label: "锅炉高温过热器出口管屏壁温01-02",
        },
        {
          value: "选项3",
          label: "锅炉高温过热器出口管屏壁温01-03",
        },
        {
          value: "选项4",
          label: "锅炉高温过热器出口管屏壁温01-04",
        },
        {
          value: "选项5",
          label: "锅炉高温过热器出口管屏壁温02-01",
        },
        {
          value: "选项6",
          label: "锅炉高温过热器出口管屏壁温02-02",
        },
        {
          value: "选项7",
          label: "锅炉高温过热器出口管屏壁温02-03",
        },
        {
          value: "选项8",
          label: "锅炉高温过热器出口管屏壁温02-04",
        },
      ],
      checkList: [],
      tableData: [
        {
          id: "01",
          featureId: "001",
          featureName: "A侧一级减温水流量1",
          relevance: "0.98",
        },
        {
          id: "02",
          featureId: "002",
          featureName: "A侧一级减温水流量2",
          relevance: "0.97",
        },
        {
          id: "03",
          featureId: "003",
          featureName: "B侧一级减温水流量1",
          relevance: "0.94",
        },
        {
          id: "04",
          featureId: "004",
          featureName: "B侧一级减温水流量2",
          relevance: "0.97",
        },
        {
          id: "05",
          featureId: "005",
          featureName: "A侧二级减温水流量1",
          relevance: "0.99",
        },
        {
          id: "06",
          featureId: "006",
          featureName: "A侧二级减温水流量2",
          relevance: "0.98",
        },
        {
          id: "07",
          featureId: "007",
          featureName: "B侧二级减温水流量1",
          relevance: "0.96",
        },

        {
          id: "08",
          featureId: "008",
          featureName: "B侧二级减温水流量2",
          relevance: "0.96",
        },
      ],
    };
  },
  methods: {
    ischecked(){
      this.checked = true
    },
    tableShow(){
      this.ifShow = !this.ifShow
    }
  },
};
</script>

<style lang="less" scoped>
.el-select {
  width: 300px;
}
.el-button{
  margin-left: 140px;
  margin-bottom: 40px;
}
</style>