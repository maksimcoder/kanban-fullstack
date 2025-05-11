/**
 * Внутренний тип доски
 */
export interface IBoard {
    id: number;
    name: string;
}

/**
 * Трансферный тип доски для отправки на клиент
 */
export interface IBoardDTO {
    name: string;
}