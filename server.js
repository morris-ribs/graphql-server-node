import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import mongoose from 'mongoose';

let app = express();
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/dbdrinks');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB connected');
});

app.use('/graphql', GraphQLHTTP({
    schema: Schema,
    graphiql: true // to use GraphiQL :)
}));

app.listen(3000, function() {
    console.log('Server running in port 3000');
});