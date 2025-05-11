import { QueryFile } from "pg-promise";
import { sqlFilePathUtil } from "../sqlFilePathUtil";
import { IBoardRepositoryModel } from "@/modules/board/repo";

export const boardQueriesSQL: Record<keyof IBoardRepositoryModel, QueryFile> = {
    create: sqlFilePathUtil('./board/create.sql'),
    all: sqlFilePathUtil('./board/all.sql'),
    add: sqlFilePathUtil('./board/add.sql'),
    findById: sqlFilePathUtil('./board/findById.sql'),
    removeById: sqlFilePathUtil('./board/removeById.sql'),
    total: sqlFilePathUtil('./board/total.sql')
}