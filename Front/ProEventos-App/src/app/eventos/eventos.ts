import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss',
})
export class EventosComponent implements OnInit {
  public eventos: any = [
    {
      Tema: 'Nicolas Nunes',
      Local: 'Belo Horizonte',
    },
    {
      Tema: 'DotNet 5',
      Local: 'Belo Horizonte',
    },
    {
      Tema: 'São Paulo Fashion week',
      Local: 'Belo Horizonte',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
