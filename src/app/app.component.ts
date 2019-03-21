import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title : "test1",
      content : "lorem",
      loveIts : 2,
      created_at : new Date()
    },
    {
      title: "test2",
      content : "lorem",
      loveIts : 2,
      created_at : new Date()
    }
  ]
}
