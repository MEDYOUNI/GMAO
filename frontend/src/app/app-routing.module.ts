import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AvisNewComponent } from './avis/avis-new/avis-new.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AvisModifyComponent } from './avis/avis-modify/avis-modify.component';
import { AvisTableComponent } from './avis/avis-list/avis-table.component';
import { EquipementListComponent } from './equipement/equipement-list/equipement-list.component';
import { EquipementNewComponent } from './equipement/equipement-new/equipement-new.component';
import { EquipementModifyComponent } from './equipement/equipement-modify/equipement-modify.component';
import { LieuListComponent } from './lieu/lieu-list/lieu-list.component';
import { SiteListComponent } from './lieu/site/site-list/site-list.component';
import { SiteNewComponent } from './lieu/site/site-new/site-new.component';
import { SiteModifyComponent } from './lieu/site/site-modify/site-modify.component';
import { SecteurListComponent } from './lieu/secteur/secteur-list/secteur-list.component';
import { SecteurNewComponent } from './lieu/secteur/secteur-new/secteur-new.component';
import { SecteurModifyComponent } from './lieu/secteur/secteur-modify/secteur-modify.component';
import { AtelierModifyComponent } from './lieu/atelier/atelier-modify/atelier-modify.component';
import { AtelierNewComponent } from './lieu/atelier/atelier-new/atelier-new.component';
import { AtelierListComponent } from './lieu/atelier/atelier-list/atelier-list.component';

const routes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},

  {path: 'avisTable', component: AvisTableComponent},
  {path: 'avis/newAvis', canActivate: [AuthGuardService], component: AvisNewComponent},
  {path: 'avis/avisModify/:id', canActivate: [AuthGuardService], component: AvisModifyComponent},

  {path: 'equipementList', component: EquipementListComponent},
  {path: 'equipement/equipementNew', canActivate: [AuthGuardService], component: EquipementNewComponent},
  {path: 'equipement/equipementModify/:id', canActivate: [AuthGuardService], component: EquipementModifyComponent},

  {path: 'lieuList', component: LieuListComponent},

  {path: 'lieuList/siteList', component: SiteListComponent},
  {path: 'lieuList/siteList/siteNew', component: SiteNewComponent},
  {path: 'lieuList/siteList/siteModify/:id', component: SiteModifyComponent},


  {path: 'lieuList/secteurList', component: SecteurListComponent},
  {path: 'lieuList/secteurList/secteurNew', component: SecteurNewComponent},
  {path: 'lieuList/secteurList/secteurModify/:id', component: SecteurModifyComponent},
  
  {path: 'lieuList/atelierList', component: AtelierListComponent},
  {path: 'lieuList/atelierList/atelierNew', component: AtelierNewComponent},
  {path: 'lieuList/atelierList/atelierModify/:id', component: AtelierModifyComponent},

  {path: '', redirectTo: 'avis', pathMatch: 'full'},
  {path: '**', redirectTo: 'avis'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
