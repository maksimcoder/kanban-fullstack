import { IDatabase, IMain } from "pg-promise";
import { IColumn } from "../model";
import { columnQueriesSQL as sql } from "@/db/sql";
import { IResult } from "pg-promise/typescript/pg-subset";

interface IAddParams {
    name: string; 
    boardId: number; 
    columnColor: string
}

export interface IColumnRepositoryModel {
    create(): Promise<null>;
    all(): Promise<IColumn[]>;
    add(params: IAddParams): Promise<IColumn>;
    removeById(id: number): Promise<number>;
    findById(id: number): Promise<IColumn | null>;
    total(): Promise<number>;
}

export class ColumnRepository implements IColumnRepositoryModel {
    constructor (private db: IDatabase<any>, private pgp: IMain) {}

    // add new table of columns in db
    create(): Promise<null> {
        return this.db.none(sql.create)
    }

    // get all columns from db
    all(): Promise<IColumn[]> {
        return this.db.any(sql.all);
    }

    // add new column in db
    add(params: IAddParams): Promise<IColumn> {
        const { name, boardId, columnColor } = params;
        return this.db.one(sql.add, [name, boardId, columnColor] );
    }

    // try to delete column by id from db
    removeById(id: number): Promise<number> {
        return this.db.result(sql.removeById, +id, (r: IResult) => r.rowCount);
    }

    // try to find column in db
    findById(id: number): Promise<IColumn | null> {
        return this.db.oneOrNone(sql.findById, +id);
    }

    // gets number of all columns in db
    total(): Promise<number> {
        return this.db.one(sql.total, [], (a: { count: string }) => +a.count);
    }
}