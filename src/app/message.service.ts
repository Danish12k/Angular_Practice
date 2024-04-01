import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _Message:string="Welcome to My app.";
  constructor() { }
   
  getMessage(){
    return this._Message;
  }


}
