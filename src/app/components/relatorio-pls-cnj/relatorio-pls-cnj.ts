import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, viewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

export interface Meses{
  ind: number,
  mes: string,
}

export interface Respostas{
  id: number,
  indicador_id: number,
  total: number,
  grupo: string
}

@Component({
  selector: 'app-relatorio-pls-cnj',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule,
            MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule,
            MatDatepickerModule,],
  templateUrl: './relatorio-pls-cnj.html',
  styleUrl: './relatorio-pls-cnj.css',
})
export class RelatorioPlsCnj implements OnInit{
    accordion = viewChild.required(MatAccordion)
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

    ano_inicial: number = 2023
    ano_atual: number
    anos: number[] = []

    formSelect: FormGroup

    indicadores: any[]=[]
    variaveis_gerais: any[]=[]
    papel: any[]=[]
    copos_descartaveis: any[]=[]
    agua_envasada: any[]=[]
    impressao: any[]=[]
    energia_eletrica: any[]=[]
    agua_esgoto: any[]=[]
    gestao_residuos: any[]=[]
    reformas_constucoes: any[]=[]
    limpeza: any[]=[]
    vigilancia: any[]=[]
    telefonia: any[]=[]
    veiculos: any[]=[]
    combustivel: any[]=[]
    apoio_administrativo: any[]=[]
    aquisicoes_contratacoes: any[]=[]
    qualidade_vida: any[]=[]
    capacitacao_sustentabilidade: any[]=[]
    equidade_diversidade: any[]=[]
    carbono_zero: any[]=[]
    outros: any[]=[]
    novas_tecnologias: any[]=[]
    
    respostas: any[]=[]

    constructor(private form: FormBuilder, private http: HttpClient){
      this.formSelect = this.form.group({
        mes: ['', Validators.required],
        ano: ['', Validators.required],
        teste: [''],
      })
    }

    ngOnInit(): void {
      // this.accordion()
      this.ano_atual = new Date().getFullYear()
      for(let i = this.ano_inicial; i <= this.ano_atual; i++){
        this.anos.push(i)
      }
      this.http.get('http://localhost:8000/indicadores').subscribe((data:any)=>{
        this.indicadores = data
        this.add_total(this.indicadores)
        let lista: Respostas[] = this.add_total(this.indicadores)
        this.set_parciais(lista)
        this.variaveis_gerais = lista.filter(i => i.grupo === '1. Variáveis Gerais')
        // console.log(this.indicadores)
        // console.log(this.variaveis_gerais)
      })


      const produtos = [
        {id: 1, nome: 'Caderno', ativo: true },
        { id: 2, nome: 'Caneta', ativo: false },
        { id: 3, nome: 'Lápis', ativo: true }
      ];

      const ativos = produtos.filter(produto => produto.ativo === true);

      console.log(ativos);
    }

    set_parciais(lista:Respostas[]){
      this.variaveis_gerais = lista.filter(i => i.grupo === '1. Variáveis Gerais')
      this.papel = lista.filter(i => i.grupo === '2. Papel')
      this.copos_descartaveis = lista.filter(i => i.grupo === '3. Copos Descartáveis')
      this.agua_envasada = lista.filter(i => i.grupo === '4. Água Envasada em Embalagem Plástica')
      this.impressao = lista.filter(i => i.grupo === '5. Impressão')
      this.energia_eletrica = lista.filter(i => i.grupo === '6. Energia Elétrica')
      this.agua_esgoto = lista.filter(i => i.grupo === '7. Água e Esgoto')
      this.gestao_residuos = lista.filter(i => i.grupo === '8. Gestão de Resíduos')
      this.reformas_constucoes = lista.filter(i => i.grupo === '9. Reformas e Construções')
      this.limpeza = lista.filter(i => i.grupo === '10. Limpeza')
      this.vigilancia = lista.filter(i => i.grupo === '11. Vigilância')
      this.telefonia = lista.filter(i => i.grupo === '12. Telefonia')
      this.veiculos = lista.filter(i => i.grupo === '13. Veículos')
      this.combustivel = lista.filter(i => i.grupo === '14. Combustível')
      this.apoio_administrativo = lista.filter(i => i.grupo === '15. Apoio ao Serviço Administrativo')
      this.aquisicoes_contratacoes = lista.filter(i => i.grupo === '16. Aquisições e Contratações')
      this.qualidade_vida = lista.filter(i => i.grupo === '17. Qualidade de Vida')
      this.carbono_zero = lista.filter(i => i.grupo === '20. Programa "Justiça Carbono Zero"')
      this.outros = lista.filter(i => i.grupo === null)
      this.novas_tecnologias = lista.filter(i => i.grupo === '21. Novas Tecnologias')
      console.log('papel', this.papel)
    }

    set_parcial(grupo: string, lista:any){

    }

    add_total(lista: any){
      (lista as Respostas[]).forEach(element => {
        element['total'] = Math.random()
      });
      return lista
    }

    set(campo:string, event: MatSelectChange){
      if(this.formSelect.valid){
        var mes =this.formSelect.controls['mes'].value
        var ano= this.formSelect.controls['ano'].value
        this.http.get(`http://localhost:8000/pls-respostas/${ano}/${mes}`).subscribe((data: any)=>{
          console.log('respostas:', data)
          this.respostas = data
        })
      }
    }

  step = signal(0);
  
  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }
  copy(id:any){
    let text = (document.getElementById(id) as HTMLInputElement).value
    navigator.clipboard.writeText(text)
    console.log((document.getElementById(id) as HTMLInputElement).value)
    this.formSelect.patchValue({
      teste: text
    })
  }


}
