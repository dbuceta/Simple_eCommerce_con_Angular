import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/interfaces/Productos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[]=[]
  
  constructor(
    private productosService:ProductosService
  ) { 
    this.productosService.getAll()
    .subscribe({
      next:(data:Producto[])=>{
        console.log(data)
        this.productos = data
      },
      error:error=>{}
    })

  }
  ngOnInit(): void {
  }

}