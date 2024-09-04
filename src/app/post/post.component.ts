import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  title:string="List of Posts"
  messagePost: string = "Message Post "
  postParentMessage: string = "Message coming from the post parent"

  childMessage: string = 'From Child component'
  outputChildMessage: string = 'messaeg from child component via ouput'
 
  @Input() fromParent : string='';
  @Output() messageEvent = new EventEmitter<string>()
  sendMessage(){
    console.log('click')
    this.messageEvent.emit(this.outputChildMessage)
  }


}
