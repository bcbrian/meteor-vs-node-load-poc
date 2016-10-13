const schema = `

type StarWarsStuff {
    _id: String!
    edited: String
    consumables: String
    name: String
    created: String
    cargo_capacity: String
    passengers: String
    max_atmosphering_speed: String
    crew: String
    length: String
    model: String
    cost_in_credits: String
    manufacturer: String
}


# the schema allows the following query:
type Query {
  starwarsstuff: [StarWarsStuff]
}

`;

export default schema;
