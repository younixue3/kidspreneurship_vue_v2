<template>
  <Line class="text-white"
        :chart-options="chartOptions"
        :chart-data="chartData"
  />
</template>

<script>
import {Line} from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
  name: 'ChartLineComponent',
  components: {
    Line
  },
  props: {},
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#00c2ff',
            borderColor: '#00c2ff',
            borderWidth: 2,
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: true },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: '#eaeaea'
            },
          }],
          xAxes: [{
            ticks: {
              fontColor: '#eaeaea'
            },
          }]
        }
      }
    }
  }
}
</script>
