/*
    Inserts a new User record.
*/
INSERT INTO columns(name, board_id, column_color)
VALUES($1, $2, $3)
RETURNING *