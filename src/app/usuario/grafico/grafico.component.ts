import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public chart: any;

  @Input()
  nombres:string[] =[];
  @Input()
  numeros:number[]=[];

  ngOnInit(): void {
    this.createChart();
  } 

  createChart(){ 
    
        
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: this.nombres,
        datasets: [
          {
            label: "# Seguidores",
            data: this.numeros,
            backgroundColor: [  '#46BFBD'],
          },
          
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: "Seguidores 10 Primeros Perfiles",
            font: {
              size: 18,
              weight: 'bold',
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
              }
            }
          },
        },
        scales: {
          x: {
            grid: {
              display: false // Hide X-axis grid lines for cleaner look
            },
            ticks: {
              font: {
                size: 14
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Add a light grey color to Y-axis grid lines
            },
            ticks: {
              font: {
                size: 14
              },
            }
          }
        }
      }
    });
  }
  
}
