import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { User } from './type'
import { AffectedRowsOutput } from '../types'
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereUniqueInput,
  UserWhereInput,
  UserUpdateManyMutationInput,
  UserCreateManyInput,
} from '../inputs'

export const userMutations = {
  createOneUser: {
    extensions: {
      model: 'User',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(User),
    args: {
      data: { type: new GraphQLNonNull(UserCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.create(args as any)
    },
  },
  updateOneUser: {
    extensions: {
      model: 'User',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(User),
    args: {
      where: { type: new GraphQLNonNull(UserWhereUniqueInput) },
      data: { type: new GraphQLNonNull(UserUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.update(args as any)
    },
  },
  deleteOneUser: {
    extensions: {
      model: 'User',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: User,
    args: {
      where: { type: new GraphQLNonNull(UserWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.delete(args as any)
    },
  },
  upsertOneUser: {
    extensions: {
      model: 'User',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(User),
    args: {
      where: { type: new GraphQLNonNull(UserWhereUniqueInput) },
      create: { type: new GraphQLNonNull(UserCreateInput) },
      update: { type: new GraphQLNonNull(UserUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.upsert(args as any)
    },
  },
  createManyUser: {
    extensions: {
      model: 'User',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(UserCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.createMany(args as any)
    },
  },
  updateManyUser: {
    extensions: {
      model: 'User',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(UserWhereInput) },
      data: { type: new GraphQLNonNull(UserUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.updateMany(args as any)
    },
  },
  deleteManyUser: {
    extensions: {
      model: 'User',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(UserWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.user.deleteMany(args as any)
    },
  },
}
