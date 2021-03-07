import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle: ElementRef;
  links:Array<LinkModel>= [
    

    {

      link:'mailto:rossellocolompatrick@gmail.com',
      icon:'<i class="uil uil-envelope"></i>'
    },
    {

      link:'https://www.linkedin.com/in/patrick-rossello-colom/',
      icon:'<i class="uil uil-linkedin-alt "></i>'
    },
    {

      link:'https://github.com/PatrickSys',
      icon:'<i class="uil uil-github-alt"></i>'
    }

  ];
  constructor() { }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  ngOnInit(): void {
  }

  initEffect = () => {
    
    const target = this.asTitle.nativeElement;
    
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'rgb(41, 19, 19);'
    });
    
    writer
      .changeCursorColor('color: rgb(41, 19, 19)')
      .type('Patrick Rosselló')
      .rest(50000)
      .start();
              
};
}

class LinkModel{
  link: string;
  icon: string;
}