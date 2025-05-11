import { QueryFile } from "pg-promise";
import { sqlFilePathUtil } from "../sqlFilePathUtil";
import { IColumnRepositoryModel } from "@/modules/column/repo";

export const columnQueriesSQL: Record<keyof IColumnRepositoryModel, QueryFile> = {
    create: sqlFilePathUtil('./column/create.sql'),
    all: sqlFilePathUtil('./column/all.sql'),
    add: sqlFilePathUtil('./column/add.sql'),
    findById: sqlFilePathUtil('./column/findById.sql'),
    removeById: sqlFilePathUtil('./column/removeById.sql'),
    total: sqlFilePathUtil('./column/total.sql')
}