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
import { UserRole, PermissionType } from '../enums'

export const Permission = new GraphQLObjectType({
  name: 'Permission',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    role: {
      type: new GraphQLNonNull(UserRole),
    },
    type: {
      type: new GraphQLNonNull(PermissionType),
    },
    model: {
      type: new GraphQLNonNull(GraphQLString),
    },
    def: {
      type: GraphQLJSON,
    },
  }),
})

export const AggregatePermission = new GraphQLObjectType({
  name: 'AggregatePermission',
  fields: () => ({
    _count: { type: PermissionCountAggregateOutputType },
    count: { type: PermissionCountAggregateOutputType },
    _avg: { type: PermissionAvgAggregateOutputType },
    avg: { type: PermissionAvgAggregateOutputType },
    _sum: { type: PermissionSumAggregateOutputType },
    sum: { type: PermissionSumAggregateOutputType },
    _min: { type: PermissionMinAggregateOutputType },
    min: { type: PermissionMinAggregateOutputType },
    _max: { type: PermissionMaxAggregateOutputType },
    max: { type: PermissionMaxAggregateOutputType },
  }),
})

export const PermissionGroupByOutputType = new GraphQLObjectType({
  name: 'PermissionGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
    _count: { type: PermissionCountAggregateOutputType },
    _avg: { type: PermissionAvgAggregateOutputType },
    _sum: { type: PermissionSumAggregateOutputType },
    _min: { type: PermissionMinAggregateOutputType },
    _max: { type: PermissionMaxAggregateOutputType },
  }),
})

export const PermissionCountAggregateOutputType = new GraphQLObjectType({
  name: 'PermissionCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLInt },
    role: { type: GraphQLInt },
    type: { type: GraphQLInt },
    model: { type: GraphQLInt },
    def: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const PermissionAvgAggregateOutputType = new GraphQLObjectType({
  name: 'PermissionAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
  }),
})

export const PermissionSumAggregateOutputType = new GraphQLObjectType({
  name: 'PermissionSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const PermissionMinAggregateOutputType = new GraphQLObjectType({
  name: 'PermissionMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
  }),
})

export const PermissionMaxAggregateOutputType = new GraphQLObjectType({
  name: 'PermissionMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
  }),
})
