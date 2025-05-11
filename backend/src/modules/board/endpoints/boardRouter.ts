import { IBoard, IBoardDTO } from "@/modules/board/model";
import { Router } from "express";
import { db } from "@/db";
import { IEndpointResponse } from "@/modules/types";

const boardRouter = Router();

boardRouter.get<{}, IEndpointResponse<IBoard[]>, {}>(
    '/',
    async (req, res, next) => {
        try {
            const result = await db.board.all();
            res.json({
                data: result
            });
        } catch (error) {
            
        }
    }
)

boardRouter.post<{}, IEndpointResponse<IBoard>, IBoardDTO>(
    '/', 
    async (req, res, next) => {
        const boardName = req.body.name;

        if (!boardName) {
            res.json({
                status: 502,
                message: 'Board {name} is not defined'
            });
            next('Board {name} is not defined');
        }

        try {
            const { id, name } = await db.board.add(boardName);
            
            res.json({
                data: { id, name }
            });
        } catch (error) {
            res.json({
                status: 502,
                message: 'Somthing went wrong'
            });
            next(error);
        }
    }
);

export { boardRouter };
