import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { FeedSource, AggregateFeedSource } from './type'
import {
  FeedSourceWhereUniqueInput,
  FeedSourceWhereInput,
  FeedSourceOrderByInput,
} from '../inputs'
import { FeedSourceScalarFieldEnum } from '../enums'
export const feedSourceQueries = {
  findUniqueFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'findUnique',
      permType: 'READ',
    },
    type: FeedSource,
    args: {
      where: { type: new GraphQLNonNull(FeedSourceWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.findUnique(args as any)
    },
  },
  findFirstFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'findFirst',
      permType: 'READ',
    },
    type: FeedSource,
    args: {
      where: { type: FeedSourceWhereInput },
      orderBy: { type: new GraphQLList(FeedSourceOrderByInput) },
      cursor: { type: FeedSourceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(FeedSourceScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.findFirst(args as any)
    },
  },
  findManyFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FeedSource))),
    args: {
      where: { type: FeedSourceWhereInput },
      orderBy: { type: new GraphQLList(FeedSourceOrderByInput) },
      cursor: { type: FeedSourceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(FeedSourceScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.findMany(args as any)
    },
  },
  countFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: FeedSourceWhereInput },
      orderBy: { type: new GraphQLList(FeedSourceOrderByInput) },
      cursor: { type: FeedSourceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(FeedSourceScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.count(args as any)
    },
  },
  aggregateFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateFeedSource),
    args: {
      where: { type: FeedSourceWhereInput },
      orderBy: { type: new GraphQLList(FeedSourceOrderByInput) },
      cursor: { type: FeedSourceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.aggregate(args as any)
    },
  },
}
