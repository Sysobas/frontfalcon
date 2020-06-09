import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Archive } from './archive';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  formArchive: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.createFormArchive();
  }

  sendData() {
    const dataForm = this.formArchive.value;

    const archive = new Archive(
      dataForm.id,
      dataForm.data,
      dataForm.ip,
      dataForm.requisicao,
      dataForm.status,
      dataForm.userAgent
    );

    this.http.post('https://backfalcon.herokuapp.com/archive/create', archive)
      .subscribe(resposta => console.log('Cadastrado Realizado com sucesso.'));
    alert(`O registro ${archive.ip} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(archive)}`);

    this.formArchive.reset();

  }

  createFormArchive() {
    this.formArchive = this.fb.group({
      data: ['', Validators.compose([Validators.required])],
      ip: ['', Validators.compose([Validators.required])],
      requisicao: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])],
      userAgent: ['', Validators.compose([Validators.required])]
    });
  }

  // Propriedades do formulário que vamos utilizar para obter os erros
  get data() {
    return this.formArchive.get('data');
  }

  get ip() {
    return this.formArchive.get('ip');
  }

  get requisicao() {
    return this.formArchive.get('requisicao');
  }

  get status() {
    return this.formArchive.get('status');
  }

  get userAgent() {
    return this.formArchive.get('userAgent');
  }

}


