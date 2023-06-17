import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables, ChartItem } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements AfterViewInit {
  @ViewChild('statisticsChart', { static: true })
  chartCanvas!: ElementRef<HTMLCanvasElement>;
  statisticalData: number[] = [25, 30, 10, 15, 20]; // Example data

  ngAfterViewInit() {
    const ctx = this.chartCanvas.nativeElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D | null;
    if (!ctx) {
      // Handle the case where the context is null (e.g., canvas element not found)
      console.error('Failed to get canvas context');
      return;
    }

    const statisticsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Category 1',
          'Category 2',
          'Category 3',
          'Category 4',
          'Category 5',
        ],
        datasets: [
          {
            label: 'Statistics',
            data: this.statisticalData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
