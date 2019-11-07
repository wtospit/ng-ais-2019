import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from 'src/app/serivces/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { UrlValidator } from 'src/app/validators/url.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  member: Member;
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.memberService.get(this.route.snapshot.paramMap.get("id"))
      .subscribe(data => {
        this.member = data;
        this.editForm = this.fb.group({
          _id: data._id,
          name: [data.name, Validators.required],
          imgUrl: [data.imgUrl, [Validators.required, UrlValidator.validate]],
          instagramId: [data.instagramId, Validators.required]
        });
      });
  }

  reset() {
    this.editForm.reset(this.member)
  }

  save() {
    if (this.editForm.valid) {
      this.memberService.save(this.member._id, this.editForm.value)
        .subscribe(data => {
          this.router.navigate(['/admin']);
        });
    } else {
      alert('เฮ้ย!!');
      console.log(this.editForm.get('imgUrl').getError('url'));
    }
  }

  get imgUrlInput() {
    return this.editForm.get("imgUrl");
  }

}
