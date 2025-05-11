import { db } from "@/db";

function tableInitFabric<T>(callback: () => Promise<any>, db: T) {
    return new Promise((resolve, reject) => {
        const result = callback.call(db);
        resolve(result);
    });
}

const dbTableInitCallbacks = [
    tableInitFabric(db.board.create, db.board),
    tableInitFabric(db.column.create, db.column),
];

export async function installDBTables() {
    console.log('\x1b[43m DB.Tables: Preparing DB tables \x1b[0m');
    try {
        await Promise.all(dbTableInitCallbacks)

        console.log('\x1b[42m DB.Tables: Successfuly installed DB tables \x1b[0m');
    } catch (error) {
        console.error(error);
        return;
    }
}