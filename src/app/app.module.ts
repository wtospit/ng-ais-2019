import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/edit/edit.component';
import { TokenService } from './interceptors/token.service';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlbumComponent,
    PhotoComponent,
    PhotoDetailComponent,
    LoginComponent,
    AdminComponent,
    EditComponent,
    BnkSuffixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
