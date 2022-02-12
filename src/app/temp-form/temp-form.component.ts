import { Component, OnInit } from '@angular/core';
import { Iuser } from '../_modules/iuser';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css'],
})
export class TempFormComponent implements OnInit {
  user: Iuser = { username: '', email: '', password: '' };

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.user);
  }
}
