import { Injectable } from '@angular/core';
import { SqlValue, SqlValueMap } from '../sql-utils.api';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';

function jsonValidator(control: AbstractControl): ValidationErrors | null {
  let result: ValidationErrors | null = null;
  const value = control.value;
  if (value && typeof (value) === 'string') {
    try {
      JSON.parse(value);
    } catch (e) {
      result = { 'json': true };
    }
  }
  return result;
}

@Injectable()
export class SqlUtilsService {

  constructor() { }

  formControl(): FormControl<string> {
    return new FormControl(JSON.stringify(
      [{
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
      }]
      , undefined, 4),
      {
        nonNullable: true,
        validators: [
          Validators.required,
          jsonValidator
        ],
        updateOn: 'blur' // Since this could be a heavy validation => updateOn blur
      });
  }

  createInsert(tableName: string, columnValues: Array<SqlValueMap>): Array<string> {
    const result: Array<string> = [];
    for (const item of columnValues) {
      var sql = 'INSERT INTO ' + tableName + ' (';
      var values = '(';

      var keyList = Object.keys(item);

      const limit = keyList.length - 1;
      for (var i = 0; i < keyList.length; i++) {
        const currentKey = keyList[i];

        sql += currentKey;
        values += this.parseValue(item[currentKey]);

        if (i < limit) {
          sql += ',';
          values += ',';
        } else {
          sql += ')';
          values += ');';
        }
      }

      result.push(`${sql} VALUES ${values}`);
    }
    return result;
  }

  private parseValue(value: SqlValue): string {
    if (value === null || value === undefined) {
      return 'null';
    }
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return `${value}`;
  }
}
