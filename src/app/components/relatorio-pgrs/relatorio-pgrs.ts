import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { MedicaoAnual } from '../medicao-anual/medicao-anual';
import { NgIf } from '@angular/common';
import { MedicaoMensal } from '../medicao-mensal/medicao-mensal';
import { EmpresaEcoponto } from '../empresa-ecoponto/empresa-ecoponto';
import { Cooperativa } from '../cooperativa/cooperativa';

@Component({
  selector: 'app-relatorio-pgrs',
  imports: [MatCardModule, MatCheckboxModule, MedicaoAnual, MedicaoMensal, EmpresaEcoponto, Cooperativa,NgIf],
  templateUrl: './relatorio-pgrs.html',
  styleUrl: './relatorio-pgrs.css',
})
export class RelatorioPgrs implements OnInit {

  paragrafos: any = []
  param_id: string | null = null
  private route = inject(ActivatedRoute)
  pgrs: any
  checked: boolean = false

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef){}

  ngOnInit(){
    this.param_id = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:8000/pgrs/'+this.param_id).subscribe((data)=>{
      this.pgrs = data
      this.pgrs = this.pgrs[0]
      this.cdRef.detectChanges()
      console.log(this.pgrs)
    })
    this.checked = true
    this.http.get('./paragrafos.json').subscribe((data)=>{
      this.paragrafos = data
      this.cdRef.detectChanges()
    })
  }

}
