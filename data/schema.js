import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';
import Drink from './model/Drink';

let Schema = (db) => {
  // declaration of our type Drink
  let drinkType = new GraphQLObjectType({
      name: "Drink",
      fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
          _id: { type: GraphQLString },
          name: { type: GraphQLString },
          type1: { type: GraphQLString },
          type2: { type: GraphQLString },
          price: { type: GraphQLFloat },
          stock: { type: GraphQLInt }
      })
  });

  // the schema of the GraphQL queries
  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'Query',
        fields: () => ({
            drinks: {
                type: new GraphQLList(drinkType),
                args: { // for filtering
                    name: {
                        name: 'name',
                        type: GraphQLString
                    }
                },
                resolve: (root, {name}) => 
                { 
                    if (name != null && name != "")
                        return Drink.find({'name': name}).exec();
                    
                    return Drink.find().exec(function(err, drinksArr){
                        if(err) console.log(err);
                        else console.log('no errors');
                        console.log(drinksArr);
                        return drinksArr;
                    });
                }
                // function that GraphQL will execute in order to resolve the field
                // here we get all the candidates from the DB
            }
        })
    })
  });

  return schema
};

export default Schema;
