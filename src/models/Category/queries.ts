import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Category, AggregateCategory } from './type'
import {
  CategoryWhereUniqueInput,
  CategoryWhereInput,
  CategoryOrderByInput,
} from '../inputs'
import { CategoryScalarFieldEnum } from '../enums'
export const categoryQueries = {
  findUniqueCategory: {
    extensions: {
      model: 'Category',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Category,
    args: {
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.findUnique(args as any)
    },
  },
  findFirstCategory: {
    extensions: {
      model: 'Category',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Category,
    args: {
      where: { type: CategoryWhereInput },
      orderBy: { type: new GraphQLList(CategoryOrderByInput) },
      cursor: { type: CategoryWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(CategoryScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.findFirst(args as any)
    },
  },
  findManyCategory: {
    extensions: {
      model: 'Category',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Category))),
    args: {
      where: { type: CategoryWhereInput },
      orderBy: { type: new GraphQLList(CategoryOrderByInput) },
      cursor: { type: CategoryWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(CategoryScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.findMany(args as any)
    },
  },
  countCategory: {
    extensions: {
      model: 'Category',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: CategoryWhereInput },
      orderBy: { type: new GraphQLList(CategoryOrderByInput) },
      cursor: { type: CategoryWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(CategoryScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.count(args as any)
    },
  },
  aggregateCategory: {
    extensions: {
      model: 'Category',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateCategory),
    args: {
      where: { type: CategoryWhereInput },
      orderBy: { type: new GraphQLList(CategoryOrderByInput) },
      cursor: { type: CategoryWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.category.aggregate(args as any)
    },
  },
}
