import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:User = new User("","","","","");

  constructor(private authService : AuthService){

  }


  userLogin(){
    console.log(this.user);
    this.authService.login(this.user).subscribe(data => {
      console.log(data);
    })
  }

}
