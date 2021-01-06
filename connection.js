const { Client } = require('pg');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config;
}

const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
});

client.connect();

let query = "SELECT * FROM usuarios"; 

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(res);
    client.end();
});
