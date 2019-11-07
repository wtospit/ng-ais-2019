import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() 
  member: Member

  constructor() { }

  ngOnInit() {
  }

}
