import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
  typeDefs: /* GraphQL */ `
    type Query {
      id: ID
      name: String
      age: Int
      employed: Boolean
      gpa: Float
    }
  `,
  resolvers: {
    Query: {
      id: () => 234214380732865895,
      name: () => 'Alicia Visenya',
      age: () => 30,
      employed: () => true,
      gpa: () => 22 / 7,
    },
  },
});

server.start(() => {
  console.log(
    '💡   🧘 Yoga -   Running GraphQL Server at http://localhost:4000/'
  );
});

// import { createServer } from '@graphql-yoga/node';

// const server = createServer({
//   schema: {
//     typeDefs: /* GraphQL */ `
//       type Query {
//         hello: String
//         name: String
//         email: String
//       }
//     `,
//     resolvers: {
//       Query: {
//         hello: () => 'Hello from Yoga!',
//         name: () => 'Hermawan Rinnaldi',
//         email: () => 'ceo@xaiur.com',
//       },
//     },
//   },
// });

// server.start();
