import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SqlUtilsService } from './service/sql-utils.service';
import { ModalService, ModalType, PageSharedModule } from 'jgt-layout';

@Component({
  selector: 'app-sql-utils',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageSharedModule
  ],
  templateUrl: './sql-utils.component.html',
  styleUrls: ['./sql-utils.component.scss'],
  providers: [SqlUtilsService]
})
export class SqlUtilsComponent {

  json = this.sqlUtilsService.formControl();
  output?: Array<string>;

  constructor(
    private sqlUtilsService: SqlUtilsService,
    private modalService: ModalService
  ) { }

  parseToSqlInsert(): void {
    if (this.json.valid) {

      try {
        this.output = undefined;
        const data = JSON.parse(this.json.value);
        // const data = this.sqlUtilsService.validateAndParseValues(this.json);
        this.output = this.sqlUtilsService.createInsert('A_TABLE_NAME', data);
      } catch (e) {
        // Since we are validating the json format, this will never happen, another just-in-case
        this.modalService.modal('El JSON tiene formato inválido', { type: ModalType.ERROR });
      }
    }

  }

}
