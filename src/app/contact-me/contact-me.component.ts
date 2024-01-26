import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, Validators , FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit{
  @ViewChild('myForm') myForm!:ElementRef;
  @ViewChild('nameField') nameField!:ElementRef;
  @ViewChild('messageField') messageField!:ElementRef;
  @ViewChild('mailField') mailField!:ElementRef;
  @ViewChild('sendMailBtn') sendMailBtn!:ElementRef;

  nameFieldElement: any;
  messageFieldElement: any;
  mailFieldElement: any;
  sendMailBtnElement: any;
  showPopup: boolean = false;


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

    sendMail(event: Event) {
      event.preventDefault();

      // Disable the form
      this.form.disable();
      const serverEndpoint = 'https://formspree.io/f/meqyokwk';
      fetch(serverEndpoint, {
        method: 'POST',
        body: JSON.stringify(this.form.value),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            this.showPopup = true;
            setTimeout(() => {
              this.showPopup = false;
              // Reset the form after successful submission
              this.form.reset();
              // Re-enable the form
              this.form.enable();
            }, 700);
          }
        })
        .catch((error) => {
          console.error('Error sending mail:', error);
          // Re-enable the form in case of an error
          this.form.enable();
        });
    }

}
