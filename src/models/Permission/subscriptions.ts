import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Permission } from './type'
import { PermissionWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const PermissionSubscription = new GraphQLObjectType({
  name: 'PermissionSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Permission),
    },
  }),
})
export const permissionSubscriptions = {
  permission: {
    extensions: {
      model: 'Permission',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(PermissionSubscription),
    args: {
      where: { type: PermissionWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'PERMISSION_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.permission.findUnique({
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
