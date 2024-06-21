import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './ui/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
    ngOnInit():void{
      this.fetchProduct()
    }
  
    productList:any = [];
    fetchProduct = async () => {
      try{
          let response = await fetch("https://dummyjson.com/products");
          let pList = await response.json()
          this.productList = pList.products;
          console.log(this.productList)
        
      }
      catch(err){
          console.log("Error is : ",err)
      }
    }
  
  
}
