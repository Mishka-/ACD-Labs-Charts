import {Component, OnInit} from '@angular/core';
import * as CanvasJS from '../assets/canvasjs.min.js';
import * as $ from 'jquery';
import {AxisService} from "./services/axis.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private axisService: AxisService) {
  }

  ngOnInit() {

    this.axisService.getAxes()
      .subscribe(data => {
        let dps = [];
        const chartData = [];

        $.each(data, function (i) {
          dps = [];
          $.each(data[i].axes, function (key, val) {
            dps.push({
              x: val["x"],
              y: val["y"]
            });
          });

          chartData.push({
            name: data[i]['name'],
            type: "spline",
            showInLegend: true,
            dataPoints: dps
          });

        });

        const chart = new CanvasJS.Chart("chartContainer", {
          title: {
            text: "Charts ACD/Labs"
          },
          zoomEnabled: true,
          animationEnabled: true,
          toolTip: {
            animationEnabled: true,
            shared: true
          },
          legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "top",
            fontSize: 16,
            fontFamily: "calibri",
            fontColor: "dimGrey"
          },
          data: chartData
        });

        chart.render();
      });
  }
}
