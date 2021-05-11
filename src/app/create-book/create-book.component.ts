import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as Actions from './../state/books.actions'

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  creaeBook(event, bookName: string) {
    console.log('Create book', bookName);
    event.preventDefault();
    const bookPayload = {
      id: this.makeid(5),
      volumeInfo: {
        title: bookName,
        authors: ['Bala', 'Bala2']
      }
    };
    this.store.dispatch(Actions.createBook({ book: bookPayload }));
  }

  private makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }
}
