import { Component, OnInit } from '@angular/core';
import { FormControl, Validators , FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit{

    form: FormGroup;
    constructor(private fb: FormBuilder){};

    ngOnInit(): void {
        this.form = this.fb.group ({
          name : ['',Validators.required],
          email  :['',[Validators.required, Validators.email]],
          message: ['',Validators.required]
        });
    }
    get name() { return this.form.get('name'); }
    get email() { return this.form.get('email'); }
    get message() { return this.form.get('message'); }
  }
