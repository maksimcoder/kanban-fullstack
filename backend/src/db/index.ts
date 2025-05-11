import pgPromise from "pg-promise";
// import {Diagnostics} from './diagnostics'; // optional diagnostics
import {IInitOptions, IDatabase, IMain} from 'pg-promise';
// ! Нужно указать конкретный путь до репозитория
import { BoardRepository } from "@/modules/board/repo";
import { ColumnRepository } from "@/modules/column/repo";

const dbConfig = {
    "host": "postgres",
    "port": 5432,
    "database": "admin",
    "user": "admin",
    'password': "admin"
}

interface IDatabaseExtensions {
    board: BoardRepository;
    column: ColumnRepository;
}

type ExtendedProtocol = IDatabase<IDatabaseExtensions> & IDatabaseExtensions;

// pg-promise initialization options:
const initOptions: IInitOptions<IDatabaseExtensions> = {
    // Extending the database protocol with our custom repositories;
    // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
    extend(obj: ExtendedProtocol, dc: any) {
        // Database Context (dc) is mainly needed for extending multiple databases with different access API.

        // Do not use 'require()' here, because this event occurs for every task and transaction being executed,
        // which should be as fast as possible.
        obj.board = new BoardRepository(obj, pgp);
        obj.column = new ColumnRepository(obj, pgp);
    }
};

// Initializing the library:
const pgp: IMain = pgPromise(initOptions);

// Creating the database instance with extensions:
const db: ExtendedProtocol = pgp(dbConfig);

// Initializing optional diagnostics:
// Diagnostics.init(initOptions);

// Alternatively, you can get access to pgp via db.$config.pgp
// See: https://vitaly-t.github.io/pg-promise/Database.html#$config
export { db, pgp };