<template>
  <div >
    <template v-for= "(item, key) in data" >
        <line-chart v-if= "item.chart_type == 1"   :index= "key" :xData="item.xData" :yData="item.yData"> </line-chart>
        <pipe-chart v-if= "item.chart_type == 2"   :index= "key" :data="item.data"> </pipe-chart>
        <point-chart v-if= "item.chart_type == 3"  :index= "key" :xData="item.xData" :yData="item.yData"> </point-chart>
    </template>  
  </div>
</template>

<script>
import * as echarts from 'echarts';
import LineChart from '@/components/LineChart';
import PipeChart from '@/components/PipeChart';
import PointChart from '@/components/PointChart';
import axios from 'axios'


export default {
  name: 'ChartPage',
     beforeRouteEnter: (to, from, next) => {      
         //加载数据      
         console.log("进入路由之前")
         next(vm => {

        //进入路由之前执行getData方法
        vm.getData()
      });         
    },   
  components: {
      'line-chart': LineChart,
      'pipe-chart': PipeChart,
      'point-chart': PointChart
  },
  methods: {      
        getData: function () { 
            var that = this     
            axios({          
                method: 'get',          
                url: 'http://localhost:8080/static/mock/data.json'        
            }).then(function (response) { 
                console.log(response) ;
                that.data = response.data.data;
                })      
            }    
    },
  data () {
    return {
        'data': []
    }
  }
}
</script>

<style>

</style>