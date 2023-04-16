import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/test-app/services/services.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  searchQuery: any;
  products: any;
  searchClicked : any;
  
  constructor(private service: ServicesService, private router: Router) { }
  ngOnInit(): void {
  }

  loggedIn(){
    return this.service.isLogIn();
  }

  logout(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Action Completed',
          'Successfully logged out.'
        )
        this.service.logout();
    this.router.navigate(['login']);
      }
    })
    
  }

  currentUser(){
    return this.service.getUser().firstName+" "+this.service.getUser().lastName;
  }

  
}
