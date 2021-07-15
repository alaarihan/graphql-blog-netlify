import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Category } from './type'
import { CategoryWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const CategorySubscription = new GraphQLObjectType({
  name: 'CategorySubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Category),
    },
  }),
})
export const categorySubscriptions = {
  category: {
    extensions: {
      model: 'Category',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(CategorySubscription),
    args: {
      where: { type: CategoryWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'CATEGORY_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.category.findUnique({
          where: { id: root.id },
          select: args.select.data.select,
        })
      }
      const result = {
        data,
        action: root.action,
      }
      return result
    },
  },
}
