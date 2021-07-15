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
import { User, Category, PostImage } from '../types'
import {
  PostStatus,
  CategoryScalarFieldEnum,
  PostImageScalarFieldEnum,
} from '../enums'
import {
  CategoryOrderByInput,
  CategoryWhereInput,
  CategoryWhereUniqueInput,
  PostImageOrderByInput,
  PostImageWhereInput,
  PostImageWhereUniqueInput,
} from '../inputs'

export const Post = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    slug: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: GraphQLString,
    },
    status: {
      type: new GraphQLNonNull(PostStatus),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    author: {
      type: new GraphQLNonNull(User),
    },
    categories: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Category))),
      args: {
        where: { type: CategoryWhereInput },
        orderBy: { type: CategoryOrderByInput },
        cursor: { type: CategoryWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(CategoryScalarFieldEnum)),
        },
      },
    },
    images: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostImage))),
      args: {
        where: { type: PostImageWhereInput },
        orderBy: { type: PostImageOrderByInput },
        cursor: { type: PostImageWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(PostImageScalarFieldEnum)),
        },
      },
    },
  }),
})

export const AggregatePost = new GraphQLObjectType({
  name: 'AggregatePost',
  fields: () => ({
    _count: { type: PostCountAggregateOutputType },
    count: { type: PostCountAggregateOutputType },
    _avg: { type: PostAvgAggregateOutputType },
    avg: { type: PostAvgAggregateOutputType },
    _sum: { type: PostSumAggregateOutputType },
    sum: { type: PostSumAggregateOutputType },
    _min: { type: PostMinAggregateOutputType },
    min: { type: PostMinAggregateOutputType },
    _max: { type: PostMaxAggregateOutputType },
    max: { type: PostMaxAggregateOutputType },
  }),
})

export const PostGroupByOutputType = new GraphQLObjectType({
  name: 'PostGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: PostCountAggregateOutputType },
    _avg: { type: PostAvgAggregateOutputType },
    _sum: { type: PostSumAggregateOutputType },
    _min: { type: PostMinAggregateOutputType },
    _max: { type: PostMaxAggregateOutputType },
  }),
})

export const PostCountAggregateOutputType = new GraphQLObjectType({
  name: 'PostCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    title: { type: GraphQLInt },
    slug: { type: GraphQLInt },
    content: { type: GraphQLInt },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const PostAvgAggregateOutputType = new GraphQLObjectType({
  name: 'PostAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    authorId: { type: GraphQLFloat },
  }),
})

export const PostSumAggregateOutputType = new GraphQLObjectType({
  name: 'PostSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
  }),
})

export const PostMinAggregateOutputType = new GraphQLObjectType({
  name: 'PostMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PostMaxAggregateOutputType = new GraphQLObjectType({
  name: 'PostMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
