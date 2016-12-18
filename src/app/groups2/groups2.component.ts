import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'app/_models/group';
import { Member } from 'app/_models/member';
import { GroupService } from 'app/_services/group.service';

@Component({
  selector: 'app-groups2',
  templateUrl: './groups2.component.html',
  styleUrls: ['./groups2.component.css'],
  providers: [GroupService]
})
export class Groups2Component implements OnInit {
@Output() myEvent = new EventEmitter();

  groups: Group[];

  selectedGroup: Group;

  displayDialog: boolean;

  test;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getGroups()
    .subscribe(groups => {
        this.groups = groups;
    });
  }

  addGroup(){
    let group = new Group();
    this.selectGroup(group);
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
    this.displayDialog = true;
  }

  saveGroup(){
    this.groupService.saveGroup(this.selectedGroup)
      .subscribe(x => console.log('saveGroupResult:' + x));          
  }

  deleteGroup(group: Group) {
    this.groupService.deleteGroup(group.groupId)
      .subscribe(x => console.log('deleteGroupResult' + x));
  }

  choseGroup(group: Group) {
    this.myEvent.emit(group);
    // this.memberService.getMembersByGroupId(group.groupId)
    // .subscribe(members => {
    //   this.members = members;
    // })
    // console.log(this.members);
  }

  onDialogHide() {
    this.selectedGroup = null;
  }
}
