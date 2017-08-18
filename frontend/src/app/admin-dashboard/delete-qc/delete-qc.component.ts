import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { DashboardService } from '../dashboard.service';
import { Category } from '../categories/category';
import { Question } from '../question/question';

@Component({
  selector: 'app-delete-qc',
  templateUrl: './delete-qc.component.html',
  styleUrls: ['./delete-qc.component.css'],
  providers: [DashboardService]
})
export class DeleteQCComponent implements OnInit {
  categories: Category[];
  questions: Question[];
  public modalRef: BsModalRef;

  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private router: Router , private modalService: BsModalService) { }

  public categoryId = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit() {
    this.listCategories();
  }

  public openModal(template) {
    this.modalRef = this.modalService.show(template);
  }

  listCategories(){
    this.dashboardService.listCategory()
      .subscribe((categories) => {
        this.categories = categories;
      })
  }

  goToCategory(id):void{
    this.router.navigate([`/admin/listQuestions/`, id]);
  }

  deleteCategory(id): void{
    this.dashboardService.deleteCategory(id)
      .subscribe((response) => {
        this.listCategories();
      })
  }

}
