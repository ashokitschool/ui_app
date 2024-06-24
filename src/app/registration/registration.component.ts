import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user:User = new User("","","","","");

  constructor(private authService: AuthService){}


  userRegistration(){
    console.log(this.user);
    this.authService.registration(this.user).subscribe(data => {
        console.log(data);
    })
  }

}
