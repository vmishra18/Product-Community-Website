import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/test-app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  review: any
  approved: any
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.showReviews();
  }

  showReviews(){
    this.service.showAdminReviews().subscribe(
      (data)=>{
       
        this.review = data;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  approveReview(review: any){
    this.service.approveReview(review).subscribe(
      (data)=>{
        this.approved = data;
        Swal.fire({
          icon: 'success',
          title: 'Approved Successful',
          showConfirmButton: false,
          timer: 5000
        })
        this.showReviews();
      },
      (error)=>{console.log(error);
      }
    )
  }
  
}
