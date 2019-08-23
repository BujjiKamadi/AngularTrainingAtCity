import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsDemoModule} from './forms-demo/forms-demo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesDemoModule } from './services-demo/services-demo.module';
import { ServicesModule } from './services/services.module';
// import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterDemoModule } from './router-demo/router-demo.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RxjsModule } from './rxjs/rxjs.module';
import { SpyOnComponent } from './spy-on/spy-on.component';
import { HttpMethodsService } from './services/http-methods.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
    SpyOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ServicesDemoModule,
    ServicesModule,
    RxjsModule,
    // DirectivesModule,
    PipesModule,
    RouterDemoModule,
    BrowserAnimationsModule,
    FormsDemoModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
