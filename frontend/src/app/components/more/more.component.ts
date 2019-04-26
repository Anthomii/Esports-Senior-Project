import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     /*this.issueService.getIssues().subscribe((issues) => {
        console.log(issues);
     });*/
  }

}
