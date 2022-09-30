import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
  typeDefs: /* dalam GraphQL apabila field diisi tanda seru (Exclamation mark !) tidak boleh bernilai null */ `
      type Query {
        greeting(name: String, position: String): String!
        add(a: Float, b: Float): Float
        me: User! 
        post: Post!
      }

      type User {
        id: ID!
        name: String!
        email: String!
        age: Int
      }

      type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
      }
    `,
  resolvers: {
    Query: {
      greeting(parent, args, ctx, info) {
        if (args.name && args.position) {
          return `Hello, ${args.name}. You are my favorite ${args.position}!`;
        } else {
          return 'Hello!';
        }
      },
      add(parent, args, ctx, info) {
        return args.a + args.b;
      },
      me: () => ({
        id: 234214380732865895,
        name: 'Alicia Visenya',
        age: 30,
        email: 'visenya@xaiur.com',
      }),
      post: () => ({
        id: 343435455465767786,
        title: 'GraphQL 101',
        body: '',
        published: false,
      }),
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
//         me: User!
//         post: Post!
//       }

//       type User {
//         id: ID!
//         name: String!
//         email: String!
//         age: Int
//       }

//       type Post {
//         id: ID!
//         title: String!
//         body: String!
//         published: Boolean!
//       }
//     `,
//     resolvers: {
//       Query: {
//         me: () => ({
//           id: 234214380732865895,
//           name: 'Alicia Visenya',
//           age: 30,
//           email: 'visenya@xaiur.com',
//         }),
//         post: () => ({
//           id: 343435455465767786,
//           title: 'GraphQL 101',
//           body: '',
//           published: false,
//         }),
//       },
//     },
//   },
// });

// server.start();
