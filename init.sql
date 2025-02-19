CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    publisher VARCHAR(255) NOT NULL,
    pages INTEGER NOT NULL,
    image_url VARCHAR(255) NOT NULL
);
INSERT INTO books (
        title,
        genre,
        description,
        author,
        publisher,
        pages,
        image_url
    )
VALUES (
        'Cien años de soledad',
        'Novela',
        'Una de las obras más importantes de la literatura hispanoamericana',
        'Gabriel García Márquez',
        'Sudamericana',
        471,
        'https://example.com/cien_anos.jpg'
    ),
    (
        '1984',
        'Distopía',
        'Un mundo totalitario vigilado por el Gran Hermano',
        'George Orwell',
        'Secker & Warburg',
        328,
        'https://example.com/1984.jpg'
    ),
    (
        'El Principito',
        'Fábula',
        'Una historia filosófica con un trasfondo poético',
        'Antoine de Saint-Exupéry',
        'Reynal & Hitchcock',
        96,
        'https://example.com/principito.jpg'
    );