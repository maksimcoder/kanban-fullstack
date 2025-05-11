interface IColumnBase {
    name: string;
    boardId: number;
    columnColor: string;
}

export interface IColumn extends IColumnBase {
    id: number;
}

export type IColumnDTO = IColumnBase;