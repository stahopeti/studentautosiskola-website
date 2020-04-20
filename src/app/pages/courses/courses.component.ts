import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = {
    A1: 'assets/a1_tajekoztato_.pdf',
    A: 'assets/a_tajekoztato_.pdf',
    B: 'assets/b_tajekoztato_.pdf'
  };


  constructor(private route: ActivatedRoute) {
  }

  course = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.course = params.course;
    });
  }

}
