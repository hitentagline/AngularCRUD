import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  albumId:any;
  albumData:any;

  albumForm!:FormGroup;

  constructor(private route:ActivatedRoute, private router:Router, private httpService: HttpService, private toastr: ToastrService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.formValidation();
 
    let id = parseInt(this.route.snapshot.params['id']);
    
    if(id){
      this.httpService.getSingle(id).subscribe((data:any) => {
        this.albumData = data;
        this.albumId = id;

        this.albumForm.patchValue({
          title:data.title,
          userId:data.userId,
        });
        
      });
    }
    
  }

  formValidation() {
     this.albumForm = new FormGroup({
      title: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
    });
  }

  saveAlbum(data:any){
    this.spinner.show();
    if(data.id){
      this.httpService.putMethod(data.id, data).subscribe(() => {
        this.spinner.hide();
        this.toastr.success('Album has been updated!', 'Success');
        this.router.navigate(["albumlist"]);
      });
    }else {
      this.httpService.postMethod(data).subscribe((data) => {
        this.spinner.hide();
        this.toastr.success('New album has been added successfully!', 'Success');
        this.router.navigate(["albumlist"]);
      })
    }
    
  }
}
