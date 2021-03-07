import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  constructor(private httpClient: HttpClient) {

   }

   loadRepos = () =>{
    
    return this.httpClient.get('https://api.github.com/users/PatrickSys/repos?type=owner')
    .pipe(
      map((item:any) => item.filter(value => !value.fork))
      
    );
  }
}
