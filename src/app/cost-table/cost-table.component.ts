import { Component, OnInit, Input } from '@angular/core';
// import { DataTable } from 'primeng/primeng';
import { Dropdown } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

import { Cost } from 'app/_models/Cost';
import { CostType } from 'app/_models/cost-type';
import { CostService } from 'app/_services/cost.service';
import { CostTypeService } from 'app/_services/cost-type.service';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css'],
  providers: [CostService, CostTypeService]

})
export class CostTableComponent implements OnInit {
  @Input() costs: Cost[];
  @Input() costTypes: CostType[];
  @Input() instanceId: number;

  costTypesToSelect: SelectItem[];

  previousInstanceId: number;

  displayDialog: boolean;

  cost: Cost;

  selectedCostType: string;//CostType;

  selectedCost: Cost;

  newCost: boolean;

  // costs: Cost[];

  constructor(
    private costService: CostService,
    private costTypeService: CostTypeService
  ) { }

  ngOnInit() {
    this.previousInstanceId = 0;
    this.costTypesToSelect = [];
  }

  getCosts(costs: Cost[]) {
    console.log('getCosts');
    this.costs = costs;
  }

  showDialogToAdd() {
    this.onRowSelect(null);
    // this.newCost = true;
    // this.cost = new Cost();
    // this.displayDialog = true;
  }

  save() {
    if (this.newCost)
      this.costs.push(this.cost);
    else
      this.costs[this.findSelectedCostIndex()] = this.cost;

    console.log(this.cost);
    this.costService.saveCost(this.cost);

    this.cost = null;
    this.displayDialog = false;
  }

  delete() {
    this.costs.splice(this.findSelectedCostIndex(), 1);
    this.cost = null;
    this.displayDialog = false;
  }

  getCostTypes(event) {
    this.previousInstanceId = this.instanceId;
    this.costTypeService.getCostTypes(this.instanceId)
      .subscribe((costTypes: CostType[]) => {
        this.costTypes = costTypes;

        this.costTypes.forEach(element => {
          this.costTypesToSelect.push({ label: element.name, value: element });
        });


        this.showDialog(event);
        // this.newCost = false;
        // this.cost = this.cloneCost(event.data);
        // console.log(this.costTypes);
        // console.log('costType name: ' + this.cost.type);
        // this.selectedCostType = this.costTypes.filter(x => x.name == this.cost.type)[0].name;
        // this.displayDialog = true;

        // console.log('selectedCostType' + this.selectedCostType);

      });
  }

  showDialog(event) {
    if (event != null) {
      this.newCost = false;
      this.cost = this.cloneCost(event.data);
      this.selectedCostType = this.costTypes.filter(x => x.name == this.cost.type)[0].name;
    }
    else {
      this.newCost = true;
      this.cost = new Cost();
    }
    this.displayDialog = true;
  }

  onRowSelect(event) {
    if (this.previousInstanceId != this.instanceId) {
      this.getCostTypes(event);
    }
    else {
      this.showDialog(event);
      // this.newCost = false;
      // this.cost = this.cloneCost(event.data);
      // this.selectedCostType = this.costTypes.filter(x => x.name == this.cost.type)[0].name;
      // this.displayDialog = true;
    }
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