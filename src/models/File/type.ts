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
import { PostImage } from '../types'
import { PostImageScalarFieldEnum } from '../enums'
import {
  PostImageOrderByInput,
  PostImageWhereInput,
  PostImageWhereUniqueInput,
} from '../inputs'

export const File = new GraphQLObjectType({
  name: 'File',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    bucket: {
      type: new GraphQLNonNull(GraphQLString),
    },
    mimeType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    path: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    meta: {
      type: GraphQLJSON,
    },
    tags: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
    PostImage: {
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

export const AggregateFile = new GraphQLObjectType({
  name: 'AggregateFile',
  fields: () => ({
    _count: { type: FileCountAggregateOutputType },
    count: { type: FileCountAggregateOutputType },
    _avg: { type: FileAvgAggregateOutputType },
    avg: { type: FileAvgAggregateOutputType },
    _sum: { type: FileSumAggregateOutputType },
    sum: { type: FileSumAggregateOutputType },
    _min: { type: FileMinAggregateOutputType },
    min: { type: FileMinAggregateOutputType },
    _max: { type: FileMaxAggregateOutputType },
    max: { type: FileMaxAggregateOutputType },
  }),
})

export const FileGroupByOutputType = new GraphQLObjectType({
  name: 'FileGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(GraphQLString) },
    _count: { type: FileCountAggregateOutputType },
    _avg: { type: FileAvgAggregateOutputType },
    _sum: { type: FileSumAggregateOutputType },
    _min: { type: FileMinAggregateOutputType },
    _max: { type: FileMaxAggregateOutputType },
  }),
})

export const FileCountAggregateOutputType = new GraphQLObjectType({
  name: 'FileCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    bucket: { type: GraphQLInt },
    mimeType: { type: GraphQLInt },
    path: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    meta: { type: GraphQLInt },
    tags: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const FileAvgAggregateOutputType = new GraphQLObjectType({
  name: 'FileAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
  }),
})

export const FileSumAggregateOutputType = new GraphQLObjectType({
  name: 'FileSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const FileMinAggregateOutputType = new GraphQLObjectType({
  name: 'FileMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FileMaxAggregateOutputType = new GraphQLObjectType({
  name: 'FileMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
