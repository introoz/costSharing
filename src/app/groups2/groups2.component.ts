import { Component, OnInit } from '@angular/core';
import { Group } from 'app/_models/group';
import { GroupService } from 'app/_services/group.service';

@Component({
  selector: 'app-groups2',
  templateUrl: './groups2.component.html',
  styleUrls: ['./groups2.component.css'],
  providers: [GroupService]
})
export class Groups2Component implements OnInit {

  groups: Group[];

  selectedGroup: Group;

  displayDialog: boolean;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getGroups()
    .subscribe(groups => {
        this.groups = groups;
    });
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedGroup = null;
  }

}
