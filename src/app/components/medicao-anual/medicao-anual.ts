import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicao-anual',
  imports: [],
  templateUrl: './medicao-anual.html',
  styleUrl: './medicao-anual.css',
})
export class MedicaoAnual implements OnInit{

  @Input()
  anos: string = ''
  
  @Input()
  unidade: string = ''

  ngOnInit(): void {
    console.log(this.anos)
  }
}
