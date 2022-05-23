import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { VideoComponent } from './video/video.component';
import { SearchComponent } from './search/search.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { UnheroeComponent } from './unheroe/unheroe.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'video', component: VideoComponent},
  {path: 'filtrar', component: FiltrarComponent},

  {path: 'heroe/:id', component: UnheroeComponent},
  {path: 'buscador/:nombreh', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }