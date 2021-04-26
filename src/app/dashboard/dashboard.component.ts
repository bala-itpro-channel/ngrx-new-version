import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../state/app.model';
import { AppState } from '../state/app.state';
import { selectBookCollection, selectBooks } from '../state/books.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public books$: Observable<any>;
  public bookCollection$: Observable<any>;
  public appState: any;
  public appStateFormatter: string;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.books$ = this.store.pipe(
      select(selectBooks)
    );

    this.store.subscribe((data) => {
      this.appState = data;
      console.log('------------------------');
      console.log(data);
      console.log('------------------------');

      this.appStateFormatter = JSON.stringify(data, undefined, 4);
    })

    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
  }
}
