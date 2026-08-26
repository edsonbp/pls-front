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

export interface Indicador {
  id: string;
  indicador: string;
  tipo_id: string;
  unidade_medida: string,
  grupo: string,
  periodicidade: string,
  pls_jud: string,
  definicao: string,
  responsaveis: string,
  ativo: number
}

@Component({
  selector: 'app-indicadores-list',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,  MatCardModule,
            MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './indicadores-list.html',
  styleUrl: './indicadores-list.css',
})
export class IndicadoresList implements AfterViewInit{
    private http = inject(HttpClient);
    private ref = inject(ChangeDetectorRef)	
    protected readonly title = signal('pls-front');
    columns = ['id', 'indicador', 'unidade_medida', 'grupo', 'periodicidade', 'ativo', ]
    data_source = new MatTableDataSource<Indicador>()
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
  constructor(private router: Router){
    this.http.get('http://localhost:8000/indicadores/').subscribe((data:any)=>{
      this.data_source.data = data
      console.log(data)
      // this.ref.detectChanges()
    })
  }
  
  ngOnInit(): void {
    
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

  importarIndicadores(){
    this.http.post('http://localhost:8000/indicadores/', 'indicadores').subscribe(()=>{
      window.location.reload()
    })
  }

  toRoute(route: string){
    this.router.navigateByUrl(route);
  }
}
