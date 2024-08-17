import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListeComponent } from './components/list/list-app.component';



@NgModule({
  declarations: [HomePageComponent,SearchBoxComponent,ListeComponent],
  imports: [
    CommonModule
  ], exports: [HomePageComponent,SearchBoxComponent,ListeComponent]
})
export class GifsModule { }
