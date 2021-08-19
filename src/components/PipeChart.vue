<template>
  <div >
    <div class="chart" :id=" 'chart-Line_' + index">
</div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'PipeChart',
  props: ['index', 'data'],
  data () {
    return {
      msg: 'pipeChart'
    }
  },
  mounted() {
      this.initChart();
  },
  computed: {
      option() {
          return {
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        data: this.data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
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