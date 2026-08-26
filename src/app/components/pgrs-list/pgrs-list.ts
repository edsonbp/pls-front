import { AfterViewInit, Component, OnInit, signal, inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

export interface Resposta {
  area: string;
  nome: string;
  nome_completo: string;
  hora_conclusao: string;
  anos: string;
}

@Component({
  selector: 'app-pgrs-list',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,  MatCardModule,
            MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './pgrs-list.html',
  styleUrl: './pgrs-list.css',
})
export class PgrsList implements AfterViewInit{
    private http = inject(HttpClient);
    private ref = inject(ChangeDetectorRef)	
    protected readonly title = signal('pls-front');
    columns = ['area', 'nome', 'nome_completo',
            'anos', 'hora_conclusao', 'pdf']
    data_source = new MatTableDataSource<Resposta>()
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    data_atual = new Date()
    data_bloqueio: any;
    data_formatada: any;
    total_registros: number = 0
    
  constructor(private router: Router){
    this.http.get('http://localhost:8000/respostas_pgrs/').subscribe((data:any)=>{
      this.data_source.data = data
      this.total_registros = data.length
      console.log(data)
      // this.ref.detectChanges()
    })
  }
  
  ngOnInit(): void {
    this.data_bloqueio = this.data_atual.getMonth() +'/'+ this.data_atual.getFullYear()
    this.data_formatada = this.data_atual.getMonth()+1 +'/'+ this.data_atual.getFullYear()
  }

  ngAfterViewInit(){
    this.paginator._intl.itemsPerPageLabel = "Registros por página";
    this.data_source.paginator = this.paginator;
    this.data_source.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data_source.filter = filterValue.trim().toLowerCase();
  }

  toRoute(route: string){
    this.router.navigateByUrl(route);
  }

  bloquear(data_block: any){
    let mes_block = data_block.split("/")[0]
    let ano_block = data_block.split("/")[1]
    this.http.get(`http://localhost:8000/bloquear?mes_block=${mes_block}&ano_block=${ano_block}`).subscribe((data)=>{
      console.log(data)
      window.location.reload()
    });
  }
  
  importar(data_block: any){
    let mes_block = data_block.split("/")[0]
    let ano_block = data_block.split("/")[1]
    this.http.post(`http://localhost:8000/respostas_pgrs`, {}).subscribe((data)=>{
      console.log(data)
      window.location.reload()
    });
  }

  show_pdf(id: number){
    this.router.navigateByUrl('relatorio-pgrs/'+ id)
  }
}