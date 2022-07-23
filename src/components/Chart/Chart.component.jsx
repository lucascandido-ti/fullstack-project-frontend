import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

export const Chart = (props) => {
    const options = {
        title: {
            text: props.title,
            style:{"font-size":"32px",'color':'white'}
        },
        chart:{
            width:1200,
            height: 580,
            type: 'line',
        },
        legend: {
            layout: 'vertical',
            floating: true,
            backgroundColor: '#FFFFFF',
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            x: 0
        },
        options3d:{
            alpha:0,
            axisLabelPosition:null,
            beta:0,
            depth:100,
            enabled:true,
            fitToPlot:true,
            viewDistance:25,
        },
        colors:["#C485CF"],
        xAxis: {
            categories: props.categories !== undefined ? props.categories : [],
        },
        series: [{
            data: props.series !== undefined ? props.series : [] 
        }],
        plotOptions: {
            series: {
              point: {
                events: {
                  click: props.clickPoint
                }
              }
            }
          }
    }
  
    return (
      <HighchartsReact 
        highcharts={Highcharts} 
        options={options} 
        containerProps={{ className: props.className }} 
      />
    );
  };
  