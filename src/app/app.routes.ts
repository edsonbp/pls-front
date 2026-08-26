import { Routes } from '@angular/router';
import { AreaList } from './components/area-list/area-list';
import { Home } from './components/home/home';
import { AreaForm } from './components/area-form/area-form';
import { RespostasList } from './components/respostas-list/respostas-list';
import { RespostasListBd } from './components/respostas-list-bd/respostas-list-bd';
import { IndicadoresList } from './components/indicadores-list/indicadores-list';
import { PgrsList } from './components/pgrs-list/pgrs-list';
import { PrediosList } from './components/predios-list/predios-list';
import { RelatorioPgrs } from './components/relatorio-pgrs/relatorio-pgrs';
import { PgrsPdf } from './components/pgrs-pdf/pgrs-pdf';
import { RelatorioPlsCnj } from './components/relatorio-pls-cnj/relatorio-pls-cnj';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'area-list', component: AreaList,},
    {path: 'indicadores-list', component: IndicadoresList,},
    {path: 'area-form', component: AreaForm,},
    {path: 'respostas-list', component: RespostasList,},
    {path: 'respostas-list-bd', component: RespostasListBd,},
    {path: 'pgrs-list', component: PgrsList,},
    {path: 'predios-list', component: PrediosList,},
    {path: 'relatorio-pgrs/:id', component: RelatorioPgrs,},
    {path: 'pdf-pgrs/:id', component: PgrsPdf,},
    {path: 'relatorio-pls', component: RelatorioPlsCnj,},
];
