<template>
  <div >
    <div class="chart" :id=" 'chart-Line_' + index">
</div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'LineChart',
  props: ['index', 'xData', 'yData'],
  data () {
    return {
      msg: 'LineChart'
    }
  },
  mounted() {
      this.initChart();
  },
  computed: {
      option() {
          return {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: this.xData
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: this.yData
                }]
          }
      }
  },
  methods: {
        initChart : function() {
                    // 基于准备好的dom，初始化echarts实例
                    var myChart = echarts.init(document.getElementById('chart-Line_' + this.index));
                    // 绘制图表
                    myChart.setOption(this.option);
        }
  }
   
}

</script>

<style>
    .chart{
        width : 700px;
        height: 300px;
        margin: auto;
    }
</style>