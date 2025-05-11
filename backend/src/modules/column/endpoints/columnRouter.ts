import { IEndpointResponse } from "@/modules/types";
import { Router } from "express";

import { db } from "@/db";
import { IColumn, IColumnDTO } from "../model";

const columnRouter = Router();

columnRouter.get<{}, IEndpointResponse<IColumn[]>, {}>(
    '/',
    async (req, res, next) => {
        try {
            const data = await db.column.all();

            res.json({ data })
        } catch (error) {
            next(error);
        }
    }
);

columnRouter.post<{}, IEndpointResponse<IColumn>, IColumnDTO>(
    '/',
    async (req, res, next) => {
        try {
            const { name, boardId, columnColor } = req.body;
            // const data = await db.column.all();
            if (!name || !boardId || !columnColor) {
                res.json({
                    status: 400,
                    message: 'Some properties are missing'
                });
                next('Some properties are missing');
            }

            const data = await db.column.add({ name, boardId, columnColor })

            res.json({ data })
        } catch (error) {
            res.json({
                status: 502,
                message: error as any
            });
            next(error);
        }
    }
);

export { columnRouter };