const express = require('express')
const app = express();
const port = process.env.PORT;

const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

client.connect();
    //render form
     app.get('/', (req, res) => {
	   const markup = `
	     <!DOCTYPE html>
		 <html>
		     <head>
		           <title>user form</title>
		     </head>
		     <body>
			    <h1>User form</h1>
				   <form>
				       <label for="description">Description</label>
				       <input id="description" name="description" type="text" value="" placeholder="enter your description" />
				        
					 <label for="code">Code</label>
				       <input id="code" name="Code" type="text" value="" placeholder="enter your code" />
				   
				     <input type="submit" value="Submit" /> 
					 </form>
			 
			 </body>
		 </html>
		 `
     res.send(markup)

//  client.query('INSERT into visits (created_at) values(NOW())', (err, response) => {
//    console.log('err', err)
//    console.log('response', response)

//    if (err) {
//      return res.send(`An exception was found: ${err}`);
//    }
//    return response
//  });

  return res.send('Successfully recorded the visit');
});


app.listen(port, () => { console.log('Server Started') });