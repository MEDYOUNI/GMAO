import { Component, OnInit, OnDestroy } from '@angular/core';
import { Site } from 'src/app/models/site.model';
import { Subscription } from 'rxjs';
import { LieuService } from 'src/app/services/lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit, OnDestroy {

  site: Site[];
  loading = false;
  siteSubscription: Subscription;
  displayedColumns: string[] = ['etat', 'nom', 'description', 'actions'];
  dataSource: Site[];

  constructor(private lieuService: LieuService,
              private router: Router) { }

  ngOnDestroy(): void {
    this.siteSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    this.siteSubscription = this.lieuService.siteSubject.subscribe(
      (site: Site[]) => {
        this.dataSource = site;
        this.loading = false;
      }
    );
    this.lieuService.getSite();
    this.lieuService.emitSite();
  }
  onViewSite(site: Site) {
    console.log(site._id);
    this.router.navigate(['lieuList/siteList/siteModify/' + site._id]);
  }
  onCreateNewSite() {
    this.router.navigate(['lieuList/siteList/', 'siteNew']);
  }
  onDeleteSite(site: Site) {
    this.lieuService.removeSite(site);
  }
}
