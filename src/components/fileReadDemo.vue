<template>
  <div>
    <el-upload
 	action=""
    class="upload-demo"
    ref="upload"
    :on-change="handleChange"
    :auto-upload="false"
    :limit="1">点击上传
   </el-upload>
   <div id="content">hah </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: "",
    };
  },
  methods: {
    handleChange(file) {
	  let reader = new FileReader();   //先new 一个读文件的对象 FileReader
	   if (typeof FileReader === "undefined") {  //用来判断你的浏览器是否支持 FileReader
	       this.$message({
	           type: "info",
	           message: "您的浏览器不支持文件读取。"
	       });
	       return;
	   }
   //  reader.readAsText(file.raw, "gb2312");  //读.txt文件
	   reader.readAsArrayBuffer(file.raw); //读任意文件
	   reader.onload = function (e) {
	       var ints = new Uint8Array(e.target.result); //要使用读取的内容，所以将读取内容转化成Uint8Array
	       ints = ints.slice(0, 5000); //截取一段读取的内容
	       let snippets = new TextDecoder('gb2312').decode(ints); //二进制缓存区内容转化成中文（即也就是读取到的内容）
           document.getElementById("content").innerHTML=snippets;
	       console.log("读取的内容如下：");
	       console.log(snippets);
	   };
},
  },
};
</script>