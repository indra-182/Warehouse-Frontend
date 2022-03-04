import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reporting } from 'src/app/model/reporting';
import { ReportingService } from 'src/app/services/reporting.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  reporting:Observable<Reporting>

  constructor(private router : Router, private service:ReportingService) { }

  ngOnInit() {
    this.reporting=this.service.showAllTrans();
  }

}
