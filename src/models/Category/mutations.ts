import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Category } from './type'
import { AffectedRowsOutput } from '../types'
import {
  CategoryCreateInput,
  CategoryUpdateInput,
  CategoryWhereUniqueInput,
  CategoryWhereInput,
  CategoryUpdateManyMutationInput,
  CategoryCreateManyInput,
} from '../inputs'

export const categoryMutations = {
  createOneCategory: {
    extensions: {
      model: 'Category',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Category),
    args: {
      data: { type: new GraphQLNonNull(CategoryCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.create(args as any)
    },
  },
  updateOneCategory: {
    extensions: {
      model: 'Category',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Category),
    args: {
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      data: { type: new GraphQLNonNull(CategoryUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.update(args as any)
    },
  },
  deleteOneCategory: {
    extensions: {
      model: 'Category',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Category,
    args: {
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.delete(args as any)
    },
  },
  upsertOneCategory: {
    extensions: {
      model: 'Category',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Category),
    args: {
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      create: { type: new GraphQLNonNull(CategoryCreateInput) },
      update: { type: new GraphQLNonNull(CategoryUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.upsert(args as any)
    },
  },
  createManyCategory: {
    extensions: {
      model: 'Category',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(CategoryCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.createMany(args as any)
    },
  },
  updateManyCategory: {
    extensions: {
      model: 'Category',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(CategoryWhereInput) },
      data: { type: new GraphQLNonNull(CategoryUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.updateMany(args as any)
    },
  },
  deleteManyCategory: {
    extensions: {
      model: 'Category',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(CategoryWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.deleteMany(args as any)
    },
  },
}
