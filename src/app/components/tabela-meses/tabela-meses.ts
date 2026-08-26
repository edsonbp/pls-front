import { JsonPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-tabela-meses',
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, NgIf, MatInputModule, MatFormFieldModule],
  templateUrl: './tabela-meses.html',
  styleUrl: './tabela-meses.css'
})
export class TabelaMeses {
  @Input()
  anos: number[]=[]

  @Input()
  data: object | any

  @Input()
  disabled: boolean;
  
  @Input()
  disabled_saude: boolean;

  form : FormGroup;

   @Output() atualizar: EventEmitter<any> = new EventEmitter<any>();

   total1: number= 0.000;
   total2: number= 0.000;
   total3: number= 0.000;

   meses: any[] = [
    {mes: 1, sigla: 'JAN'},
    {mes: 2, sigla: 'FEV'},
    {mes: 3, sigla: 'MAR'},
    {mes: 4, sigla: 'ABR'},
    {mes: 5, sigla: 'MAI'},
    {mes: 6, sigla: 'JUN'},
    {mes: 7, sigla: 'JUL'},
    {mes: 8, sigla: 'AGO'},
    {mes: 9, sigla: 'SET'},
    {mes: 10, sigla: 'OUT'},
    {mes: 11, sigla: 'NOV'},
    {mes: 12, sigla: 'DEZ'},
  ]

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
      17: [],
      18: [],
      19: [],
      20: [],
      21: [],
      22: [],
      23: [],
      24: [],
      25: [],
      26: [],
      27: [],
      28: [],
      29: [],
      30: [],
      31: [],
      32: [],
      33: [],
      34: [],
      35: [],
      36: [],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('desabilitar input saúde', this.disabled_saude)
    if(this.data){
      this.patchValue();
      this.totalizarLinha1();
      this.totalizarLinha2();
      this.totalizarLinha3();
      
    }
    if(this.disabled_saude === true){
      console.log('desabilitar input saúde', this.disabled_saude)
      this.form.disable();
    }
    if(this.disabled === true){
      console.log('desabilitar todos', this.disabled)
      this.form.disable();
    }
  }

  ngOnInit(): void {
    const inputsNumber = document.getElementsByName('tabela_input_number');
    let invalidChars = [".", "e"];
    inputsNumber.forEach((element: HTMLElement)=>{
      element.addEventListener("keydown", function(e){
        if (invalidChars.includes(e.key)){
          e.preventDefault();
        }
      })
    })
    if(this.disabled === true){
      console.log('desabilitar todos', this.disabled)
      this.form.disable();
    } 
    if(this.disabled_saude === true){
      console.log('desabilitar input saúde', this.disabled_saude)
      this.form.disable();
    }
    // if(this.data){
    //   this.patchValue();
    //   this.totalizarLinha1();
    //   this.totalizarLinha2();
    //   this.totalizarLinha3();
    //   console.log(this.total1, this.total2, this.total3)
    //   console.log('teste')
    // }
  }

  atualizarValor(e: any){
    this.atualizar.emit(this.form.value)
    this.totalizarLinha1()
    this.totalizarLinha2()
    this.totalizarLinha3()
  }

  patchValue(){
    this.form.patchValue({
        1: this.data['1'],
        2: this.data['2'],
        3: this.data['3'],
        4: this.data['4'],
        5: this.data['5'],
        6: this.data['6'],
        7: this.data['7'],
        8: this.data['8'],
        9: this.data['9'],
        10: this.data['10'],
        11: this.data['11'],
        12: this.data['12'],
        13: this.data['13'],
        14: this.data['14'],
        15: this.data['15'],
        16: this.data['16'],
        17: this.data['17'],
        18: this.data['18'],
        19: this.data['19'],
        20: this.data['20'],
        21: this.data['21'],
        22: this.data['22'],
        23: this.data['23'],
        24: this.data['24'],
        25: this.data['25'],
        26: this.data['26'],
        27: this.data['27'],
        28: this.data['28'],
        29: this.data['29'],
        30: this.data['30'],
        31: this.data['31'],
        32: this.data['32'],
        33: this.data['33'],
        34: this.data['34'],
        35: this.data['35'],
        36: this.data['36'],
    })
  }

  totalizarLinha1(){
    this.total1 = (this.form.controls['1'].value +
                  this.form.controls['2'].value +
                  this.form.controls['3'].value +
                  this.form.controls['4'].value +
                  this.form.controls['5'].value +
                  this.form.controls['6'].value +
                  this.form.controls['7'].value +
                  this.form.controls['8'].value +
                  this.form.controls['9'].value +
                  this.form.controls['10'].value +
                  this.form.controls['11'].value +
                  this.form.controls['12'].value).toFixed(3).replace('.', ',');
      // this.total1.toFixed(3);

  }
  totalizarLinha2(){
    this.total2 = (this.form.controls['13'].value +
                  this.form.controls['14'].value +
                  this.form.controls['15'].value +
                  this.form.controls['16'].value +
                  this.form.controls['17'].value +
                  this.form.controls['18'].value +
                  this.form.controls['19'].value +
                  this.form.controls['20'].value +
                  this.form.controls['21'].value +
                  this.form.controls['22'].value +
                  this.form.controls['23'].value +
                  this.form.controls['24'].value).toFixed(3).replace('.', ',');
  }
  totalizarLinha3(){
    this.total3 = (this.form.controls['25'].value +
                  this.form.controls['26'].value +
                  this.form.controls['27'].value +
                  this.form.controls['28'].value +
                  this.form.controls['29'].value +
                  this.form.controls['30'].value +
                  this.form.controls['31'].value +
                  this.form.controls['32'].value +
                  this.form.controls['33'].value +
                  this.form.controls['34'].value +
                  this.form.controls['35'].value +
                  this.form.controls['36'].value).toFixed(3).replace('.', ',');
  }
  corrigirNumero(e: any){
    let invalidChars = [".", "e"];
    if(invalidChars.includes(e.key)){
      e.preventDefault();
    }
    const regex = /^\d*\.?\d{0,3}$/; 
    if(!regex.test(e.target.value)){
      e.target.value = e.target.value.slice(0, -1); 
    }
    console.log(e.target.value)
  }
}
