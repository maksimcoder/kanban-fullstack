import { IDatabase, IMain } from 'pg-promise';
import { IResult } from 'pg-promise/typescript/pg-subset';
import { IBoard } from '@/modules/board/model';
import { boardQueriesSQL as sql } from '../../../db/sql';

export interface IBoardRepositoryModel {
    create(): Promise<null>;
    all(): Promise<IBoard[]>;
    add(name: string): Promise<IBoard>;
    removeById(id: number): Promise<number>;
    findById(id: number): Promise<IBoard | null>;
    total(): Promise<number>;
}

export class BoardRepository implements IBoardRepositoryModel {
    constructor(private db: IDatabase<any>, private pgp: IMain) {
    }

    // create new boards db table 
    create(): Promise<null> {
        return this.db.none(sql.create);
    }

    // get all boards from db
    all(): Promise<IBoard[]> {
        return this.db.any(sql.all);
    }

    // add new board to db
    add(name: string): Promise<IBoard> {
        return this.db.one(sql.add, name);
    }

    // try to remove board by id from db
    removeById(id: number): Promise<number> {
        return this.db.result(sql.removeById, +id, (r: IResult) => r.rowCount);
    }

    // try to find board by id from db
    findById(id: number): Promise<IBoard | null> {
        return this.db.oneOrNone(sql.findById, +id);
    }

    // get amount of boards in db
    total(): Promise<number> {
        return this.db.one(sql.total, [], (a: { count: string }) => +a.count);
    }
}