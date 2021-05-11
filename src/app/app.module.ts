import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './state/books.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { collectionReducer } from './state/collection.renderer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/books.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CreateBookComponent } from './create-book/create-book.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { reducers, metaReducers } from './reducers';
import { BookContainerComponent } from './container/book-container/book-container.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: BookContainerComponent },
  { path: 'calendar', component: AngularCalendarComponent },
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];
@NgModule({
  declarations: [	
    BookContainerComponent,
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    CreateBookComponent,
    AngularCalendarComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
    // StoreModule.forRoot({books: bookReducer, collection: collectionReducer}),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
