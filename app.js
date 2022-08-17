const express = require('express')
const app = express();
const port = process.env.PORT;

const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

client.connect();

app.get('/', (req, res) => {
  client.query('INSERT into visits (created_at) values(NOW())', (err, response) => {
    console.log('err', err)
    console.log('response', response)

    if (err) {
      return res.send(`An expcetion was found: ${err}`);
    }
    return response
  });

  return res.send('Successfully recorded the visit');
});


app.listen(port, () => { console.log('Server Started') });