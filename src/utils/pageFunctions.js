const db = require('../database/db');

function pageRegistration(req, res) {
    return res.render('registration.html');
}

function pageSaveRegistration(req, res) {
    const data = req.body;

    const query = `
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
        data.name,
        data.image,
        data.address,
        data.address2,
        data.state,
        data.city,
        data.items,
    ];

    function afterInsertData(error) {
        if (error) {
            console.log(error);
            return res.send('Erro no cadastro!');
        }

        console.log('Cadastrado com sucesso!');
        console.log(this);

        return res.render('registration.html', { saved: true });
    }

    db.run(query, dataValues, afterInsertData);
}

function pageSearchResults(req, res) {
    const { search } = req.query;
    // eslint-disable-next-line quotes
    db.all(`SELECT * FROM places WHERE city = '${search}'`, (error, rows) => {
        // Se eu quiser que ele pegue cidades com nome similares boto antes do =, LIKE e %'${search}'%
        if (error) {
            return console.log(error);
        }

        const total = rows.length;

        return res.render('search-results.html', { places: rows, total, search });
    });
}

module.exports = {
    pageRegistration,
    pageSaveRegistration,
    pageSearchResults,
};
