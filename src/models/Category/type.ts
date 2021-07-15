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
import { CategoryScalarFieldEnum, PostScalarFieldEnum } from '../enums'
import {
  CategoryOrderByInput,
  CategoryWhereInput,
  CategoryWhereUniqueInput,
  PostOrderByInput,
  PostWhereInput,
  PostWhereUniqueInput,
} from '../inputs'

export const Category = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    parentId: {
      type: GraphQLInt,
    },
    parent: {
      type: Category,
    },
    children: {
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

export const AggregateCategory = new GraphQLObjectType({
  name: 'AggregateCategory',
  fields: () => ({
    _count: { type: CategoryCountAggregateOutputType },
    count: { type: CategoryCountAggregateOutputType },
    _avg: { type: CategoryAvgAggregateOutputType },
    avg: { type: CategoryAvgAggregateOutputType },
    _sum: { type: CategorySumAggregateOutputType },
    sum: { type: CategorySumAggregateOutputType },
    _min: { type: CategoryMinAggregateOutputType },
    min: { type: CategoryMinAggregateOutputType },
    _max: { type: CategoryMaxAggregateOutputType },
    max: { type: CategoryMaxAggregateOutputType },
  }),
})

export const CategoryGroupByOutputType = new GraphQLObjectType({
  name: 'CategoryGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: CategoryCountAggregateOutputType },
    _avg: { type: CategoryAvgAggregateOutputType },
    _sum: { type: CategorySumAggregateOutputType },
    _min: { type: CategoryMinAggregateOutputType },
    _max: { type: CategoryMaxAggregateOutputType },
  }),
})

export const CategoryCountAggregateOutputType = new GraphQLObjectType({
  name: 'CategoryCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const CategoryAvgAggregateOutputType = new GraphQLObjectType({
  name: 'CategoryAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    parentId: { type: GraphQLFloat },
  }),
})

export const CategorySumAggregateOutputType = new GraphQLObjectType({
  name: 'CategorySumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    parentId: { type: GraphQLInt },
  }),
})

export const CategoryMinAggregateOutputType = new GraphQLObjectType({
  name: 'CategoryMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const CategoryMaxAggregateOutputType = new GraphQLObjectType({
  name: 'CategoryMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
