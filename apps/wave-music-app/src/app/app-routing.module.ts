import { MusicPlayerComponent } from './music-player/music-player.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play/:id',component: MusicPlayerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
