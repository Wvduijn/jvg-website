// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import animal from "./animal";
import activity_category from "./activity_category";
// import post from "./post";
// import author from "./author";
// import category from "./category";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    animal, 
    activity_category
    //post, 
    // author, 
    // category
  ]),
});
