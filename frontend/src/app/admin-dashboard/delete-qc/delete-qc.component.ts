import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

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
  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  public categoryId = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit() {
    this.listCategories();
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
