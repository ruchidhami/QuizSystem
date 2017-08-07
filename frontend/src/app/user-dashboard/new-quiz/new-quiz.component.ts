import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DashboardService } from '../../admin-dashboard/dashboard.service';

import {Question} from '../../admin-dashboard/question/quest'

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css'],
  providers:[DashboardService]
})
export class NewQuizComponent implements OnInit {
  quest: Question[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.retrieveQuestion(null)
  }

  retrieveQuestion(categoryId) {
   categoryId = this.activatedRoute.snapshot.paramMap.get('id');

    this.dashboardService.retrieveQuestion(categoryId)
      .subscribe((question) => {
        this.quest = question;
      })
  }

}
