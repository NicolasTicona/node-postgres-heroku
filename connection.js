const { Client } = require('pg');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config;
}

const connectionString = process.env.DATABASE;

const client = new Client({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

let query = "SELECT NOW()"; 

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res);
    client.end();
});
