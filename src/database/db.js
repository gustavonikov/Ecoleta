/* eslint-disable func-names */
/* eslint-disable consistent-return */
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/database.db');

// utilizar o objeto do banco de dados, para as minhas operações
/* db.serialize(() => { */
   /*  db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);  */

    /* const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `;

    const dataValues = [
        'Papersider',
        'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'Guilherme Gemballa, Jardim América',
        'Nº 260',
        'Santa Catarina',
        'Rio do Sul',
        'Papéis e Papelão',
    ];

    function afterInsertData(error) {
        if (error) {
            return console.log(error);
        }

        console.log('Cadastrado com sucesso!');
        console.log(this);
    }

    db.run(query, dataValues, afterInsertData);

    // eslint-disable-next-line quotes
    db.all(`SELECT * FROM places`, (error, rows) => {
        if (error) {
            return console.log(error);
        }

        console.log('Aqui estão os seus registros: ');
        console.log(rows);
    }); */
 
    // eslint-disable-next-line quotes
    /* db.run(`DELETE FROM places WHERE id = ?`, [3], (error) => {
        if (error) {
            return console.log(error);
        }

        console.log('Registro deletado com sucesso!');
    });
}); */

module.exports = db;
