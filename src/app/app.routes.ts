import { Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';

export const routes: Routes = [
  {
    path: '', 
    component: CharacterListComponent 
  },
  {
    path: '**', 
    redirectTo: ''
  }
];