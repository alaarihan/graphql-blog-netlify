import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql'

export const AffectedRowsOutput = new GraphQLObjectType({
  name: 'AffectedRowsOutput',
  fields: () => ({
    count: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export * from './Permission/type'
export * from './User/type'
export * from './Post/type'
export * from './Category/type'
export * from './File/type'
export * from './PostImage/type'
export * from './FeedSource/type'
