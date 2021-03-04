import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../api.service';
import {AuthenticationService} from '../../../auth/authentication.service';
import {MessageService} from '../../../message.service';
import {HttpParams} from '@angular/common/http';
import {DisplayOngekiProfile} from '../model/OngekiProfile';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {OngekiCard} from '../model/OngekiCard';
import {OngekiCharacter} from '../model/OngekiCharacter';

@Component({
  selector: 'app-ongeki-profile',
  templateUrl: './ongeki-profile.component.html',
  styleUrls: ['./ongeki-profile.component.css']
})
export class OngekiProfileComponent implements OnInit {

  profile: DisplayOngekiProfile;

  constructor(
    private api: ApiService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private dbService: NgxIndexedDBService
  ) {
  }

  ngOnInit() {
    const aimeId = String(this.auth.currentUserValue.extId);
    const param = new HttpParams().set('aimeId', aimeId);
    this.api.get('api/game/ongeki/profile', param).subscribe(
      data => {
        this.profile = data;
        this.dbService.getByID<OngekiCard>('ongekiCard', this.profile.cardId).then(
          x => this.profile.card = x
        );
        this.dbService.getByID<OngekiCharacter>('ongekiCharacter', this.profile.characterId).then(
          x => this.profile.character = x
        );
      },
      error => this.messageService.notice(error)
    );
  }

}
