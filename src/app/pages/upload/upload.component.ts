import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router)  {}

  ngOnInit(): void {
  }

  inputFileChange(event){
    if(event.target.files && event.target.files[0]){
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);

      this.http.post('http://localhost:8080/archive/upload', formData)
      .subscribe(resposta => console.log('Upload OK.'));

    }
  }

}
