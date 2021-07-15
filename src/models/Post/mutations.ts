import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Post } from './type'
import { AffectedRowsOutput } from '../types'
import {
  PostCreateInput,
  PostUpdateInput,
  PostWhereUniqueInput,
  PostWhereInput,
  PostUpdateManyMutationInput,
  PostCreateManyInput,
} from '../inputs'

export const postMutations = {
  createOnePost: {
    extensions: {
      model: 'Post',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Post),
    args: {
      data: { type: new GraphQLNonNull(PostCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.create(args as any)
    },
  },
  updateOnePost: {
    extensions: {
      model: 'Post',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Post),
    args: {
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      data: { type: new GraphQLNonNull(PostUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.update(args as any)
    },
  },
  deleteOnePost: {
    extensions: {
      model: 'Post',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Post,
    args: {
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.delete(args as any)
    },
  },
  upsertOnePost: {
    extensions: {
      model: 'Post',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Post),
    args: {
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      create: { type: new GraphQLNonNull(PostCreateInput) },
      update: { type: new GraphQLNonNull(PostUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.upsert(args as any)
    },
  },
  createManyPost: {
    extensions: {
      model: 'Post',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(PostCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.createMany(args as any)
    },
  },
  updateManyPost: {
    extensions: {
      model: 'Post',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PostWhereInput) },
      data: { type: new GraphQLNonNull(PostUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.updateMany(args as any)
    },
  },
  deleteManyPost: {
    extensions: {
      model: 'Post',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PostWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.post.deleteMany(args as any)
    },
  },
}
