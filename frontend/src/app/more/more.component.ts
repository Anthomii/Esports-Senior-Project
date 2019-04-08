import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
     this.issueService.getIssues().subscribe((issues) => {
        console.log(issues);
     });
  }

}
