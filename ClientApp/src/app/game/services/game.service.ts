import { BaseApiOutput } from './../../core/models/output/base-api-output';
import { Md5 } from 'ts-md5';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiRequestsService } from 'src/app/core/services/api/base-api-requests.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { Game } from '../models/output/game';
import { GameFiltersInput } from '../models/input/employee-list-input';
import { GameListOutput } from '../models/output/game-list-output';
import { GameReportOutput } from '../models/output/game-report-output';

@Injectable({ providedIn: 'root' })
export class GameService extends BaseApiRequestsService {
  constructor(
    protected session: SessionService,
    protected http: HttpClient
  ) {
    super(session, http);
    this.baseUrl = 'Game/';
  }

  private baseUrl: string;

  finishGame = async (input: Game): Promise<BaseApiOutput> => await this.post(this.baseUrl + 'finish-game', input);

  getList = async (input: GameFiltersInput): Promise<GameListOutput> => await this.post(this.baseUrl + 'list', input);

  report = async (input: GameFiltersInput): Promise<GameReportOutput> => await this.post(this.baseUrl + 'report', input);

}
