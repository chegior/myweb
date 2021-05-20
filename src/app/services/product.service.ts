import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../common/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  getProducts(): Observable<Product[]> {
    //const urlProduct = 'http://localhost:8080/api/products';
    return this.getBaseProduct(environment.uriProducts);
  }

  getProductsByCategory(id: number): Observable<Product[]> {
    const urlFiltro = environment.uriProductsCategory + id;
    return this.getBaseProduct(urlFiltro);
  }

  getBaseProduct(url: string): Observable<Product[]> {
    return this.httpClient
      .get<getResponseProducts>(url)
      .pipe(map((res) => res._embedded.products));
  }
}

interface getResponseProducts {
  _embedded: {
    products: Product[];
  };
}
