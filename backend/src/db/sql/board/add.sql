/*
    Inserts a new User record.
*/
INSERT INTO boards(name)
VALUES($1)
RETURNING *