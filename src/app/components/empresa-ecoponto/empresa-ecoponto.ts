import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-ecoponto',
  imports: [],
  templateUrl: './empresa-ecoponto.html',
  styleUrl: './empresa-ecoponto.css',
})
export class EmpresaEcoponto implements OnInit{

  @Input()
  classe: string

  ngOnInit(): void {
    
  }

}
