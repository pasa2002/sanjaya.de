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

      const nameFieldElement = document.querySelector('.contact-me input[placeholder="Your name"]') as HTMLInputElement;
      const messageFieldElement = document.querySelector('.contact-me textarea[placeholder="Your message"]') as HTMLTextAreaElement;
      const mailFieldElement = document.querySelector('.contact-me input[placeholder="Your email"]') as HTMLInputElement;
      const sendMailBtnElement = document.querySelector('.contact-me button') as HTMLButtonElement;

      if (nameFieldElement) nameFieldElement.setAttribute('disabled', 'true');
      if (messageFieldElement) messageFieldElement.setAttribute('disabled', 'true');
      if (mailFieldElement) mailFieldElement.setAttribute('disabled', 'true');
      if (sendMailBtnElement) sendMailBtnElement.setAttribute('disabled', 'true');

      let fd = new FormData();
      if (nameFieldElement && nameFieldElement.value) fd.append('name', nameFieldElement.value);
      if (messageFieldElement && messageFieldElement.value) fd.append('message', messageFieldElement.value);
      if (mailFieldElement && mailFieldElement.value) fd.append('mail', mailFieldElement.value);

      fetch('https://sanjaya-shrestha.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      })  .then(response => {
        if (response.ok) {
          this.showPopup = true;
          setTimeout(() => {
            this.showPopup = false;
          }, 2500);

          // Re-enable fields and button
          if (nameFieldElement) nameFieldElement.removeAttribute('disabled');
          if (messageFieldElement) messageFieldElement.removeAttribute('disabled');
          if (mailFieldElement) mailFieldElement.removeAttribute('disabled');
          // if (sendMailBtnElement) sendMailBtnElement.removeAttribute('disabled');

          nameFieldElement.value = '';
          messageFieldElement.value = '';
          mailFieldElement.value = '';
        }
      })
      .catch(error => {
        console.error('Error sending mail:', error);
      });
    }

}
