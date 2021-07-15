import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { User } from './type'
import { UserWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const UserSubscription = new GraphQLObjectType({
  name: 'UserSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(User),
    },
  }),
})
export const userSubscriptions = {
  user: {
    extensions: {
      model: 'User',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(UserSubscription),
    args: {
      where: { type: UserWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'USER_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.user.findUnique({
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
