import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { File } from './type'
import { FileWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'

export const FileSubscription = new GraphQLObjectType({
  name: 'FileSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(File),
    },
  }),
})
export const fileSubscriptions = {
  file: {
    extensions: {
      model: 'File',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(FileSubscription),
    args: {
      where: { type: FileWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx) => {
      let data
      if (root.action === 'FILE_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.file.findUnique({
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
