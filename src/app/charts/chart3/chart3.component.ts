import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  grid: ApexGrid;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'ngx-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component {
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  
  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 90, 20, 5, 35, 50, 55],
      }],
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 5,
          blur: 3,
          color: '#39DA8A',
          opacity: 0.35
        },
        zoom: {
          enabled: false,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        colors: ['#39DA8A']
      },
      title: {
        text: 'Chart 7 | Потребление по амперам от времени'
      },
      yaxis: {
        show: true,
        title: {
          text: 'Ампер'
        }
      },
      xaxis: {
        type: 'category',
        categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        title: {
          text: 'Время'
        },
        labels: {
            show: true,
        },
        axisBorder: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        tooltip: {
            enabled: true,
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          }
        },
      },
      markers: {
        colors: '#39DA8A',
        strokeColors: 'white',
        strokeWidth: 3,
        hover: {
          size: 7,
          sizeOffset: 3
        }
      },
      tooltip: {
        enabled: true,
        theme: 'light',
        marker: {
            show: false,
        },
        x: {
          show: false
        }
      }
    };
  }
}