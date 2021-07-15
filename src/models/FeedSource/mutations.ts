import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { FeedSource } from './type'
import { AffectedRowsOutput } from '../types'
import {
  FeedSourceCreateInput,
  FeedSourceUpdateInput,
  FeedSourceWhereUniqueInput,
  FeedSourceWhereInput,
  FeedSourceUpdateManyMutationInput,
  FeedSourceCreateManyInput,
} from '../inputs'

export const feedSourceMutations = {
  createOneFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(FeedSource),
    args: {
      data: { type: new GraphQLNonNull(FeedSourceCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.create(args as any)
    },
  },
  updateOneFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(FeedSource),
    args: {
      where: { type: new GraphQLNonNull(FeedSourceWhereUniqueInput) },
      data: { type: new GraphQLNonNull(FeedSourceUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.update(args as any)
    },
  },
  deleteOneFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: FeedSource,
    args: {
      where: { type: new GraphQLNonNull(FeedSourceWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.delete(args as any)
    },
  },
  upsertOneFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(FeedSource),
    args: {
      where: { type: new GraphQLNonNull(FeedSourceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(FeedSourceCreateInput) },
      update: { type: new GraphQLNonNull(FeedSourceUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.upsert(args as any)
    },
  },
  createManyFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(FeedSourceCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.createMany(args as any)
    },
  },
  updateManyFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(FeedSourceWhereInput) },
      data: { type: new GraphQLNonNull(FeedSourceUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.updateMany(args as any)
    },
  },
  deleteManyFeedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(FeedSourceWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.feedSource.deleteMany(args as any)
    },
  },
}
