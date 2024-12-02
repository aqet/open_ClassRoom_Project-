import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  userEmail: string='yesyes'
  constructor(private router: Router){}

  onContinue() {
    this.router.navigateByUrl('faceSnap')
  }

  onSubmitForm(form: NgForm): void{
    console.log(form.value);
  }
}
