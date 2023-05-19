import { Injectable } from '@angular/core';
import { SqlValue, SqlValueMap } from '../sql-utils.api';

@Injectable()
export class SqlUtilsService {

  constructor() { }

  createInsert(tableName: string, columnValues: Array<SqlValueMap>): Array<string> {
    const result: Array<string> = [];
    for (const item of columnValues) {
      var sql = 'INSERT INTO ' + tableName + ' (';
      var values = '(';

      var keyList = Object.keys(item);

      const limit = keyList.length - 1;
      for (var i = 0 ; i < keyList.length; i ++) {
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
    if (value === null || value === undefined){
      return 'null';
    }
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return `${value}`;
  }
}
