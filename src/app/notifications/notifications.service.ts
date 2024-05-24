import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  messages: Subject<any>;

  constructor() {
    this.messages = new Subject<any>();
  }

  addSuccess(messages: string) {
    this.messages.next(messages);
  }

  addError(messages: string) {
    this.messages.next(messages);
  }

  clearMessage(id: number) {}
}
