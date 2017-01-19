import { Component, OnInit, Input } from '@angular/core';
// import { DataTable } from 'primeng/primeng';
import { Dropdown } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

// import { Cost } from 'app/_models/Cost';
// import { CostType } from 'app/_models/cost-type';
// import { CostService } from 'app/_services/cost.service';
// import { CostTypeService } from 'app/_services/cost-type.service';

import { Participant } from 'app/_models/participant';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})

export class ParticipantsComponent implements OnInit {
  // @Input() costs: Cost[];
  // @Input() costTypes: CostType[];
  // @Input() instanceId: number;

  // costTypesToSelect: SelectItem[];

  // previousInstanceId: number;

  // displayDialog: boolean;

  // cost: Cost;

  // selectedCostType: string;//CostType;

  selectedParticipant: Participant;

  // newCost: boolean;

  participants: Participant[];

  constructor(
    // private costService: CostService,
    // private costTypeService: CostTypeService
  ) { }

  ngOnInit() {
    this.participants = [];//new Array<Participant>();

    var part = new Participant();
    part.designId = 1;
    part.costId = 1;
    part.memberId = 1;
    part.member = 'login';
    part.paid = 20;
    part.wholeAmount = 50;

    var part2 = new Participant();
    part2.designId = 2;
    part2.costId = 1;
    part2.memberId = 4;
    part2.member = 'test';
    part2.paid = 80;
    part2.wholeAmount = 50;
    
    this.participants.push(part);
    this.participants.push(part2);
    // this.previousInstanceId = 0;
    // this.costTypesToSelect = [];
  }

  // getCosts(costs: Cost[]) {
  //   console.log('getCosts');
  //   this.costs = costs;
  // }

  showDialogToAdd() {
    // this.onRowSelect(null);
    // this.newCost = true;
    // this.cost = new Cost();
    // this.displayDialog = true;
  }

  // save() {
  //   if (this.newCost)
  //     this.costs.push(this.cost);
  //   else
  //     this.costs[this.findSelectedCostIndex()] = this.cost;

  //   console.log(this.cost);
  //   this.costService.saveCost(this.cost);    

  //   this.cost = null;
  //   this.displayDialog = false;
  // }

  // delete() {
  //   this.costs.splice(this.findSelectedCostIndex(), 1);
  //   this.cost = null;
  //   this.displayDialog = false;
  // }

  // getCostTypes(event) {
  //   this.previousInstanceId = this.instanceId;
  //   this.costTypeService.getCostTypes(this.instanceId)
  //     .subscribe((costTypes: CostType[]) => {
  //       this.costTypes = costTypes;

  //       this.costTypes.forEach(element => {
  //         this.costTypesToSelect.push({ label: element.name, value: element });
  //       });


  //       this.showDialog(event);
  //       // this.newCost = false;
  //       // this.cost = this.cloneCost(event.data);
  //       // console.log(this.costTypes);
  //       // console.log('costType name: ' + this.cost.type);
  //       // this.selectedCostType = this.costTypes.filter(x => x.name == this.cost.type)[0].name;
  //       // this.displayDialog = true;

  //       // console.log('selectedCostType' + this.selectedCostType);

  //     });
  // }

  // showDialog(event) {
  //   if (event != null) {
  //     this.newCost = false;
  //     this.cost = this.cloneCost(event.data);
  //     this.selectedCostType = this.costTypes.filter(x => x.name == this.cost.type)[0].name;
  //   }
  //   else {
  //     this.newCost = true;
  //     this.cost = new Cost();
  //   }
  //   this.displayDialog = true;
  // }

  // onRowSelect(event) {
  //   if (this.previousInstanceId != this.instanceId) {
  //     this.getCostTypes(event);
  //   }
  //   else {
  //     this.showDialog(event);
  //     // this.newCost = false;
  //     // this.cost = this.cloneCost(event.data);
  //     // this.selectedCostType = this.costTypes.filter(x => x.name == this.cost.type)[0].name;
  //     // this.displayDialog = true;
  //   }
  // }

  // cloneCost(c: Cost): Cost {
  //   let cost = new Cost();
  //   for (let prop in c) {
  //     cost[prop] = c[prop];
  //   }
  //   return cost;
  // }

  // findSelectedCostIndex(): number {
  //   return this.costs.indexOf(this.selectedCost);
  // }

}

// class PrimeCost implements Cost {

//   constructor(public costId, public name, public creatorName, public type, public amount, public participantCount) { }
// }