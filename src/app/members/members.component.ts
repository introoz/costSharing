import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MemberService } from 'app/_services/member.service';
import { UserService } from 'app/_services/user.service';
import { Member } from 'app/_models/member';
import { Group } from 'app/_models/group';
import { User } from 'app/_models/user';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService, UserService]
})
export class MembersComponent implements OnInit {
  @Output() myEventInstances = new EventEmitter();
  selectedMember: Member;

  displayDialog: boolean;

  displayDialogRegistered: boolean;

  currentGroup: Group;

  members: Member[];

  users: User[];

  constructor(private memberService: MemberService, private userService: UserService) {
    this.currentGroup = null;
  }

  ngOnInit() {
  }

  groupChosen(group: Group) {
    this.memberService.getMembersByGroupId(group.groupId)
      .subscribe(members => {
        this.members = members;
        this.myEventInstances.emit(group);
      })
    this.currentGroup = group;
    // console.log(this.members);
  }

  selectMember(member: Member) {
    this.selectedMember = member;
    this.displayDialog = true;
  }

  addMemberRegistered() {
    this.userService.getUsersByGroupId(this.currentGroup.groupId)
      .subscribe(users => {
        this.users = users;
        this.displayDialogRegistered = true;
      });
  }

  addRegisteredMember(user: User) {
    let member = new Member();
    member.correspondingUserId = user.userId;
    member.groupId = this.currentGroup.groupId;
    // console.log(user);
    member.name = user.name;
    this.selectedMember = member;
    this.saveMember();    
  }

  addMember() {
    let member = new Member();
    member.groupId = this.currentGroup.groupId;
    this.selectMember(member);
  }

  saveMember() {
    this.memberService.newMember(this.selectedMember)
      .subscribe(x => console.log('saveMember result:' + x));
  }

  deleteMember(member: Member) {
    this.memberService.deleteMember(member.memberId)
      .subscribe(x => console.log('deleteMember Result' + x));
  }

  onDialogHide() {
    this.selectedMember = null;
  }


}
