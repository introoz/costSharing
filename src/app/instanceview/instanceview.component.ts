import { Component, OnInit, EventEmitter } from '@angular/core';
import { Instance } from 'app/_models/instance';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CostService } from 'app/_services/cost.service';
import { CostTypeService } from 'app/_services/cost-type.service';
import { Cost } from 'app/_models/cost';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-instanceview',
  templateUrl: './instanceview.component.html',
  styleUrls: ['./instanceview.component.css'],
  providers: [CostService]
})
export class InstanceviewComponent implements OnInit {
  // @Output() instanceChosenEvent = new EventEmitter();

private costs: Cost[];
private instanceId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private costService: CostService
  ) { }

  ngOnInit() {
    // console.log('instanceview');
    // var id: number;
    this.route.params
      .switchMap((params: Params) => { this.instanceId = (+params['id']); var x = this.costService.GetCostByInstanceId(+params['id']); return x;})
      .subscribe((costs: Cost[]) => this.costs = costs);

    // this.costTypeService.getCostTypes(id)
    // .subscribe((costTypes: CostType[]) => this.costTypes = costTypes);    
    
    // this.instanceChosenEvent.emit(this.route.params['id']);
    // this.route.params
    //   .switchMap((params: Params) => this.service.getHero(+params['id']))
    //   .subscribe((hero: Hero) => this.hero = hero);
  }



}
