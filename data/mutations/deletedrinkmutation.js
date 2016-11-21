import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import DrinkType from '../types/drinktype';
import Drink from '../../databasemodel/Drink';
import mongoose from 'mongoose';
import q from 'q';

let DeleteDrinkType = new GraphQLInputObjectType({
    name: 'DeleteDrink',
    fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
        id: { type: new GraphQLNonNull(GraphQLString) }
    })
});



let DeleteDrinkMutation = {
    type: GraphQLString,
    args: {
        input: {
            type: new GraphQLNonNull(DeleteDrinkType)
        }
    },
    resolve: (obj, { input }) => {

        // remove the data
        let promise = Drink.findByIdAndRemove(mongoose.Types.ObjectId(input.id));
        return promise.then(function(doc) {
            return "Successfully deleted drink " + doc.name + " (" + doc.id + ")";
        });
    }
};

export default DeleteDrinkMutation;