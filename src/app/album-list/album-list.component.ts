import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {

  albums:any;
  constructor(private httpService: HttpService, private router:Router, private toastr: ToastrService, private spinner: NgxSpinnerService) {
    this.httpService.getMethod().subscribe((data) => {
      this.albums = data;
    })
  }


  deleteAlbum(id:any) {
    this.spinner.show();
    if(confirm("Are you sure want to delete")) {
      this.httpService.deleteMethod(id).subscribe((data) => {
        console.log(data);
        this.toastr.success('Album has been deleted', 'Success');
        this.router.navigate(["albumlist"]);
        this.spinner.hide();
      });
    }
  }

  addNewAlbum() {
    this.router.navigate(["album/"]);
  }

  editAlbum(list:any) {
    this.router.navigate(["album/",list.id]);
  }

}
