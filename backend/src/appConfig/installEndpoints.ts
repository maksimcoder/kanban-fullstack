import { app } from "@/app";
import { BoardEndpoints, boardRouter } from "@/modules/board";
import { ColumnEndpoints, columnRouter } from "@/modules/column";

export function installEndpoints() {
    console.log('\x1b[43m APP.Endpoints: Preparing app endpoints \x1b[0m');
    app.use(`/api/${BoardEndpoints.BASE}`, boardRouter);
    app.use(`/api/${ColumnEndpoints.BASE}`, columnRouter)
    console.log('\x1b[42m APP.Middleware: Successfuly installed app endpoints \x1b[0m');
}