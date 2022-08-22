import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"
import {lastValueFrom, Observable} from "rxjs"
import { environment } from 'src/environments/environment';
import { Producto, ResponseProducto } from 'src/interfaces/Productos';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }
  getAll():Observable<Producto[]>{
    return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=ipod").pipe(map((value:ResponseProducto)=>value.results))
  }
  getAllPromise(){
    //return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").pipe(map((value:any)=>value["results"])).toPromise()
    return lastValueFrom(this.http.get(environment.apiEndpoint+"sites/MLA/search?q=ipod").pipe(map((value:any)=>value["results"])))
  }
  getById(id:any):Promise<Producto>{
    return lastValueFrom(this.http.get<Producto>(environment.apiEndpoint+"items/"+id))
  }
  create(body:any){
    return this.http.post(environment.apiEndpoint+"sites/MLA/search?q=ipod",body)
  }
  update(body:any){
    return this.http.put(environment.apiEndpoint+"sites/MLA/search?q=ipod",body)
  }
  delete(){
    return this.http.delete(environment.apiEndpoint+"sites/MLA/search?q=ipod")
  }
}