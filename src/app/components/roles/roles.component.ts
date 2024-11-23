import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  // string , number , boolean, date, object , array , null , undefined
  firstName: string = 'John';
  age: number = 30;
  isAdmin: boolean = true;
  birthDate: Date = new Date('1989-05-20');
  inputType: string ="radio";
  selectedState: string = '';

  showWelcome (){
    alert('Welcome');
  }
  showMessage ( messege: string){
    alert(messege);
  }

}
