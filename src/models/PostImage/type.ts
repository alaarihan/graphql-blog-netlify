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
import { File, Post } from '../types'

export const PostImage = new GraphQLObjectType({
  name: 'PostImage',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    image: {
      type: new GraphQLNonNull(File),
    },
    post: {
      type: new GraphQLNonNull(Post),
    },
    order: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    featured: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    fileId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    postId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})

export const AggregatePostImage = new GraphQLObjectType({
  name: 'AggregatePostImage',
  fields: () => ({
    _count: { type: PostImageCountAggregateOutputType },
    count: { type: PostImageCountAggregateOutputType },
    _avg: { type: PostImageAvgAggregateOutputType },
    avg: { type: PostImageAvgAggregateOutputType },
    _sum: { type: PostImageSumAggregateOutputType },
    sum: { type: PostImageSumAggregateOutputType },
    _min: { type: PostImageMinAggregateOutputType },
    min: { type: PostImageMinAggregateOutputType },
    _max: { type: PostImageMaxAggregateOutputType },
    max: { type: PostImageMaxAggregateOutputType },
  }),
})

export const PostImageGroupByOutputType = new GraphQLObjectType({
  name: 'PostImageGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
    _count: { type: PostImageCountAggregateOutputType },
    _avg: { type: PostImageAvgAggregateOutputType },
    _sum: { type: PostImageSumAggregateOutputType },
    _min: { type: PostImageMinAggregateOutputType },
    _max: { type: PostImageMaxAggregateOutputType },
  }),
})

export const PostImageCountAggregateOutputType = new GraphQLObjectType({
  name: 'PostImageCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLInt },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const PostImageAvgAggregateOutputType = new GraphQLObjectType({
  name: 'PostImageAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    order: { type: GraphQLFloat },
    fileId: { type: GraphQLFloat },
    postId: { type: GraphQLFloat },
  }),
})

export const PostImageSumAggregateOutputType = new GraphQLObjectType({
  name: 'PostImageSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
  }),
})

export const PostImageMinAggregateOutputType = new GraphQLObjectType({
  name: 'PostImageMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
  }),
})

export const PostImageMaxAggregateOutputType = new GraphQLObjectType({
  name: 'PostImageMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
  }),
})
