import { Injectable } from '@angular/core';
// import * as SQL from 'sql.js';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  // private db: SQL.Database | null = null;

  // constructor() {
  //   this.initializeDatabase();
  // }

  // private initializeDatabase(): void {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'src/db/definelabs.db', true);
  //   xhr.responseType = 'arraybuffer';
  //   xhr.onload = (e) => {
  //     const uInt8Array = new Uint8Array(xhr.response);

  //     (SQL as any).init().then(() => {
  //       // Database initialization logic
  //       this.db = new (SQL as any).Database(uInt8Array);
  //     });
  //   };
  //   xhr.send();
  // }
  

  // private withDB<T>(callback: (db: SQL.Database) => T): Promise<T> {
  //   return new Promise((resolve, reject) => {
  //     if (this.db) {
  //       resolve(callback(this.db));
  //     } else {
  //       reject('Database is not initialized');
  //     }
  //   });
  // }

  

  // createItem(matchedid: string, name: string): Promise<void> {
  //   return this.withDB(db => {
  //     const query = `INSERT INTO matchedresult (matchedid, name) VALUES ('${matchedid}', '${name}')`;
  //     db.exec(query);
  //   });
  // }

  // getItems(): Promise<any[]> {
  //   return this.withDB(db => {
  //     const query = `SELECT * FROM matchedresult`;
  //     const result = db.exec(query);
  //     if (result.length > 0) {
  //       return result[0].values;
  //     }
  //     return [];
  //   });
  // }

  // updateItem(id: number, name: string, matchedid: string): Promise<void> {
  //   return this.withDB(db => {
  //     const query = `UPDATE matchedresult SET name = '${name}', matchedid = '${matchedid}' WHERE id = ${id}`;
  //     db.exec(query);
  //   });
  // }

  // deleteItem(id: number): Promise<void> {
  //   return this.withDB(db => {
  //     const query = `DELETE FROM matchedresult WHERE id = ${id}`;
  //     db.exec(query);
  //   });
  // }
}
