import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReversePipe } from './pipes/Reverse';
import { SampleDirective } from './Sample.directive';
import { JituifDirective } from './jituif.directive';
import { HomeComponent } from './home/home.component';
import { EmptyComponent } from './products/empty/empty.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingmodule } from './appRoutingModule';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReversePipe,
    SampleDirective,
    JituifDirective,
    HomeComponent,
    EmptyComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, ProductsModule,AppRoutingmodule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
