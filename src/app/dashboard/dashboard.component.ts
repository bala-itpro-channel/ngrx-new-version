import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectBookCollection, selectBooks } from '../state/books.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public books$: Observable<any>;
  public bookCollection$: Observable<any>;
  public appState: any;
  public formattedData = '';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.books$ = this.store.pipe(
      select(selectBooks)
    );

    this.store.subscribe((data) => {
      this.appState = data;
      this.formattedData = JSON.stringify(this.appState, undefined, 4);
    });
    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
  }
}
