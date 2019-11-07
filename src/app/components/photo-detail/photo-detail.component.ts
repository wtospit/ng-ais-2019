import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/serivces/member.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  member: Member;

  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {

    this.memberService.get(this.route.snapshot.paramMap.get("id"))
      .subscribe(data => this.member = data);
  }

}
