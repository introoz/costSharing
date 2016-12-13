import { Component, OnInit } from '@angular/core';
import { Group } from 'app/_models/group';
import { Member } from 'app/_models/member';
import { GroupService } from 'app/_services/group.service';
import { MemberService } from 'app/_services/member.service';

@Component({
  selector: 'app-groups2',
  templateUrl: './groups2.component.html',
  styleUrls: ['./groups2.component.css'],
  providers: [GroupService, MemberService]
})
export class Groups2Component implements OnInit {

  groups: Group[];

  members: Member[];

  selectedGroup: Group;

  displayDialog: boolean;

  constructor(private groupService: GroupService, private memberService: MemberService) { }

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

  choseGroup(group: Group) {
    this.memberService.getMembersByGroupId(group.groupId)
    .subscribe(members => {
      this.members = members;
    })
    console.log(this.members);
  }

  onDialogHide() {
    this.selectedGroup = null;
  }

}
