import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql'
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars'
import { Post } from '../types'
import { UserRole, PostScalarFieldEnum } from '../enums'
import {
  PostOrderByInput,
  PostWhereInput,
  PostWhereUniqueInput,
} from '../inputs'

export const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(UserRole),
    },
    verificationToken: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    dateOfBirth: {
      type: GraphQLDateTime,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Post))),
      args: {
        where: { type: PostWhereInput },
        orderBy: { type: PostOrderByInput },
        cursor: { type: PostWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(PostScalarFieldEnum)),
        },
      },
    },
  }),
})

export const AggregateUser = new GraphQLObjectType({
  name: 'AggregateUser',
  fields: () => ({
    _count: { type: UserCountAggregateOutputType },
    count: { type: UserCountAggregateOutputType },
    _avg: { type: UserAvgAggregateOutputType },
    avg: { type: UserAvgAggregateOutputType },
    _sum: { type: UserSumAggregateOutputType },
    sum: { type: UserSumAggregateOutputType },
    _min: { type: UserMinAggregateOutputType },
    min: { type: UserMinAggregateOutputType },
    _max: { type: UserMaxAggregateOutputType },
    max: { type: UserMaxAggregateOutputType },
  }),
})

export const UserGroupByOutputType = new GraphQLObjectType({
  name: 'UserGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: UserCountAggregateOutputType },
    _avg: { type: UserAvgAggregateOutputType },
    _sum: { type: UserSumAggregateOutputType },
    _min: { type: UserMinAggregateOutputType },
    _max: { type: UserMaxAggregateOutputType },
  }),
})

export const UserCountAggregateOutputType = new GraphQLObjectType({
  name: 'UserCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLInt },
    firstName: { type: GraphQLInt },
    lastName: { type: GraphQLInt },
    password: { type: GraphQLInt },
    role: { type: GraphQLInt },
    verificationToken: { type: GraphQLInt },
    country: { type: GraphQLInt },
    dateOfBirth: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const UserAvgAggregateOutputType = new GraphQLObjectType({
  name: 'UserAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
  }),
})

export const UserSumAggregateOutputType = new GraphQLObjectType({
  name: 'UserSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const UserMinAggregateOutputType = new GraphQLObjectType({
  name: 'UserMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserMaxAggregateOutputType = new GraphQLObjectType({
  name: 'UserMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
