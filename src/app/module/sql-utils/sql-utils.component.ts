import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSharedModule } from '../../ui/page-shared/page-shared.module';
import { FormsModule } from '@angular/forms';
import { SqlUtilsService } from './service/sql-utils.service';
import { ModalService } from '../../ui/layout/service/modal.service';
import { ModalType } from '../../ui/layout/service/modal.api';

@Component({
  selector: 'app-sql-utils',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageSharedModule
  ],
  templateUrl: './sql-utils.component.html',
  styleUrls: ['./sql-utils.component.scss'],
  providers: [SqlUtilsService]
})
export class SqlUtilsComponent {

  json: string;
  output?: Array<string>;

  constructor(
    private sqlUtilsService: SqlUtilsService,
    private modalService: ModalService
  ) {
    const rawData = [{
      "id": 1,
      "name": "Jory",
      "role": "admin",
      "attributes": "email=jkindred0@techcrunch.com",
      "surname": "Kindred",
      "alias": "Jory",
      "age": 72
    },
    {
      "id": 2,
      "name": "Tymon",
      "role": "user",
      "attributes": "email=tsendall1@china.com.cn",
      "surname": "Sendall",
      "alias": "Tymon",
      "age": 86
    }];
    this.json = JSON.stringify(rawData, undefined, 4);
  }

  parseToSqlInsert(): void {
    try {
      this.output = undefined;
      const data = JSON.parse(this.json);
      // const data = this.sqlUtilsService.validateAndParseValues(this.json);
      this.output = this.sqlUtilsService.createInsert('A_TABLE_NAME', data);
    } catch (e) {
      this.modalService.modal('El JSON tiene formato inválido', { type: ModalType.ERROR});
    }

  }

}
