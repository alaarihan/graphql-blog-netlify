import { authMutations, authQueries } from './auth'
import { feedSourceSubscriptions } from './models/subscriptions'
import { feedSourceQueries } from './models/queries'
import { feedSourceMutations } from './models/mutations'
import { postImageSubscriptions } from './models/subscriptions'
import { postImageQueries } from './models/queries'
import { postImageMutations } from './models/mutations'
import { fileSubscriptions } from './models/subscriptions'
import { fileQueries } from './models/queries'
import { fileMutations } from './models/mutations'
import { categorySubscriptions } from './models/subscriptions'
import { categoryQueries } from './models/queries'
import { categoryMutations } from './models/mutations'
import { postSubscriptions } from './models/subscriptions'
import { postQueries } from './models/queries'
import { postMutations } from './models/mutations'
import { userSubscriptions } from './models/subscriptions'
import { userQueries } from './models/queries'
import { userMutations } from './models/mutations'
import { permissionSubscriptions } from './models/subscriptions'
import { permissionQueries } from './models/queries'
import { permissionMutations } from './models/mutations'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // merge_the_query_fields_here
      ...feedSourceQueries,
      ...postImageQueries,
      ...fileQueries,
      ...categoryQueries,
      ...postQueries,
      ...userQueries,
      ...permissionQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // merge_the_mutation_fields_here
 ...authMutations,
      ...feedSourceMutations,
      ...postImageMutations,
      ...fileMutations,
      ...categoryMutations,
      ...postMutations,
      ...userMutations,
      ...permissionMutations,
    },
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      // merge_the_subscription_fields_here
      ...feedSourceSubscriptions,
      ...postImageSubscriptions,
      ...fileSubscriptions,
      ...categorySubscriptions,
      ...postSubscriptions,
      ...userSubscriptions,
      ...permissionSubscriptions,
    },
  }),
})
