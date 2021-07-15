import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { PostImage, AggregatePostImage } from './type'
import {
  PostImageWhereUniqueInput,
  PostImageWhereInput,
  PostImageOrderByInput,
} from '../inputs'
import { PostImageScalarFieldEnum } from '../enums'
export const postImageQueries = {
  findUniquePostImage: {
    extensions: {
      model: 'PostImage',
      op: 'findUnique',
      permType: 'READ',
    },
    type: PostImage,
    args: {
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.findUnique(args as any)
    },
  },
  findFirstPostImage: {
    extensions: {
      model: 'PostImage',
      op: 'findFirst',
      permType: 'READ',
    },
    type: PostImage,
    args: {
      where: { type: PostImageWhereInput },
      orderBy: { type: new GraphQLList(PostImageOrderByInput) },
      cursor: { type: PostImageWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PostImageScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.findFirst(args as any)
    },
  },
  findManyPostImage: {
    extensions: {
      model: 'PostImage',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostImage))),
    args: {
      where: { type: PostImageWhereInput },
      orderBy: { type: new GraphQLList(PostImageOrderByInput) },
      cursor: { type: PostImageWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PostImageScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.findMany(args as any)
    },
  },
  countPostImage: {
    extensions: {
      model: 'PostImage',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: PostImageWhereInput },
      orderBy: { type: new GraphQLList(PostImageOrderByInput) },
      cursor: { type: PostImageWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PostImageScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.count(args as any)
    },
  },
  aggregatePostImage: {
    extensions: {
      model: 'PostImage',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregatePostImage),
    args: {
      where: { type: PostImageWhereInput },
      orderBy: { type: new GraphQLList(PostImageOrderByInput) },
      cursor: { type: PostImageWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.aggregate(args as any)
    },
  },
}
