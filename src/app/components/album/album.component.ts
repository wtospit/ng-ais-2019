import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/serivces/member.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.list().subscribe(data => this.members = data);
  }

}
