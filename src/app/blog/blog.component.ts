import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  loveIts = "love it";
  dontLoveIts = "d'ont lve it";
  countLoveIts: number = 0;

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  constructor() { }

  ngOnInit() {
  }

  getLoveIts() {
    this.countLoveIts++;
  }

  getDontLoveIts() {
    this.countLoveIts--;
  }


}