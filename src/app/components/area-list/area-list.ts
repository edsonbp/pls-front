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

export interface Area {
  id: string;
  sigla: string;
  area: string;
  superior: string,
  email: string,
  pls: string,
  link: string
}

@Component({
  selector: 'app-area-list',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,  MatCardModule,
            MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './area-list.html',
  styleUrl: './area-list.css',
})
export class AreaList implements AfterViewInit{
    private http = inject(HttpClient);
    private ref = inject(ChangeDetectorRef)	
    protected readonly title = signal('pls-front');
    columns = ['id', 'sigla', 'nome', 'superior', 'email', 'pls', ]
    data_source = new MatTableDataSource<Area>()
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
  constructor(private router: Router){
    this.http.get('http://localhost:8000/areas/').subscribe((data:any)=>{
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

  importarAreas(){
    this.http.post('http://localhost:8000/areas/', 'areas').subscribe(()=>{
      window.location.reload()
    })
  }

  toRoute(route: string){
    this.router.navigateByUrl(route);
  }
}
