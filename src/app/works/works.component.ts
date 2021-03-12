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
  previews: String[] = ["null", "assets/pongPreview.mp4","assets/todoPreview.mp4" ]
  expandedImg: false;

  constructor(private gitHubService: GithubService) { 
   

  }

  ngOnInit(): void {
    this.gitHubService.loadRepos().subscribe(res=>{
      this.repos = res;
      this.addImg();
    })

  }

  addImg(): void{

    for (let i=0; i<this.repos.length; i++){
      this.repos[i].preview = this.previews[i]
      console.log(this.repos[i].preview)

    }
    
  }



  playVideo(event) {
    event.toElement.play()
 }
}
