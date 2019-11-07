import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/serivces/member.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  members: Member[];
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.list().subscribe(data => this.members = data);

  }

}
