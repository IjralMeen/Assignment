import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatFormFieldModule, MatInputModule, HighchartsChartModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
  today = new Date();
  displayedColumns: string[] = ['dealerName', 'additionalInfo', 'issueCategory', 'issueStatus', 'comments', 'callStatus', 'callDetails', 'action'];

dataSource = [
  {dealerName: 'Ritika Beniwal',dealerNumber: 'DM53453453443',  additionalInfo: 'Hydrogen', additionalNumber:'032UHVJIHN34797923HJV', issueCategory: 'KYC', issueStatus: 'H', comments: 'Lorem ipsum', callStatus:'Reschedule', callDate:'20 April 2025', callTime:'021:12pm', callMinute:'10min', action:''},
  {dealerName: 'Ritika Beniwal', dealerNumber: 'DM53453453443', additionalInfo: 'Helium', additionalNumber:'032UHVJIHN34797923HJV', issueCategory: 'e-Manadate', issueStatus: 'He', comments: 'Lorem ipsum', callStatus:'Reschedule', callDate:'20 April 2025', callTime:'021:12pm', callMinute:'10min', action:''},
  {dealerName: 'Ritika Beniwal', dealerNumber: 'DM53453453443', additionalInfo: 'Lithium', additionalNumber:'032UHVJIHN34797923HJV', issueCategory:'e-Manadate', issueStatus: 'Li', comments: 'Lorem ipsum', callStatus:'Reschedule', callDate:'20 April 2025', callTime:'021:12pm', callMinute:'10min', action:''},
  {dealerName: 'Ritika Beniwal', dealerNumber: 'DM53453453443', additionalInfo: 'Beryllium', additionalNumber:'032UHVJIHN34797923HJV', issueCategory: 'e-Manadate', issueStatus: 'Be', comments: 'Lorem ipsum', callStatus:'Reschedule', callDate:'20 April 2025', callTime:'021:12pm', callMinute:'10min', action:''},
  {dealerName: 'Ritika Beniwal', dealerNumber: 'DM53453453443', additionalInfo: 'Boron', additionalNumber:'032UHVJIHN34797923HJV', issueCategory: 'e-Manadate', issueStatus: 'B', comments: 'Lorem ipsum', callStatus:'Reschedule', callDate:'20 April 2025', callTime:'021:12pm', callMinute:'10min', action:''},
 
];

Highcharts: typeof Highcharts = Highcharts;
chartOptions: Highcharts.Options = {
  chart: {
    type: 'pie'
  },
  title: {
    text: ''
  },
  plotOptions: {
    pie: {
    innerSize: '40%',
    dataLabels: {
      enabled: false
    }
  }
  },
  credits: {
  enabled: false
},
legend: {
  enabled: true,
  align: 'center',
  verticalAlign: 'bottom',
  layout: 'horizontal'
},
  series: [{
    type: 'pie',
    data: [
      { name: 'Apples', y: 60 },
      { name: 'Oranges', y: 25 },
      { name: 'Pears', y: 15 }
    ]
  }]
};

chartOptions2: Highcharts.Options = {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  legend: {
  enabled: false
},
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges', 'Pears'],
    crosshair: false
  },
  credits: {
  enabled: false
},
  yAxis: {
    min: 0,
    title: {
      text: 'Quantity'
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      pointWidth: 10,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    type: 'column',
    name: 'Fruits',
    color: '#003366',
    data: [10, 15, 25, 30]
  }]
};

ngOnInit(): void {
}

}
