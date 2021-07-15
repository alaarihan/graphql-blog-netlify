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

export const FeedSource = new GraphQLObjectType({
  name: 'FeedSource',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
  }),
})

export const AggregateFeedSource = new GraphQLObjectType({
  name: 'AggregateFeedSource',
  fields: () => ({
    _count: { type: FeedSourceCountAggregateOutputType },
    count: { type: FeedSourceCountAggregateOutputType },
    _avg: { type: FeedSourceAvgAggregateOutputType },
    avg: { type: FeedSourceAvgAggregateOutputType },
    _sum: { type: FeedSourceSumAggregateOutputType },
    sum: { type: FeedSourceSumAggregateOutputType },
    _min: { type: FeedSourceMinAggregateOutputType },
    min: { type: FeedSourceMinAggregateOutputType },
    _max: { type: FeedSourceMaxAggregateOutputType },
    max: { type: FeedSourceMaxAggregateOutputType },
  }),
})

export const FeedSourceGroupByOutputType = new GraphQLObjectType({
  name: 'FeedSourceGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: FeedSourceCountAggregateOutputType },
    _avg: { type: FeedSourceAvgAggregateOutputType },
    _sum: { type: FeedSourceSumAggregateOutputType },
    _min: { type: FeedSourceMinAggregateOutputType },
    _max: { type: FeedSourceMaxAggregateOutputType },
  }),
})

export const FeedSourceCountAggregateOutputType = new GraphQLObjectType({
  name: 'FeedSourceCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    url: { type: GraphQLInt },
    active: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const FeedSourceAvgAggregateOutputType = new GraphQLObjectType({
  name: 'FeedSourceAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
  }),
})

export const FeedSourceSumAggregateOutputType = new GraphQLObjectType({
  name: 'FeedSourceSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const FeedSourceMinAggregateOutputType = new GraphQLObjectType({
  name: 'FeedSourceMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceMaxAggregateOutputType = new GraphQLObjectType({
  name: 'FeedSourceMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
