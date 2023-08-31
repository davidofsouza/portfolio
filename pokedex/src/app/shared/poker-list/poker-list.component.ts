import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poker-api.service';

@Component({
  selector: 'poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.scss']
})
export class PokerListComponent implements OnInit {
  public getAllPokemons : any;
  private setAllPokemons : any;

  public apiError: boolean = false;


  constructor(private pokerApi:PokeApiService){}

    ngOnInit(): void {
      this.pokerApi.apiListAllPokemons.subscribe(
        res =>{
          this.setAllPokemons = res.results
          this.getAllPokemons = this.setAllPokemons
        },
        error =>{
          this.apiError
        }
      )
    }

    public getSearch(value: string){
      const filter = this.setAllPokemons.filter((res:any)=>{
        return !res.name.indexOf(value.toLowerCase())
      })

      this.getAllPokemons = filter
    }
}
