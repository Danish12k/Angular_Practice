import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './welcome.pipe';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,FormsModule,WelcomePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
_msg:string ="";

  constructor(private _messageservice:MessageService){
   //this._msg=  _messageservice.getMessage();
  }
  GetMessage(){

    return this._msg = this._messageservice.getMessage();
  }

  

  // title = 'name_app';
  // name ='Danish';
  // imgPath="assets/Images/aman.jpg";

  // isDisplay:boolean=true;
  // isBold="bold";
  // fontSize = 20;
  // Message ="Hello WOrld!";
  // ChangeButton(){
  //   this.isDisplay= !this.isDisplay;
  // }

  // keyupfun(val:any){
  //   this.Message =val;
  // }

}
