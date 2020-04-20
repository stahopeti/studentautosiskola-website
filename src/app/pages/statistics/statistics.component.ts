import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  statistics = {
    hours: 'assets/atl_kepzesi_ora_stat_.pdf',
    cost: 'assets/atl_kepzesi_kolts_stat_.pdf',
    success: 'assets/sikeresseg_stat_.pdf'
  };


  constructor(private route: ActivatedRoute) {
  }

  statistic = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.statistic = params.statistic;
    });
  }

}
