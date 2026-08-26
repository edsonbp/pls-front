import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAskFolder } from '../dialog-ask-folder/dialog-ask-folder';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'home-root',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,
    MatButtonModule, MatIconModule, FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  
})
export class Home{
  readonly dialog = inject(MatDialog);
  count_areas = 0
  count_respostas = 0
  dir_predios: string = 'C:\\SUSO\\planilhas_suso\\predios.xlsx'
  dir_areas: string = 'C:\\SUSO\\planilhas_suso\\areas_administrativas.xlsx'
  dir_indicadores: string = 'C:\\SUSO\\planilhas_suso\\IndicadoresPLS.xlsx'
  dir_respostas_pls: string = 'C:\\SUSO\\planilhas_suso\\PlanilhasParaPreenchimento'
  dir_pdf: string = 'C:\\SUSO\\planilhas_suso\\pgrs_pdfs'
  texto: string = "Questionário _Dados para o Plano Institucional de Gerenciamento de Resíduos Sólidos -PGRS"
  dir_respostas_pgrs: string = 'C:\\SUSO\\planilhas_suso\\'+this.texto
  private http = inject(HttpClient)
  private ref = inject(ChangeDetectorRef)
  areas = []
  respostas = []
  
  constructor(private router: Router){
  }
  
  ngOnInit(): void {
  }
  toRoute(route:string){
    this.router.navigateByUrl(route);    
  }
  loadDir(){
    this.dialog.open(DialogAskFolder)
  }
  // loadAreas(){
  //   this.http.get('http://localhost:8000/areas').subscribe((data:any)=>{
  //     this.areas = data
  //     this.count_areas = data.length
  //     this.ref.detectChanges()
  //   })   
  // }
  // loadRespostas(){
  //   this.http.get('http://localhost:8000/respostas').subscribe((data:any)=>{
  //     this.respostas = data
  //     this.count_respostas = data.length
  //     this.ref.detectChanges()
  //   })   
  // }
  // setAreas(){
  //   if(this.dir_areas){
  //     this.http.get(`http://localhost:8000/init?planilha=areas&planilha_path=${this.dir_areas}`).subscribe((data:any)=>{
  //       this.areas = data
  //       console.log(this.areas)
  //       this.count_areas = data.length
  //       this.ref.detectChanges()
  //     }) 
  //   }
  // }
  // setRespostas(){
  //   console.log('sdfsdfsdfsdfsda')
  //   if(this.dir_respostas){
  //     this.http.get(`http://localhost:8000/init?planilha=respostas&planilha_path=${this.dir_respostas}`).subscribe((data:any)=>{
  //       this.respostas = data
  //       console.log(this.respostas)
  //       this.count_respostas = data.length
  //       this.ref.detectChanges()
  //     }) 
  //   }
  // }
}
