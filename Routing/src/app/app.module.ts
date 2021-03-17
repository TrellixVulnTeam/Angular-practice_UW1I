import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {
    path: 'product', component : ProductComponent
  },
  {
    path: 'dashboard', redirectTo: '', pathMatch:'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
