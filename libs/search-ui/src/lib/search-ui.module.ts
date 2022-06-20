import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';


@NgModule({
  imports: [CommonModule,NgxBootstrapIconsModule.pick(allIcons)],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchUiModule {}
