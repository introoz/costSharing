import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InstanceService } from 'app/_services/instance.service';
import { Instance } from 'app/_models/instance';
import { Member } from 'app/_models/member';
import { Group } from 'app/_models/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css'],
  providers: [InstanceService]
})
export class InstancesComponent implements OnInit {

  selectedInstance: Instance;

  displayDialog: boolean;

  currentGroup: Group;

  instances: Instance[];

  constructor(private instanceService: InstanceService, private router: Router) {
    this.currentGroup = null;
  }

  ngOnInit() {
  }

  groupChosen(group: Group) {
    this.instanceService.getInstancesByGroupId(group.groupId)
      .subscribe(instances => {
        this.instances = instances;
      })

    this.currentGroup = group;
    // console.log(this.members);
  }

  addInstance() {
    let instance = new Instance();
    instance.groupId = this.currentGroup.groupId;
    this.selectInstance(instance);
  }

  saveInstance() {
    this.instanceService.newInstance(this.selectedInstance)
      .subscribe(x => console.log('saveMember result:' + x));
  }

  selectInstance(instance: Instance) {
    // this.selectedInstance = instance;
    // this.displayDialog = true;

    console.log('weszlo do selectInstance');
    this.router.navigate(['/instanceview', instance.instanceId]);
  }

  deleteInstance(instance: Instance) {
    this.instanceService.deleteInstance(instance.instanceId)
      .subscribe(x => console.log('deleteMember Result' + x));
  }

  onDialogHide() {
    this.selectedInstance = null;
  }

}
