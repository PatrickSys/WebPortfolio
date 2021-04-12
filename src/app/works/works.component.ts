import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  repos: any;
  config: any;
  expandedImg: false;

  constructor(private gitHubService: GithubService) { 
   

  }

  ngOnInit(): void {
    this.gitHubService.loadRepos().subscribe(res=>{
      this.repos = res;
      this.addPreviews();
    })

  }

  addPreviews(): void{

    for (let i=0; i<this.repos.length; i++){
      if (this.repos[i].name === "RetroPong"){
        this.repos[i].preview = "assets/pongPreview.mp4"
      }

      if (this.repos[i].name === "ToDo"){
        this.repos[i].preview = "assets/todoPreview.mp4"
      
      }
      

    } 
    
  }


  playVideo(event) {
    event.target.play()
 }
}
