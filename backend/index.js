const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://mac_travels:pYxLeUOcUlx7HMGF@cluster0.yi20e.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db('mac_packages');
//     const movies = database.collection('packages');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { type: 'international' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
run().catch(console.dir);