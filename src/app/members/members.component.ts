import { Component, OnInit } from '@angular/core';
import { MemberService } from 'app/_services/member.service';
import { Member } from 'app/_models/member';
import { Group } from 'app/_models/group';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  selectedMember: Member;

  displayDialog: boolean;

  currentGroup: Group;

  members: Member[];

  constructor(private memberService: MemberService) {
    this.currentGroup = null;
  }

  ngOnInit() {
  }

  groupChosen(group: Group) {
    this.memberService.getMembersByGroupId(group.groupId)
      .subscribe(members => {
        this.members = members;
      })

    this.currentGroup = group;
    // console.log(this.members);
  }

  selectMember(member: Member) {
    this.selectedMember = member;
    this.displayDialog = true;
  }

  // newMember() {
  //   let member = new Member();
  //   member.groupId = this.currentGroup.groupId;
  //   member.
  //   this.selectMember(member);
  // }

  deleteMember(member) {


  }
  onDialogHide() {
    this.selectedMember = null;
  }


}
