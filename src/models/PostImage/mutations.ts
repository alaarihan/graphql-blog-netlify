import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { PostImage } from './type'
import { AffectedRowsOutput } from '../types'
import {
  PostImageCreateInput,
  PostImageUpdateInput,
  PostImageWhereUniqueInput,
  PostImageWhereInput,
  PostImageUpdateManyMutationInput,
  PostImageCreateManyInput,
} from '../inputs'

export const postImageMutations = {
  createOnePostImage: {
    extensions: {
      model: 'PostImage',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(PostImage),
    args: {
      data: { type: new GraphQLNonNull(PostImageCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.create(args as any)
    },
  },
  updateOnePostImage: {
    extensions: {
      model: 'PostImage',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(PostImage),
    args: {
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      data: { type: new GraphQLNonNull(PostImageUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.update(args as any)
    },
  },
  deleteOnePostImage: {
    extensions: {
      model: 'PostImage',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: PostImage,
    args: {
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.delete(args as any)
    },
  },
  upsertOnePostImage: {
    extensions: {
      model: 'PostImage',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(PostImage),
    args: {
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      create: { type: new GraphQLNonNull(PostImageCreateInput) },
      update: { type: new GraphQLNonNull(PostImageUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.upsert(args as any)
    },
  },
  createManyPostImage: {
    extensions: {
      model: 'PostImage',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(PostImageCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.createMany(args as any)
    },
  },
  updateManyPostImage: {
    extensions: {
      model: 'PostImage',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PostImageWhereInput) },
      data: { type: new GraphQLNonNull(PostImageUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.updateMany(args as any)
    },
  },
  deleteManyPostImage: {
    extensions: {
      model: 'PostImage',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PostImageWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.postImage.deleteMany(args as any)
    },
  },
}
