import { GraphQLEnumType } from 'graphql'

export const SubscriptionAction = new GraphQLEnumType({
  name: 'SubscriptionAction',
  values: {
    CREATE: { value: 'CREATE' },
    UPDATE: { value: 'UPDATE' },
    DELETE: { value: 'DELETE' },
  },
})

export const UserRole = new GraphQLEnumType({
  name: 'UserRole',
  values: {
    ROOT: { value: 'ROOT' },
    ADMIN: { value: 'ADMIN' },
    USER: { value: 'USER' },
    BLOCKED: { value: 'BLOCKED' },
    UNVERIFIED: { value: 'UNVERIFIED' },
    UNAUTHORIZED: { value: 'UNAUTHORIZED' },
  },
})

export const PermissionType = new GraphQLEnumType({
  name: 'PermissionType',
  values: {
    READ: { value: 'READ' },
    CREATE: { value: 'CREATE' },
    UPDATE: { value: 'UPDATE' },
    DELETE: { value: 'DELETE' },
  },
})

export const PostStatus = new GraphQLEnumType({
  name: 'PostStatus',
  values: {
    DRAFT: { value: 'DRAFT' },
    PRIVATE: { value: 'PRIVATE' },
    PUBLISH: { value: 'PUBLISH' },
  },
})

export const PermissionScalarFieldEnum = new GraphQLEnumType({
  name: 'PermissionScalarFieldEnum',
  values: {
    id: { value: 'id' },
    active: { value: 'active' },
    role: { value: 'role' },
    type: { value: 'type' },
    model: { value: 'model' },
    def: { value: 'def' },
  },
})

export const UserScalarFieldEnum = new GraphQLEnumType({
  name: 'UserScalarFieldEnum',
  values: {
    id: { value: 'id' },
    email: { value: 'email' },
    firstName: { value: 'firstName' },
    lastName: { value: 'lastName' },
    password: { value: 'password' },
    role: { value: 'role' },
    verificationToken: { value: 'verificationToken' },
    country: { value: 'country' },
    dateOfBirth: { value: 'dateOfBirth' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const PostScalarFieldEnum = new GraphQLEnumType({
  name: 'PostScalarFieldEnum',
  values: {
    id: { value: 'id' },
    authorId: { value: 'authorId' },
    title: { value: 'title' },
    slug: { value: 'slug' },
    content: { value: 'content' },
    status: { value: 'status' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const CategoryScalarFieldEnum = new GraphQLEnumType({
  name: 'CategoryScalarFieldEnum',
  values: {
    id: { value: 'id' },
    name: { value: 'name' },
    parentId: { value: 'parentId' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const FileScalarFieldEnum = new GraphQLEnumType({
  name: 'FileScalarFieldEnum',
  values: {
    id: { value: 'id' },
    name: { value: 'name' },
    bucket: { value: 'bucket' },
    mimeType: { value: 'mimeType' },
    path: { value: 'path' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    meta: { value: 'meta' },
    tags: { value: 'tags' },
  },
})

export const PostImageScalarFieldEnum = new GraphQLEnumType({
  name: 'PostImageScalarFieldEnum',
  values: {
    id: { value: 'id' },
    order: { value: 'order' },
    featured: { value: 'featured' },
    fileId: { value: 'fileId' },
    postId: { value: 'postId' },
  },
})

export const FeedSourceScalarFieldEnum = new GraphQLEnumType({
  name: 'FeedSourceScalarFieldEnum',
  values: {
    id: { value: 'id' },
    name: { value: 'name' },
    url: { value: 'url' },
    active: { value: 'active' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const SortOrder = new GraphQLEnumType({
  name: 'SortOrder',
  values: {
    asc: { value: 'asc' },
    desc: { value: 'desc' },
  },
})

export const QueryMode = new GraphQLEnumType({
  name: 'QueryMode',
  values: {
    default: { value: 'default' },
    insensitive: { value: 'insensitive' },
  },
})
