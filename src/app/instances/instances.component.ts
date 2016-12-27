import { Component, OnInit } from '@angular/core';
import { InstanceService } from 'app/_services/instance.service';
import { Instance } from 'app/_models/instance';
import { Member } from 'app/_models/member';
import { Group } from 'app/_models/group';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css'],
  providers: [InstanceService]
})
export class InstancesComponent implements OnInit {

  selectedMember: Member;

  displayDialog: boolean;

  currentGroup: Group;

  instances: Instance[];

  constructor(private instanceService: InstanceService) {
    this.currentGroup = null;
  }

  ngOnInit() {
  }

  groupChosen(group: Group) {
    this.instanceService.getMembersByGroupId(group.groupId)
      .subscribe(instances => {
        this.instances = instances;
      })

    this.currentGroup = group;
    // console.log(this.members);
  }

  selectMember(member: Member) {
    this.selectedMember = member;
    this.displayDialog = true;
  }

  deleteMember(member) {


  }
  onDialogHide() {
    this.selectedMember = null;
  }

}
