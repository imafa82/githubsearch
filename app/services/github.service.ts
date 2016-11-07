import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '74f77e2e71c3aef4b617';
    private client_secret = '68bbdddc81fd60abe1d015c4fc69b900e474faa9';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'imafa82';
    }

    getUser(){
         return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepose(){
         return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    updateUser(username:string){
        this.username = username;
    }
}
