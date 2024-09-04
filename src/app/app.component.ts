import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'AngIntro';
  parentMessage: string = 'Message changed'
  fromChildOuput: string=''
  @ViewChild(PostComponent) childComp!: PostComponent;

  constructor(){
    console.log(this.childComp)
  }
  ngAfterViewInit(): void {
      console.log(this.childComp)
      this.message=this.childComp.childMessage
  }
  receiveMessage($event:string){
     this.fromChildOuput=$event
  }
  message: string='message from the typescript component file';
  imgUrl:string='https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?cs=srgb&dl=pexels-didsss-3844788.jpg&fm=jpg'
  bool:boolean=false;
 
  buttonClick(){
    console.log('button clicked')
  }

   
  onKeyUp() {
    console.log(this.textValue)
  }
  textValue:string="value is coming from componenet"
  }