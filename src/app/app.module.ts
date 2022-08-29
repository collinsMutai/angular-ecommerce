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
import { SharedModule } from './shared/shared.module';
import { BrowseranimationComponent } from './browseranimation/browseranimation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';

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
    BrowseranimationComponent,
    ObservablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingmodule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
