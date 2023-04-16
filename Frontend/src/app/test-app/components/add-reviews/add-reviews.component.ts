import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  addReview(form : any){
    let newPost = {
      heading: form.value.heading,
      rating: form.value.rating,
      review: form.value.review,
      productId: localStorage.getItem("reviewProductId")
    }
    this.service.addReview(newPost).subscribe(
      (data)=>{ 
        Swal.fire({
          icon: 'success',
          title: 'ADDED Successful',
          showConfirmButton: false,
          timer: 5000
        })
        this.router.navigate(['home']);
      },
      (err)=>{console.log("Error")}
    )
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

  loggedIn(){
    return this.service.isLogIn();
  }
  currentUser(){
    return this.service.getUser().firstName+" "+this.service.getUser().lastName;
  }

}
