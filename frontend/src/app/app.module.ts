import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './services/auth.service';
import { AvisService } from './services/avis.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AvisNewComponent } from './avis/avis-new/avis-new.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AvisModifyComponent } from './avis/avis-modify/avis-modify.component';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AvisTableComponent } from './avis/avis-list/avis-table.component';
import { EquipementListComponent } from './equipement/equipement-list/equipement-list.component';
import { EquipementNewComponent } from './equipement/equipement-new/equipement-new.component';
import { EquipementModifyComponent } from './equipement/equipement-modify/equipement-modify.component';
import { MatSelectModule } from '@angular/material/select';
import { LieuListComponent } from './lieu/lieu-list/lieu-list.component';
import { SiteNewComponent } from './lieu/site/site-new/site-new.component';
import { SiteModifyComponent } from './lieu/site/site-modify/site-modify.component';
import { SiteListComponent } from './lieu/site/site-list/site-list.component';
import { SecteurListComponent } from './lieu/secteur/secteur-list/secteur-list.component';
import { SecteurNewComponent } from './lieu/secteur/secteur-new/secteur-new.component';
import { SecteurModifyComponent } from './lieu/secteur/secteur-modify/secteur-modify.component';
import { AtelierListComponent } from './lieu/atelier/atelier-list/atelier-list.component';
import { AtelierNewComponent } from './lieu/atelier/atelier-new/atelier-new.component';
import { AtelierModifyComponent } from './lieu/atelier/atelier-modify/atelier-modify.component';

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'avis/newAvis', component: AvisNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvisNewComponent,
    SignupComponent,
    SigninComponent,
    AvisModifyComponent,
    AvisTableComponent,
    EquipementListComponent,
    EquipementNewComponent,
    EquipementModifyComponent,
    LieuListComponent,
    SiteNewComponent,
    SiteModifyComponent,
    SiteListComponent,
    SecteurListComponent,
    SecteurNewComponent,
    SecteurModifyComponent,
    AtelierListComponent,
    AtelierNewComponent,
    AtelierModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    // , RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AvisService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
