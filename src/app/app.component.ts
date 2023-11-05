import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabInstance: TabComponent | any;
  public data: Object[] = [
    {
      'Id': 'Task - 29001',
      'Status': 'Scheduled',
      'Summary': 'Analyze the new requirements gathered from the customer.'
    },
    {
      'Id': 'Task - 29002',
      'Status': 'InProgress',
      'Summary': 'Improve application performance'
    },
    {
      'Id': 'Task - 29003',
      'Status': 'Scheduled',
      'Summary': 'Arrange a web meeting with the customer to get new requirements.'
    },
    {
      'Id': 'Task - 29004',
      'Status': 'InProgress',
      'Summary': 'Fix the issues reported in the IE browser.'
    },
    {
      'Id': 'Task - 29005',
      'Status': 'Review',
      'Summary': 'Fix the issues reported by the customer.'
    },
    {
      'Id': 'Task - 29007',
      'Status': 'Validate',
      'Summary': 'Validate new requirements'
    },
    {
      'Id': 'Task - 29009',
      'Status': 'Review',
      'Summary': 'Fix the issues reported in Safari browser.'
    },
    {
      'Id': 'Task - 29010',
      'Status': 'Completed',
      'Summary': 'Test the application in the IE browser.'
    },
    {
      'Id': 'Task - 29011',
      'Status': 'Validate',
      'Summary': 'Validate the issues reported by the customer.'
    },
    {
      'Id': 'Task - 29015',
      'Status': 'Scheduled',
      'Summary': 'Show the retrieved data from the server in grid control.'
    },
    {
      'Id': 'Task - 29016',
      'Status': 'InProgress',
      'Summary': 'Fix cannot Scheduled user’s default database SQL error.'
    },
    {
      'Id': 'Task - 29017',
      'Status': 'Review',
      'Summary': 'Fix the issues reported in data binding.'
    },
    {
      'Id': 'Task - 29018',
      'Status': 'Completed',
      'Summary': 'Analyze SQL server 2008 connection.'
    },
    {
      'Id': 'Task - 29019',
      'Status': 'Validate',
      'Summary': 'Validate databinding issues.'
    },
    {
      'Id': 'Task - 29020',
      'Status': 'Completed',
      'Summary': 'Analyze grid control.'
    },
    {
      'Id': 'Task - 29021',
      'Status': 'Completed',
      'Summary': 'Stored procedure for initial data binding of the grid.'
    },
    {
      'Id': 'Task - 29022',
      'Status': 'Completed',
      'Summary': 'Analyze stored procedures.'
    },
    {
      'Id': 'Task - 29023',
      'Status': 'Validate',
      'Summary': 'Validate editing issues.'
    },
    {
      'Id': 'Task - 29024',
      'Status': 'Review',
      'Summary': 'Test editing functionality.'
    },
    {
      'Id': 'Task - 29025',
      'Status': 'Scheduled',
      'Summary': 'Enhance editing functionality.'
    },
    {
      'Id': 'Task - 29026',
      'Status': 'InProgress',
      'Summary': 'Improve the performance of the editing functionality.'
    },
    {
      'Id': 'Task - 29027',
      'Status': 'Scheduled',
      'Summary': 'Arrange web meeting with the customer to show editing demo.'
    },
    {
      'Id': 'Task - 29029',
      'Status': 'Review',
      'Summary': 'Fix the editing issues reported by the customer.'
    },
    {
      'Id': 'Task - 29030',
      'Status': 'Stuck',
      'Summary': 'Fix the issues reported by the customer.'
    },
    {
      'Id': 'Task - 29031',
      'Status': 'Stuck',
      'Summary': 'Fix the issues reported in Safari browser.'
    },
    {
      'Id': 'Task - 29032',
      'Status': 'Stuck',
      'Summary': 'Check Login page validation.'
    },
    {
      'Id': 'Task - 29033',
      'Status': 'Stuck',
      'Summary': 'Fix the issues reported in data binding.'
    },
    {
      'Id': 'Task - 29034',
      'Status': 'Stuck',
      'Summary': 'Test editing functionality.'
    },
    {
      'Id': 'Task - 29035',
      'Status': 'Stuck',
      'Summary': 'Fix editing issues reported in Firefox.'
    },
    {
      'Id': 'Task - 29036',
      'Status': 'Stuck',
      'Summary': 'Test editing feature in the IE browser.'
    }
  ];
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id'
  };
}
