CREATE TABLE IF NOT EXISTS public.columns (
    id serial PRIMARY KEY,
    name varchar(64) NOT NULL,
    board_id INTEGER NOT NULL
        REFERENCES "boards"(id)
        ON DELETE CASCADE,
    column_color varchar(64) NOT NULL
)