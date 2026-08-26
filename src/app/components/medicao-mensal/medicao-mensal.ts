import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Meses{
  ind: number,
  mes: string
}

@Component({
  selector: 'app-medicao-mensal',
  imports: [NgFor],
  templateUrl: './medicao-mensal.html',
  styleUrl: './medicao-mensal.css',
})
export class MedicaoMensal implements OnInit{

  @Input()
  anos: string = ''

  @Input()
  unidade: string

  meses: Meses[] = [
    {ind: 1, mes: 'jan'},
    {ind: 2, mes: 'fev'},
    {ind: 3, mes: 'mar'},
    {ind: 4, mes: 'abr'},
    {ind: 5, mes: 'mai'},
    {ind: 6, mes: 'jun'},
    {ind: 7, mes: 'jul'},
    {ind: 8, mes: 'ago'},
    {ind: 9, mes: 'set'},
    {ind: 10, mes: 'out'},
    {ind: 11, mes: 'nov'},
    {ind: 12, mes: 'dez'},
  ]

  ngOnInit(): void {
    
  }

}
