-- init-db/01-init.sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100)
);

INSERT INTO users (email, hashed_password, full_name)
VALUES ('admin@yolo.local', 'admin_hash', 'Administrador')
ON CONFLICT (email) DO NOTHING;
