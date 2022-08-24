CREATE TABLE IF NOT EXISTS tasks(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(1000),
    completed BOOLEAN DEFAULT false
);

INSERT INTO tasks(name) 
VALUES ('comer');

DELETE FROM tasks WHERE id = 'adsadsad';

UPDATE tasks
SET name = 'comer',
    completed = true
WHERE id = 'asdasdas';