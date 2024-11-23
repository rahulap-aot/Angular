import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = [];

  http = inject(HttpClient)

  // constructor(private http: HttpClient) {
    
  // } 


ngOnInit(): void {
  this.getAllRoles();
}

getAllRoles(){
  this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:any) => {
    this.roleList = res.data;
    console.log(this.roleList);
  })
}


















  // // string , number , boolean, date, object , array , null , undefined
  // firstName: string = 'John';
  // age: number = 30;
  // isAdmin: boolean = true;
  // birthDate: Date = new Date('1989-05-20');
  // inputType: string ="radio";
  // selectedState: string = '';

  // showWelcome (){
  //   alert('Welcome');
  // }
  // showMessage ( messege: string){
  //   alert(messege);
  // }

}
