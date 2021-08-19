<template>
  <div >
    <div class="chart" :id=" 'chart-Line_' + index">
</div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'PointChart',
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
                    xAxis: {
                    type: 'category',
                    data: this.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.yData,
                    type: 'line'
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