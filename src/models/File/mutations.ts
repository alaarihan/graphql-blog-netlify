import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { File } from './type'
import { AffectedRowsOutput } from '../types'
import {
  FileCreateInput,
  FileUpdateInput,
  FileWhereUniqueInput,
  FileWhereInput,
  FileUpdateManyMutationInput,
  FileCreateManyInput,
} from '../inputs'

export const fileMutations = {
  createOneFile: {
    extensions: {
      model: 'File',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(File),
    args: {
      data: { type: new GraphQLNonNull(FileCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.create(args as any)
    },
  },
  updateOneFile: {
    extensions: {
      model: 'File',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(File),
    args: {
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
      data: { type: new GraphQLNonNull(FileUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.update(args as any)
    },
  },
  deleteOneFile: {
    extensions: {
      model: 'File',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: File,
    args: {
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.delete(args as any)
    },
  },
  upsertOneFile: {
    extensions: {
      model: 'File',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(File),
    args: {
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
      create: { type: new GraphQLNonNull(FileCreateInput) },
      update: { type: new GraphQLNonNull(FileUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.upsert(args as any)
    },
  },
  createManyFile: {
    extensions: {
      model: 'File',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(FileCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.createMany(args as any)
    },
  },
  updateManyFile: {
    extensions: {
      model: 'File',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(FileWhereInput) },
      data: { type: new GraphQLNonNull(FileUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.updateMany(args as any)
    },
  },
  deleteManyFile: {
    extensions: {
      model: 'File',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(FileWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.file.deleteMany(args as any)
    },
  },
}
