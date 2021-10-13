import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';

export class Details {
  constructor(
    public stud_no: string,
    public stu_name: string,
    public stud_surname: string,
    public lec_id: string,
    public lec_name: string,
    public lec_surname: string,
  ) {
  }
}


@Component({
  selector: 'app-lecture-home',
  templateUrl: './lecture-home.component.html',
  styleUrls: ['./lecture-home.component.css']
})
export class LectureHomeComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  //variable to store the title
  tittle: string;
  //delete: string;


  //student detail array
  detail: Details[];

  ngOnInit(): void { 
    
    this.tittle = localStorage.getItem("token");
    this.getDetails();

  }
  //get function that receive the student results from the database
  getDetails(){
    this.detail = JSON.parse(this.tittle);
  }
  
  
//On click function for logout
  onClick()
  {
    
    localStorage.removeItem("token");
    this.router.navigate(['/index']);
  }

  //Image slider
    imageObject: Array<object> = [{
      thumbImage: 'assets/images/LBS6.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage:'assets/images/LBS1.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS2.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS4.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS3.jpg',
      text:'Lab booking system group'
    },
    {
      thumbImage: 'assets/images/LBS5.jpg',
      text:'Lab booking system group'
    },
  ]
}


