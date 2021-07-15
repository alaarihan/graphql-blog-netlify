import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Post, AggregatePost } from './type'
import {
  PostWhereUniqueInput,
  PostWhereInput,
  PostOrderByInput,
} from '../inputs'
import { PostScalarFieldEnum } from '../enums'
export const postQueries = {
  findUniquePost: {
    extensions: {
      model: 'Post',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Post,
    args: {
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.findUnique(args as any)
    },
  },
  findFirstPost: {
    extensions: {
      model: 'Post',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Post,
    args: {
      where: { type: PostWhereInput },
      orderBy: { type: new GraphQLList(PostOrderByInput) },
      cursor: { type: PostWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PostScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.findFirst(args as any)
    },
  },
  findManyPost: {
    extensions: {
      model: 'Post',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Post))),
    args: {
      where: { type: PostWhereInput },
      orderBy: { type: new GraphQLList(PostOrderByInput) },
      cursor: { type: PostWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PostScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.findMany(args as any)
    },
  },
  countPost: {
    extensions: {
      model: 'Post',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: PostWhereInput },
      orderBy: { type: new GraphQLList(PostOrderByInput) },
      cursor: { type: PostWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PostScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.count(args as any)
    },
  },
  aggregatePost: {
    extensions: {
      model: 'Post',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregatePost),
    args: {
      where: { type: PostWhereInput },
      orderBy: { type: new GraphQLList(PostOrderByInput) },
      cursor: { type: PostWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.aggregate(args as any)
    },
  },
}
