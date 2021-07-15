import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Post } from './type'
import { PostWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const PostSubscription = new GraphQLObjectType({
  name: 'PostSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Post),
    },
  }),
})
export const postSubscriptions = {
  post: {
    extensions: {
      model: 'Post',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(PostSubscription),
    args: {
      where: { type: PostWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'POST_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.post.findUnique({
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
