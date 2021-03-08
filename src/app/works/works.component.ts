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
  images: String[] = ["null", "assets/pongImg.png","assets/todoImg.png" ]
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
      this.repos[i].img = this.images[i]
      console.log(this.repos[i].img)

    }
    
  }
  public openNewTab(url: string) {
    window.open(url, '_blank');
  }

}
