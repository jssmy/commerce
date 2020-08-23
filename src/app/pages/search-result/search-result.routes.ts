import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result.component';

const SearchResultRoutes: Routes = [
  {
    path: '',
    component: SearchResultComponent,
  }
];

export const SEARCH_RESULT_ROUTES = RouterModule.forChild(SearchResultRoutes);
