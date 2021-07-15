import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { FeedSource } from './type'
import { FeedSourceWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const FeedSourceSubscription = new GraphQLObjectType({
  name: 'FeedSourceSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(FeedSource),
    },
  }),
})
export const feedSourceSubscriptions = {
  feedSource: {
    extensions: {
      model: 'FeedSource',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(FeedSourceSubscription),
    args: {
      where: { type: FeedSourceWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'FEEDSOURCE_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.feedSource.findUnique({
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
