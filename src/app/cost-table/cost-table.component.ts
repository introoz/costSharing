import { Component, OnInit } from '@angular/core';
// import { DataTable } from 'primeng/primeng';
// import { Dialog } from 'primeng/primeng';

import { Cost } from 'app/_models/Cost';
import { CostService } from 'app/_services/cost.service';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css'],
  providers: [CostService]

})
export class CostTableComponent implements OnInit {

  displayDialog: boolean;

  cost: Cost;

  selectedCost: Cost;

  newCost: boolean;

  costs: Cost[];

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.costService.getCosts()
    .subscribe(costs => {
        this.costs = costs;
    });

    // let x = this.costService.getCosts();
    // this.costService.getCosts().then(costs => this.costs = costs);
  }

  showDialogToAdd() {
    this.newCost = true;
    this.cost = new Cost();
    this.displayDialog = true;
  }

  save() {
    if (this.newCost)
      this.costs.push(this.cost);
    else
      this.costs[this.findSelectedCostIndex()] = this.cost;

    this.cost = null;
    this.displayDialog = false;
  }

  delete() {
    this.costs.splice(this.findSelectedCostIndex(), 1);
    this.cost = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCost = false;
    this.cost = this.cloneCost(event.data);
    this.displayDialog = true;
  }

  cloneCost(c: Cost): Cost {
    let cost = new Cost();
    for (let prop in c) {
      cost[prop] = c[prop];
    }
    return cost;
  }

  findSelectedCostIndex(): number {
    return this.costs.indexOf(this.selectedCost);
  }

}

class PrimeCost implements Cost {

  constructor(public costId, public name, public creatorName, public type, public amount, public participantCount) { }
}