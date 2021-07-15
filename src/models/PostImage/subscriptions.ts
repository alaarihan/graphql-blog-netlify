import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { PostImage } from './type'
import { PostImageWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const PostImageSubscription = new GraphQLObjectType({
  name: 'PostImageSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(PostImage),
    },
  }),
})
export const postImageSubscriptions = {
  postImage: {
    extensions: {
      model: 'PostImage',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(PostImageSubscription),
    args: {
      where: { type: PostImageWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'POSTIMAGE_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.postImage.findUnique({
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
