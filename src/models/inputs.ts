import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql'
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars'

import {
  UserRole,
  PermissionType,
  PostStatus,
  PermissionScalarFieldEnum,
  UserScalarFieldEnum,
  PostScalarFieldEnum,
  CategoryScalarFieldEnum,
  FileScalarFieldEnum,
  PostImageScalarFieldEnum,
  FeedSourceScalarFieldEnum,
  SortOrder,
  QueryMode,
} from './enums'

export const SimpleStringFilter = new GraphQLInputObjectType({
  name: 'SimpleStringFilter',
  fields: () => ({
    equals: {
      type: GraphQLString,
    },
    in: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
    notIn: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
  }),
})

export const PermissionWhereInput = new GraphQLInputObjectType({
  name: 'PermissionWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PermissionWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PermissionWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PermissionWhereInput)) },
    id: { type: IntFilter },
    active: { type: BoolFilter },
    role: { type: EnumUserRoleFilter },
    type: { type: EnumPermissionTypeFilter },
    model: { type: StringFilter },
    def: { type: JsonNullableFilter },
  }),
})

export const PermissionOrderByInput = new GraphQLInputObjectType({
  name: 'PermissionOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    active: { type: SortOrder },
    role: { type: SortOrder },
    type: { type: SortOrder },
    model: { type: SortOrder },
    def: { type: SortOrder },
  }),
})

export const PermissionWhereUniqueInput = new GraphQLInputObjectType({
  name: 'PermissionWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    role_type_model: { type: PermissionRoleTypeModelCompoundUniqueInput },
  }),
})

export const PermissionScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'PermissionScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(PermissionScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(PermissionScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(PermissionScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      active: { type: BoolWithAggregatesFilter },
      role: { type: EnumUserRoleWithAggregatesFilter },
      type: { type: EnumPermissionTypeWithAggregatesFilter },
      model: { type: StringWithAggregatesFilter },
      def: { type: JsonNullableWithAggregatesFilter },
    }),
  })

export const UserWhereInput = new GraphQLInputObjectType({
  name: 'UserWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(UserWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(UserWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(UserWhereInput)) },
    id: { type: IntFilter },
    email: { type: StringFilter },
    firstName: { type: StringNullableFilter },
    lastName: { type: StringNullableFilter },
    password: { type: StringFilter },
    role: { type: EnumUserRoleFilter },
    verificationToken: { type: StringNullableFilter },
    country: { type: StringNullableFilter },
    dateOfBirth: { type: DateTimeNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    posts: { type: PostListRelationFilter },
  }),
})

export const UserOrderByInput = new GraphQLInputObjectType({
  name: 'UserOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    email: { type: SortOrder },
    firstName: { type: SortOrder },
    lastName: { type: SortOrder },
    password: { type: SortOrder },
    role: { type: SortOrder },
    verificationToken: { type: SortOrder },
    country: { type: SortOrder },
    dateOfBirth: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const UserWhereUniqueInput = new GraphQLInputObjectType({
  name: 'UserWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
  }),
})

export const UserScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'UserScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(UserScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(UserScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(UserScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    email: { type: StringWithAggregatesFilter },
    firstName: { type: StringNullableWithAggregatesFilter },
    lastName: { type: StringNullableWithAggregatesFilter },
    password: { type: StringWithAggregatesFilter },
    role: { type: EnumUserRoleWithAggregatesFilter },
    verificationToken: { type: StringNullableWithAggregatesFilter },
    country: { type: StringNullableWithAggregatesFilter },
    dateOfBirth: { type: DateTimeNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
  }),
})

export const PostWhereInput = new GraphQLInputObjectType({
  name: 'PostWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PostWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PostWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PostWhereInput)) },
    id: { type: IntFilter },
    authorId: { type: IntFilter },
    title: { type: StringFilter },
    slug: { type: StringFilter },
    content: { type: StringNullableFilter },
    status: { type: EnumPostStatusFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    author: { type: UserWhereInput },
    categories: { type: CategoryListRelationFilter },
    images: { type: PostImageListRelationFilter },
  }),
})

export const PostOrderByInput = new GraphQLInputObjectType({
  name: 'PostOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    authorId: { type: SortOrder },
    title: { type: SortOrder },
    slug: { type: SortOrder },
    content: { type: SortOrder },
    status: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const PostWhereUniqueInput = new GraphQLInputObjectType({
  name: 'PostWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const PostScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'PostScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(PostScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(PostScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(PostScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    authorId: { type: IntWithAggregatesFilter },
    title: { type: StringWithAggregatesFilter },
    slug: { type: StringWithAggregatesFilter },
    content: { type: StringNullableWithAggregatesFilter },
    status: { type: EnumPostStatusWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
  }),
})

export const CategoryWhereInput = new GraphQLInputObjectType({
  name: 'CategoryWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(CategoryWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(CategoryWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(CategoryWhereInput)) },
    id: { type: IntFilter },
    name: { type: StringFilter },
    parentId: { type: IntNullableFilter },
    parent: { type: CategoryWhereInput },
    children: { type: CategoryListRelationFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    posts: { type: PostListRelationFilter },
  }),
})

export const CategoryOrderByInput = new GraphQLInputObjectType({
  name: 'CategoryOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    parentId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const CategoryWhereUniqueInput = new GraphQLInputObjectType({
  name: 'CategoryWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const CategoryScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'CategoryScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      name: { type: StringWithAggregatesFilter },
      parentId: { type: IntNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
    }),
  })

export const FileWhereInput = new GraphQLInputObjectType({
  name: 'FileWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    id: { type: IntFilter },
    name: { type: StringFilter },
    bucket: { type: StringFilter },
    mimeType: { type: StringFilter },
    path: { type: StringFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    meta: { type: JsonNullableFilter },
    tags: { type: StringNullableListFilter },
    PostImage: { type: PostImageListRelationFilter },
  }),
})

export const FileOrderByInput = new GraphQLInputObjectType({
  name: 'FileOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    bucket: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    meta: { type: SortOrder },
    tags: { type: SortOrder },
  }),
})

export const FileWhereUniqueInput = new GraphQLInputObjectType({
  name: 'FileWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    bucket_path: { type: FileBucketPathCompoundUniqueInput },
  }),
})

export const FileScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'FileScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    name: { type: StringWithAggregatesFilter },
    bucket: { type: StringWithAggregatesFilter },
    mimeType: { type: StringWithAggregatesFilter },
    path: { type: StringWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
    meta: { type: JsonNullableWithAggregatesFilter },
    tags: { type: StringNullableListFilter },
  }),
})

export const PostImageWhereInput = new GraphQLInputObjectType({
  name: 'PostImageWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PostImageWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PostImageWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PostImageWhereInput)) },
    id: { type: IntFilter },
    image: { type: FileWhereInput },
    post: { type: PostWhereInput },
    order: { type: IntFilter },
    featured: { type: BoolFilter },
    fileId: { type: IntFilter },
    postId: { type: IntFilter },
  }),
})

export const PostImageOrderByInput = new GraphQLInputObjectType({
  name: 'PostImageOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    order: { type: SortOrder },
    featured: { type: SortOrder },
    fileId: { type: SortOrder },
    postId: { type: SortOrder },
  }),
})

export const PostImageWhereUniqueInput = new GraphQLInputObjectType({
  name: 'PostImageWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    fileId_postId: { type: PostImageFileIdPostIdCompoundUniqueInput },
  }),
})

export const PostImageScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'PostImageScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      order: { type: IntWithAggregatesFilter },
      featured: { type: BoolWithAggregatesFilter },
      fileId: { type: IntWithAggregatesFilter },
      postId: { type: IntWithAggregatesFilter },
    }),
  })

export const FeedSourceWhereInput = new GraphQLInputObjectType({
  name: 'FeedSourceWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(FeedSourceWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(FeedSourceWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(FeedSourceWhereInput)) },
    id: { type: IntFilter },
    name: { type: StringFilter },
    url: { type: StringFilter },
    active: { type: BoolFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const FeedSourceOrderByInput = new GraphQLInputObjectType({
  name: 'FeedSourceOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    url: { type: SortOrder },
    active: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const FeedSourceWhereUniqueInput = new GraphQLInputObjectType({
  name: 'FeedSourceWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const FeedSourceScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'FeedSourceScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(FeedSourceScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(FeedSourceScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(FeedSourceScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      name: { type: StringWithAggregatesFilter },
      url: { type: StringWithAggregatesFilter },
      active: { type: BoolWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
    }),
  })

export const PermissionCreateInput = new GraphQLInputObjectType({
  name: 'PermissionCreateInput',
  fields: () => ({
    active: { type: GraphQLBoolean },
    role: { type: new GraphQLNonNull(UserRole) },
    type: { type: new GraphQLNonNull(PermissionType) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'PermissionUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: new GraphQLNonNull(UserRole) },
    type: { type: new GraphQLNonNull(PermissionType) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUpdateInput = new GraphQLInputObjectType({
  name: 'PermissionUpdateInput',
  fields: () => ({
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'PermissionUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionCreateManyInput = new GraphQLInputObjectType({
  name: 'PermissionCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: new GraphQLNonNull(UserRole) },
    type: { type: new GraphQLNonNull(PermissionType) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'PermissionUpdateManyMutationInput',
  fields: () => ({
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'PermissionUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const UserCreateInput = new GraphQLInputObjectType({
  name: 'UserCreateInput',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    posts: { type: PostCreateNestedManyWithoutAuthorInput },
  }),
})

export const UserUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'UserUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    posts: { type: PostUncheckedCreateNestedManyWithoutAuthorInput },
  }),
})

export const UserUpdateInput = new GraphQLInputObjectType({
  name: 'UserUpdateInput',
  fields: () => ({
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    posts: { type: PostUpdateManyWithoutAuthorInput },
  }),
})

export const UserUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'UserUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    posts: { type: PostUncheckedUpdateManyWithoutAuthorInput },
  }),
})

export const UserCreateManyInput = new GraphQLInputObjectType({
  name: 'UserCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'UserUpdateManyMutationInput',
  fields: () => ({
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'UserUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PostCreateInput = new GraphQLInputObjectType({
  name: 'PostCreateInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    author: { type: new GraphQLNonNull(UserCreateNestedOneWithoutPostsInput) },
    categories: { type: CategoryCreateNestedManyWithoutPostsInput },
    images: { type: PostImageCreateNestedManyWithoutPostInput },
  }),
})

export const PostUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'PostUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    images: { type: PostImageUncheckedCreateNestedManyWithoutPostInput },
  }),
})

export const PostUpdateInput = new GraphQLInputObjectType({
  name: 'PostUpdateInput',
  fields: () => ({
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    author: { type: UserUpdateOneRequiredWithoutPostsInput },
    categories: { type: CategoryUpdateManyWithoutPostsInput },
    images: { type: PostImageUpdateManyWithoutPostInput },
  }),
})

export const PostUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'PostUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    images: { type: PostImageUncheckedUpdateManyWithoutPostInput },
  }),
})

export const PostCreateManyInput = new GraphQLInputObjectType({
  name: 'PostCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PostUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'PostUpdateManyMutationInput',
  fields: () => ({
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PostUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'PostUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const CategoryCreateInput = new GraphQLInputObjectType({
  name: 'CategoryCreateInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    parent: { type: CategoryCreateNestedOneWithoutChildrenInput },
    children: { type: CategoryCreateNestedManyWithoutParentInput },
    posts: { type: PostCreateNestedManyWithoutCategoriesInput },
  }),
})

export const CategoryUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'CategoryUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    children: { type: CategoryUncheckedCreateNestedManyWithoutParentInput },
  }),
})

export const CategoryUpdateInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateInput',
  fields: () => ({
    name: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    parent: { type: CategoryUpdateOneWithoutChildrenInput },
    children: { type: CategoryUpdateManyWithoutParentInput },
    posts: { type: PostUpdateManyWithoutCategoriesInput },
  }),
})

export const CategoryUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'CategoryUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    children: { type: CategoryUncheckedUpdateManyWithoutParentInput },
  }),
})

export const CategoryCreateManyInput = new GraphQLInputObjectType({
  name: 'CategoryCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const CategoryUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateManyMutationInput',
  fields: () => ({
    name: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const CategoryUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'CategoryUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    parentId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FileCreateInput = new GraphQLInputObjectType({
  name: 'FileCreateInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    PostImage: { type: PostImageCreateNestedManyWithoutImageInput },
  }),
})

export const FileUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'FileUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    PostImage: { type: PostImageUncheckedCreateNestedManyWithoutImageInput },
  }),
})

export const FileUpdateInput = new GraphQLInputObjectType({
  name: 'FileUpdateInput',
  fields: () => ({
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    PostImage: { type: PostImageUpdateManyWithoutImageInput },
  }),
})

export const FileUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'FileUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    PostImage: { type: PostImageUncheckedUpdateManyWithoutImageInput },
  }),
})

export const FileCreateManyInput = new GraphQLInputObjectType({
  name: 'FileCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'FileUpdateManyMutationInput',
  fields: () => ({
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'FileUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const PostImageCreateInput = new GraphQLInputObjectType({
  name: 'PostImageCreateInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    image: {
      type: new GraphQLNonNull(FileCreateNestedOneWithoutPostImageInput),
    },
    post: { type: new GraphQLNonNull(PostCreateNestedOneWithoutImagesInput) },
  }),
})

export const PostImageUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'PostImageUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: new GraphQLNonNull(GraphQLInt) },
    postId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
})

export const PostImageUpdateInput = new GraphQLInputObjectType({
  name: 'PostImageUpdateInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    image: { type: FileUpdateOneRequiredWithoutPostImageInput },
    post: { type: PostUpdateOneRequiredWithoutImagesInput },
  }),
})

export const PostImageUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'PostImageUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
  }),
})

export const PostImageCreateManyInput = new GraphQLInputObjectType({
  name: 'PostImageCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: new GraphQLNonNull(GraphQLInt) },
    postId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
})

export const PostImageUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'PostImageUpdateManyMutationInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
  }),
})

export const PostImageUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'PostImageUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: GraphQLInt },
    postId: { type: GraphQLInt },
  }),
})

export const FeedSourceCreateInput = new GraphQLInputObjectType({
  name: 'FeedSourceCreateInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'FeedSourceUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceUpdateInput = new GraphQLInputObjectType({
  name: 'FeedSourceUpdateInput',
  fields: () => ({
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'FeedSourceUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceCreateManyInput = new GraphQLInputObjectType({
  name: 'FeedSourceCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'FeedSourceUpdateManyMutationInput',
  fields: () => ({
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FeedSourceUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'FeedSourceUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const IntFilter = new GraphQLInputObjectType({
  name: 'IntFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntFilter },
  }),
})

export const BoolFilter = new GraphQLInputObjectType({
  name: 'BoolFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolFilter },
  }),
})

export const EnumUserRoleFilter = new GraphQLInputObjectType({
  name: 'EnumUserRoleFilter',
  fields: () => ({
    equals: { type: UserRole },
    in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    not: { type: NestedEnumUserRoleFilter },
  }),
})

export const EnumPermissionTypeFilter = new GraphQLInputObjectType({
  name: 'EnumPermissionTypeFilter',
  fields: () => ({
    equals: { type: PermissionType },
    in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    not: { type: NestedEnumPermissionTypeFilter },
  }),
})

export const StringFilter = new GraphQLInputObjectType({
  name: 'StringFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringFilter },
  }),
})

export const JsonNullableFilter = new GraphQLInputObjectType({
  name: 'JsonNullableFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
  }),
})

export const PermissionRoleTypeModelCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'PermissionRoleTypeModelCompoundUniqueInput',
    fields: () => ({
      role: { type: new GraphQLNonNull(UserRole) },
      type: { type: new GraphQLNonNull(PermissionType) },
      model: { type: new GraphQLNonNull(GraphQLString) },
    }),
  })

export const IntWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'IntWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _avg: { type: NestedFloatFilter },
    avg: { type: NestedFloatFilter },
    _sum: { type: NestedIntFilter },
    sum: { type: NestedIntFilter },
    _min: { type: NestedIntFilter },
    min: { type: NestedIntFilter },
    _max: { type: NestedIntFilter },
    max: { type: NestedIntFilter },
  }),
})

export const BoolWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'BoolWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedBoolFilter },
    min: { type: NestedBoolFilter },
    _max: { type: NestedBoolFilter },
    max: { type: NestedBoolFilter },
  }),
})

export const EnumUserRoleWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'EnumUserRoleWithAggregatesFilter',
  fields: () => ({
    equals: { type: UserRole },
    in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    not: { type: NestedEnumUserRoleWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedEnumUserRoleFilter },
    min: { type: NestedEnumUserRoleFilter },
    _max: { type: NestedEnumUserRoleFilter },
    max: { type: NestedEnumUserRoleFilter },
  }),
})

export const EnumPermissionTypeWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'EnumPermissionTypeWithAggregatesFilter',
    fields: () => ({
      equals: { type: PermissionType },
      in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      not: { type: NestedEnumPermissionTypeWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumPermissionTypeFilter },
      min: { type: NestedEnumPermissionTypeFilter },
      _max: { type: NestedEnumPermissionTypeFilter },
      max: { type: NestedEnumPermissionTypeFilter },
    }),
  })

export const StringWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'StringWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedStringFilter },
    min: { type: NestedStringFilter },
    _max: { type: NestedStringFilter },
    max: { type: NestedStringFilter },
  }),
})

export const JsonNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'JsonNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _min: { type: NestedJsonNullableFilter },
    min: { type: NestedJsonNullableFilter },
    _max: { type: NestedJsonNullableFilter },
    max: { type: NestedJsonNullableFilter },
  }),
})

export const StringNullableFilter = new GraphQLInputObjectType({
  name: 'StringNullableFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringNullableFilter },
  }),
})

export const DateTimeNullableFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableFilter },
  }),
})

export const DateTimeFilter = new GraphQLInputObjectType({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeFilter },
  }),
})

export const PostListRelationFilter = new GraphQLInputObjectType({
  name: 'PostListRelationFilter',
  fields: () => ({
    every: { type: PostWhereInput },
    some: { type: PostWhereInput },
    none: { type: PostWhereInput },
  }),
})

export const StringNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'StringNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _min: { type: NestedStringNullableFilter },
    min: { type: NestedStringNullableFilter },
    _max: { type: NestedStringNullableFilter },
    max: { type: NestedStringNullableFilter },
  }),
})

export const DateTimeNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _min: { type: NestedDateTimeNullableFilter },
    min: { type: NestedDateTimeNullableFilter },
    _max: { type: NestedDateTimeNullableFilter },
    max: { type: NestedDateTimeNullableFilter },
  }),
})

export const DateTimeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'DateTimeWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedDateTimeFilter },
    min: { type: NestedDateTimeFilter },
    _max: { type: NestedDateTimeFilter },
    max: { type: NestedDateTimeFilter },
  }),
})

export const EnumPostStatusFilter = new GraphQLInputObjectType({
  name: 'EnumPostStatusFilter',
  fields: () => ({
    equals: { type: PostStatus },
    in: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
    not: { type: NestedEnumPostStatusFilter },
  }),
})

export const UserRelationFilter = new GraphQLInputObjectType({
  name: 'UserRelationFilter',
  fields: () => ({
    is: { type: UserWhereInput },
    isNot: { type: UserWhereInput },
  }),
})

export const CategoryListRelationFilter = new GraphQLInputObjectType({
  name: 'CategoryListRelationFilter',
  fields: () => ({
    every: { type: CategoryWhereInput },
    some: { type: CategoryWhereInput },
    none: { type: CategoryWhereInput },
  }),
})

export const PostImageListRelationFilter = new GraphQLInputObjectType({
  name: 'PostImageListRelationFilter',
  fields: () => ({
    every: { type: PostImageWhereInput },
    some: { type: PostImageWhereInput },
    none: { type: PostImageWhereInput },
  }),
})

export const EnumPostStatusWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'EnumPostStatusWithAggregatesFilter',
  fields: () => ({
    equals: { type: PostStatus },
    in: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
    not: { type: NestedEnumPostStatusWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedEnumPostStatusFilter },
    min: { type: NestedEnumPostStatusFilter },
    _max: { type: NestedEnumPostStatusFilter },
    max: { type: NestedEnumPostStatusFilter },
  }),
})

export const IntNullableFilter = new GraphQLInputObjectType({
  name: 'IntNullableFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableFilter },
  }),
})

export const CategoryRelationFilter = new GraphQLInputObjectType({
  name: 'CategoryRelationFilter',
  fields: () => ({
    is: { type: CategoryWhereInput },
    isNot: { type: CategoryWhereInput },
  }),
})

export const IntNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'IntNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _avg: { type: NestedFloatNullableFilter },
    avg: { type: NestedFloatNullableFilter },
    _sum: { type: NestedIntNullableFilter },
    sum: { type: NestedIntNullableFilter },
    _min: { type: NestedIntNullableFilter },
    min: { type: NestedIntNullableFilter },
    _max: { type: NestedIntNullableFilter },
    max: { type: NestedIntNullableFilter },
  }),
})

export const StringNullableListFilter = new GraphQLInputObjectType({
  name: 'StringNullableListFilter',
  fields: () => ({
    equals: { type: new GraphQLList(GraphQLString) },
    has: { type: GraphQLString },
    hasEvery: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    hasSome: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    isEmpty: { type: GraphQLBoolean },
  }),
})

export const FileBucketPathCompoundUniqueInput = new GraphQLInputObjectType({
  name: 'FileBucketPathCompoundUniqueInput',
  fields: () => ({
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
  }),
})

export const FileRelationFilter = new GraphQLInputObjectType({
  name: 'FileRelationFilter',
  fields: () => ({
    is: { type: FileWhereInput },
    isNot: { type: FileWhereInput },
  }),
})

export const PostRelationFilter = new GraphQLInputObjectType({
  name: 'PostRelationFilter',
  fields: () => ({
    is: { type: PostWhereInput },
    isNot: { type: PostWhereInput },
  }),
})

export const PostImageFileIdPostIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'PostImageFileIdPostIdCompoundUniqueInput',
    fields: () => ({
      fileId: { type: new GraphQLNonNull(GraphQLInt) },
      postId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const BoolFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'BoolFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLBoolean },
  }),
})

export const EnumUserRoleFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumUserRoleFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: UserRole },
    }),
  })

export const EnumPermissionTypeFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumPermissionTypeFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: PermissionType },
    }),
  })

export const StringFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'StringFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLString },
  }),
})

export const IntFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'IntFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLInt },
    increment: { type: GraphQLInt },
    decrement: { type: GraphQLInt },
    multiply: { type: GraphQLInt },
    divide: { type: GraphQLInt },
  }),
})

export const PostCreateNestedManyWithoutAuthorInput =
  new GraphQLInputObjectType({
    name: 'PostCreateNestedManyWithoutAuthorInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(PostCreateWithoutAuthorInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostCreateOrConnectWithoutAuthorInput),
        ),
      },
      createMany: { type: PostCreateManyAuthorInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
      },
    }),
  })

export const PostUncheckedCreateNestedManyWithoutAuthorInput =
  new GraphQLInputObjectType({
    name: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(PostCreateWithoutAuthorInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostCreateOrConnectWithoutAuthorInput),
        ),
      },
      createMany: { type: PostCreateManyAuthorInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
      },
    }),
  })

export const NullableStringFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableStringFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLString },
    }),
  })

export const NullableDateTimeFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableDateTimeFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLDateTime },
    }),
  })

export const DateTimeFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'DateTimeFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLDateTime },
  }),
})

export const PostUpdateManyWithoutAuthorInput = new GraphQLInputObjectType({
  name: 'PostUpdateManyWithoutAuthorInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(PostCreateWithoutAuthorInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(PostCreateOrConnectWithoutAuthorInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(PostUpsertWithWhereUniqueWithoutAuthorInput),
      ),
    },
    createMany: { type: PostCreateManyAuthorInputEnvelope },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
    },
    set: { type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
    },
    delete: { type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)) },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(PostUpdateWithWhereUniqueWithoutAuthorInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(PostUpdateManyWithWhereWithoutAuthorInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(PostScalarWhereInput)),
    },
  }),
})

export const PostUncheckedUpdateManyWithoutAuthorInput =
  new GraphQLInputObjectType({
    name: 'PostUncheckedUpdateManyWithoutAuthorInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(PostCreateWithoutAuthorInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostCreateOrConnectWithoutAuthorInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(PostUpsertWithWhereUniqueWithoutAuthorInput),
        ),
      },
      createMany: { type: PostCreateManyAuthorInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
      },
      set: { type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)) },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(PostUpdateWithWhereUniqueWithoutAuthorInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(PostUpdateManyWithWhereWithoutAuthorInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(PostScalarWhereInput)),
      },
    }),
  })

export const UserCreateNestedOneWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserCreateNestedOneWithoutPostsInput',
  fields: () => ({
    create: { type: UserUncheckedCreateWithoutPostsInput },
    connectOrCreate: { type: UserCreateOrConnectWithoutPostsInput },
    connect: { type: UserWhereUniqueInput },
  }),
})

export const CategoryCreateNestedManyWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryCreateNestedManyWithoutPostsInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateWithoutPostsInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateOrConnectWithoutPostsInput),
        ),
      },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
    }),
  })

export const PostImageCreateNestedManyWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageCreateNestedManyWithoutPostInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateWithoutPostInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateOrConnectWithoutPostInput),
        ),
      },
      createMany: { type: PostImageCreateManyPostInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
    }),
  })

export const PostImageUncheckedCreateNestedManyWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedCreateNestedManyWithoutPostInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateWithoutPostInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateOrConnectWithoutPostInput),
        ),
      },
      createMany: { type: PostImageCreateManyPostInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
    }),
  })

export const EnumPostStatusFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumPostStatusFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: PostStatus },
    }),
  })

export const UserUpdateOneRequiredWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'UserUpdateOneRequiredWithoutPostsInput',
    fields: () => ({
      create: { type: UserUncheckedCreateWithoutPostsInput },
      connectOrCreate: { type: UserCreateOrConnectWithoutPostsInput },
      upsert: { type: UserUpsertWithoutPostsInput },
      connect: { type: UserWhereUniqueInput },
      update: { type: UserUncheckedUpdateWithoutPostsInput },
    }),
  })

export const CategoryUpdateManyWithoutPostsInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateManyWithoutPostsInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryCreateWithoutPostsInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryCreateOrConnectWithoutPostsInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryUpsertWithWhereUniqueWithoutPostsInput),
      ),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    set: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryUpdateWithWhereUniqueWithoutPostsInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryUpdateManyWithWhereWithoutPostsInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(CategoryScalarWhereInput)),
    },
  }),
})

export const PostImageUpdateManyWithoutPostInput = new GraphQLInputObjectType({
  name: 'PostImageUpdateManyWithoutPostInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageCreateWithoutPostInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageCreateOrConnectWithoutPostInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageUpsertWithWhereUniqueWithoutPostInput),
      ),
    },
    createMany: { type: PostImageCreateManyPostInputEnvelope },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    set: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageUpdateWithWhereUniqueWithoutPostInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageUpdateManyWithWhereWithoutPostInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
    },
  }),
})

export const PostImageUncheckedUpdateManyWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedUpdateManyWithoutPostInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateWithoutPostInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateOrConnectWithoutPostInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageUpsertWithWhereUniqueWithoutPostInput),
        ),
      },
      createMany: { type: PostImageCreateManyPostInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      set: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageUpdateWithWhereUniqueWithoutPostInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageUpdateManyWithWhereWithoutPostInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
      },
    }),
  })

export const CategoryCreateNestedOneWithoutChildrenInput =
  new GraphQLInputObjectType({
    name: 'CategoryCreateNestedOneWithoutChildrenInput',
    fields: () => ({
      create: { type: CategoryUncheckedCreateWithoutChildrenInput },
      connectOrCreate: { type: CategoryCreateOrConnectWithoutChildrenInput },
      connect: { type: CategoryWhereUniqueInput },
    }),
  })

export const CategoryCreateNestedManyWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryCreateNestedManyWithoutParentInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateWithoutParentInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateOrConnectWithoutParentInput),
        ),
      },
      createMany: { type: CategoryCreateManyParentInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
    }),
  })

export const PostCreateNestedManyWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostCreateNestedManyWithoutCategoriesInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostCreateWithoutCategoriesInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostCreateOrConnectWithoutCategoriesInput),
        ),
      },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
      },
    }),
  })

export const CategoryUncheckedCreateNestedManyWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedCreateNestedManyWithoutParentInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateWithoutParentInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateOrConnectWithoutParentInput),
        ),
      },
      createMany: { type: CategoryCreateManyParentInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
    }),
  })

export const CategoryUpdateOneWithoutChildrenInput = new GraphQLInputObjectType(
  {
    name: 'CategoryUpdateOneWithoutChildrenInput',
    fields: () => ({
      create: { type: CategoryUncheckedCreateWithoutChildrenInput },
      connectOrCreate: { type: CategoryCreateOrConnectWithoutChildrenInput },
      upsert: { type: CategoryUpsertWithoutChildrenInput },
      connect: { type: CategoryWhereUniqueInput },
      disconnect: { type: GraphQLBoolean },
      delete: { type: GraphQLBoolean },
      update: { type: CategoryUncheckedUpdateWithoutChildrenInput },
    }),
  },
)

export const CategoryUpdateManyWithoutParentInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateManyWithoutParentInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryCreateWithoutParentInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryCreateOrConnectWithoutParentInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryUpsertWithWhereUniqueWithoutParentInput),
      ),
    },
    createMany: { type: CategoryCreateManyParentInputEnvelope },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    set: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryUpdateWithWhereUniqueWithoutParentInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(CategoryUpdateManyWithWhereWithoutParentInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(CategoryScalarWhereInput)),
    },
  }),
})

export const PostUpdateManyWithoutCategoriesInput = new GraphQLInputObjectType({
  name: 'PostUpdateManyWithoutCategoriesInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(PostCreateWithoutCategoriesInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(PostCreateOrConnectWithoutCategoriesInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(PostUpsertWithWhereUniqueWithoutCategoriesInput),
      ),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
    },
    set: { type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)),
    },
    delete: { type: new GraphQLList(new GraphQLNonNull(PostWhereUniqueInput)) },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(PostUpdateWithWhereUniqueWithoutCategoriesInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(PostUpdateManyWithWhereWithoutCategoriesInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(PostScalarWhereInput)),
    },
  }),
})

export const NullableIntFieldUpdateOperationsInput = new GraphQLInputObjectType(
  {
    name: 'NullableIntFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLInt },
      increment: { type: GraphQLInt },
      decrement: { type: GraphQLInt },
      multiply: { type: GraphQLInt },
      divide: { type: GraphQLInt },
    }),
  },
)

export const CategoryUncheckedUpdateManyWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedUpdateManyWithoutParentInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateWithoutParentInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryCreateOrConnectWithoutParentInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryUpsertWithWhereUniqueWithoutParentInput),
        ),
      },
      createMany: { type: CategoryCreateManyParentInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
      set: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(CategoryWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryUpdateWithWhereUniqueWithoutParentInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(CategoryUpdateManyWithWhereWithoutParentInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(CategoryScalarWhereInput)),
      },
    }),
  })

export const FileCreatetagsInput = new GraphQLInputObjectType({
  name: 'FileCreatetagsInput',
  fields: () => ({
    set: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
  }),
})

export const PostImageCreateNestedManyWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageCreateNestedManyWithoutImageInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateWithoutImageInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateOrConnectWithoutImageInput),
        ),
      },
      createMany: { type: PostImageCreateManyImageInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
    }),
  })

export const PostImageUncheckedCreateNestedManyWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedCreateNestedManyWithoutImageInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateWithoutImageInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateOrConnectWithoutImageInput),
        ),
      },
      createMany: { type: PostImageCreateManyImageInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
    }),
  })

export const FileUpdatetagsInput = new GraphQLInputObjectType({
  name: 'FileUpdatetagsInput',
  fields: () => ({
    set: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    push: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const PostImageUpdateManyWithoutImageInput = new GraphQLInputObjectType({
  name: 'PostImageUpdateManyWithoutImageInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageCreateWithoutImageInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageCreateOrConnectWithoutImageInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageUpsertWithWhereUniqueWithoutImageInput),
      ),
    },
    createMany: { type: PostImageCreateManyImageInputEnvelope },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    set: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageUpdateWithWhereUniqueWithoutImageInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(PostImageUpdateManyWithWhereWithoutImageInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
    },
  }),
})

export const PostImageUncheckedUpdateManyWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedUpdateManyWithoutImageInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateWithoutImageInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageCreateOrConnectWithoutImageInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageUpsertWithWhereUniqueWithoutImageInput),
        ),
      },
      createMany: { type: PostImageCreateManyImageInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      set: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(PostImageWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageUpdateWithWhereUniqueWithoutImageInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(PostImageUpdateManyWithWhereWithoutImageInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
      },
    }),
  })

export const FileCreateManytagsInput = new GraphQLInputObjectType({
  name: 'FileCreateManytagsInput',
  fields: () => ({
    set: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
  }),
})

export const FileCreateNestedOneWithoutPostImageInput =
  new GraphQLInputObjectType({
    name: 'FileCreateNestedOneWithoutPostImageInput',
    fields: () => ({
      create: { type: FileUncheckedCreateWithoutPostImageInput },
      connectOrCreate: { type: FileCreateOrConnectWithoutPostImageInput },
      connect: { type: FileWhereUniqueInput },
    }),
  })

export const PostCreateNestedOneWithoutImagesInput = new GraphQLInputObjectType(
  {
    name: 'PostCreateNestedOneWithoutImagesInput',
    fields: () => ({
      create: { type: PostUncheckedCreateWithoutImagesInput },
      connectOrCreate: { type: PostCreateOrConnectWithoutImagesInput },
      connect: { type: PostWhereUniqueInput },
    }),
  },
)

export const FileUpdateOneRequiredWithoutPostImageInput =
  new GraphQLInputObjectType({
    name: 'FileUpdateOneRequiredWithoutPostImageInput',
    fields: () => ({
      create: { type: FileUncheckedCreateWithoutPostImageInput },
      connectOrCreate: { type: FileCreateOrConnectWithoutPostImageInput },
      upsert: { type: FileUpsertWithoutPostImageInput },
      connect: { type: FileWhereUniqueInput },
      update: { type: FileUncheckedUpdateWithoutPostImageInput },
    }),
  })

export const PostUpdateOneRequiredWithoutImagesInput =
  new GraphQLInputObjectType({
    name: 'PostUpdateOneRequiredWithoutImagesInput',
    fields: () => ({
      create: { type: PostUncheckedCreateWithoutImagesInput },
      connectOrCreate: { type: PostCreateOrConnectWithoutImagesInput },
      upsert: { type: PostUpsertWithoutImagesInput },
      connect: { type: PostWhereUniqueInput },
      update: { type: PostUncheckedUpdateWithoutImagesInput },
    }),
  })

export const NestedIntFilter = new GraphQLInputObjectType({
  name: 'NestedIntFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntFilter },
  }),
})

export const NestedBoolFilter = new GraphQLInputObjectType({
  name: 'NestedBoolFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolFilter },
  }),
})

export const NestedEnumUserRoleFilter = new GraphQLInputObjectType({
  name: 'NestedEnumUserRoleFilter',
  fields: () => ({
    equals: { type: UserRole },
    in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    not: { type: NestedEnumUserRoleFilter },
  }),
})

export const NestedEnumPermissionTypeFilter = new GraphQLInputObjectType({
  name: 'NestedEnumPermissionTypeFilter',
  fields: () => ({
    equals: { type: PermissionType },
    in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    not: { type: NestedEnumPermissionTypeFilter },
  }),
})

export const NestedStringFilter = new GraphQLInputObjectType({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringFilter },
  }),
})

export const NestedIntWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedIntWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _avg: { type: NestedFloatFilter },
    avg: { type: NestedFloatFilter },
    _sum: { type: NestedIntFilter },
    sum: { type: NestedIntFilter },
    _min: { type: NestedIntFilter },
    min: { type: NestedIntFilter },
    _max: { type: NestedIntFilter },
    max: { type: NestedIntFilter },
  }),
})

export const NestedFloatFilter = new GraphQLInputObjectType({
  name: 'NestedFloatFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLFloat)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLFloat)) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatFilter },
  }),
})

export const NestedBoolWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedBoolWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedBoolFilter },
    min: { type: NestedBoolFilter },
    _max: { type: NestedBoolFilter },
    max: { type: NestedBoolFilter },
  }),
})

export const NestedEnumUserRoleWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumUserRoleWithAggregatesFilter',
    fields: () => ({
      equals: { type: UserRole },
      in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
      not: { type: NestedEnumUserRoleWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumUserRoleFilter },
      min: { type: NestedEnumUserRoleFilter },
      _max: { type: NestedEnumUserRoleFilter },
      max: { type: NestedEnumUserRoleFilter },
    }),
  })

export const NestedEnumPermissionTypeWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumPermissionTypeWithAggregatesFilter',
    fields: () => ({
      equals: { type: PermissionType },
      in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      not: { type: NestedEnumPermissionTypeWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumPermissionTypeFilter },
      min: { type: NestedEnumPermissionTypeFilter },
      _max: { type: NestedEnumPermissionTypeFilter },
      max: { type: NestedEnumPermissionTypeFilter },
    }),
  })

export const NestedStringWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedStringWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedStringFilter },
    min: { type: NestedStringFilter },
    _max: { type: NestedStringFilter },
    max: { type: NestedStringFilter },
  }),
})

export const NestedIntNullableFilter = new GraphQLInputObjectType({
  name: 'NestedIntNullableFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableFilter },
  }),
})

export const NestedJsonNullableFilter = new GraphQLInputObjectType({
  name: 'NestedJsonNullableFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
  }),
})

export const NestedStringNullableFilter = new GraphQLInputObjectType({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringNullableFilter },
  }),
})

export const NestedDateTimeNullableFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeNullableFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableFilter },
  }),
})

export const NestedDateTimeFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeFilter },
  }),
})

export const NestedStringNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedStringNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLString },
      in: { type: new GraphQLList(GraphQLString) },
      notIn: { type: new GraphQLList(GraphQLString) },
      lt: { type: GraphQLString },
      lte: { type: GraphQLString },
      gt: { type: GraphQLString },
      gte: { type: GraphQLString },
      contains: { type: GraphQLString },
      startsWith: { type: GraphQLString },
      endsWith: { type: GraphQLString },
      not: { type: NestedStringNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      count: { type: NestedIntNullableFilter },
      _min: { type: NestedStringNullableFilter },
      min: { type: NestedStringNullableFilter },
      _max: { type: NestedStringNullableFilter },
      max: { type: NestedStringNullableFilter },
    }),
  })

export const NestedDateTimeNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedDateTimeNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLDateTime },
      in: { type: new GraphQLList(GraphQLDateTime) },
      notIn: { type: new GraphQLList(GraphQLDateTime) },
      lt: { type: GraphQLDateTime },
      lte: { type: GraphQLDateTime },
      gt: { type: GraphQLDateTime },
      gte: { type: GraphQLDateTime },
      not: { type: NestedDateTimeNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      count: { type: NestedIntNullableFilter },
      _min: { type: NestedDateTimeNullableFilter },
      min: { type: NestedDateTimeNullableFilter },
      _max: { type: NestedDateTimeNullableFilter },
      max: { type: NestedDateTimeNullableFilter },
    }),
  })

export const NestedDateTimeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedDateTimeFilter },
    min: { type: NestedDateTimeFilter },
    _max: { type: NestedDateTimeFilter },
    max: { type: NestedDateTimeFilter },
  }),
})

export const NestedEnumPostStatusFilter = new GraphQLInputObjectType({
  name: 'NestedEnumPostStatusFilter',
  fields: () => ({
    equals: { type: PostStatus },
    in: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
    not: { type: NestedEnumPostStatusFilter },
  }),
})

export const NestedEnumPostStatusWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumPostStatusWithAggregatesFilter',
    fields: () => ({
      equals: { type: PostStatus },
      in: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(PostStatus)) },
      not: { type: NestedEnumPostStatusWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumPostStatusFilter },
      min: { type: NestedEnumPostStatusFilter },
      _max: { type: NestedEnumPostStatusFilter },
      max: { type: NestedEnumPostStatusFilter },
    }),
  })

export const NestedIntNullableWithAggregatesFilter = new GraphQLInputObjectType(
  {
    name: 'NestedIntNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLInt },
      in: { type: new GraphQLList(GraphQLInt) },
      notIn: { type: new GraphQLList(GraphQLInt) },
      lt: { type: GraphQLInt },
      lte: { type: GraphQLInt },
      gt: { type: GraphQLInt },
      gte: { type: GraphQLInt },
      not: { type: NestedIntNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      count: { type: NestedIntNullableFilter },
      _avg: { type: NestedFloatNullableFilter },
      avg: { type: NestedFloatNullableFilter },
      _sum: { type: NestedIntNullableFilter },
      sum: { type: NestedIntNullableFilter },
      _min: { type: NestedIntNullableFilter },
      min: { type: NestedIntNullableFilter },
      _max: { type: NestedIntNullableFilter },
      max: { type: NestedIntNullableFilter },
    }),
  },
)

export const NestedFloatNullableFilter = new GraphQLInputObjectType({
  name: 'NestedFloatNullableFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(GraphQLFloat) },
    notIn: { type: new GraphQLList(GraphQLFloat) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatNullableFilter },
  }),
})

export const PostCreateWithoutAuthorInput = new GraphQLInputObjectType({
  name: 'PostCreateWithoutAuthorInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    categories: { type: CategoryCreateNestedManyWithoutPostsInput },
    images: { type: PostImageCreateNestedManyWithoutPostInput },
  }),
})

export const PostUncheckedCreateWithoutAuthorInput = new GraphQLInputObjectType(
  {
    name: 'PostUncheckedCreateWithoutAuthorInput',
    fields: () => ({
      id: { type: GraphQLInt },
      title: { type: new GraphQLNonNull(GraphQLString) },
      slug: { type: new GraphQLNonNull(GraphQLString) },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      images: { type: PostImageUncheckedCreateNestedManyWithoutPostInput },
    }),
  },
)

export const PostCreateOrConnectWithoutAuthorInput = new GraphQLInputObjectType(
  {
    name: 'PostCreateOrConnectWithoutAuthorInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(PostUncheckedCreateWithoutAuthorInput),
      },
    }),
  },
)

export const PostCreateManyAuthorInputEnvelope = new GraphQLInputObjectType({
  name: 'PostCreateManyAuthorInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(PostCreateManyAuthorInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const PostUpsertWithWhereUniqueWithoutAuthorInput =
  new GraphQLInputObjectType({
    name: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(PostUncheckedUpdateWithoutAuthorInput),
      },
      create: {
        type: new GraphQLNonNull(PostUncheckedCreateWithoutAuthorInput),
      },
    }),
  })

export const PostUpdateWithWhereUniqueWithoutAuthorInput =
  new GraphQLInputObjectType({
    name: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      data: { type: new GraphQLNonNull(PostUncheckedUpdateWithoutAuthorInput) },
    }),
  })

export const PostUpdateManyWithWhereWithoutAuthorInput =
  new GraphQLInputObjectType({
    name: 'PostUpdateManyWithWhereWithoutAuthorInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(PostUncheckedUpdateManyWithoutPostsInput),
      },
    }),
  })

export const PostScalarWhereInput = new GraphQLInputObjectType({
  name: 'PostScalarWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PostScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PostScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PostScalarWhereInput)) },
    id: { type: IntFilter },
    authorId: { type: IntFilter },
    title: { type: StringFilter },
    slug: { type: StringFilter },
    content: { type: StringNullableFilter },
    status: { type: EnumPostStatusFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const UserCreateWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserCreateWithoutPostsInput',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUncheckedCreateWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserUncheckedCreateWithoutPostsInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserCreateOrConnectWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserCreateOrConnectWithoutPostsInput',
  fields: () => ({
    where: { type: new GraphQLNonNull(UserWhereUniqueInput) },
    create: { type: new GraphQLNonNull(UserUncheckedCreateWithoutPostsInput) },
  }),
})

export const CategoryCreateWithoutPostsInput = new GraphQLInputObjectType({
  name: 'CategoryCreateWithoutPostsInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    parent: { type: CategoryCreateNestedOneWithoutChildrenInput },
    children: { type: CategoryCreateNestedManyWithoutParentInput },
  }),
})

export const CategoryUncheckedCreateWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedCreateWithoutPostsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      parentId: { type: GraphQLInt },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      children: { type: CategoryUncheckedCreateNestedManyWithoutParentInput },
    }),
  })

export const CategoryCreateOrConnectWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryCreateOrConnectWithoutPostsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(CategoryUncheckedCreateWithoutPostsInput),
      },
    }),
  })

export const PostImageCreateWithoutPostInput = new GraphQLInputObjectType({
  name: 'PostImageCreateWithoutPostInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    image: {
      type: new GraphQLNonNull(FileCreateNestedOneWithoutPostImageInput),
    },
  }),
})

export const PostImageUncheckedCreateWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedCreateWithoutPostInput',
    fields: () => ({
      id: { type: GraphQLInt },
      order: { type: GraphQLInt },
      featured: { type: GraphQLBoolean },
      fileId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const PostImageCreateOrConnectWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageCreateOrConnectWithoutPostInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(PostImageUncheckedCreateWithoutPostInput),
      },
    }),
  })

export const PostImageCreateManyPostInputEnvelope = new GraphQLInputObjectType({
  name: 'PostImageCreateManyPostInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(PostImageCreateManyPostInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const UserUpsertWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserUpsertWithoutPostsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(UserUncheckedUpdateWithoutPostsInput) },
    create: { type: new GraphQLNonNull(UserUncheckedCreateWithoutPostsInput) },
  }),
})

export const UserUpdateWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserUpdateWithoutPostsInput',
  fields: () => ({
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUncheckedUpdateWithoutPostsInput = new GraphQLInputObjectType({
  name: 'UserUncheckedUpdateWithoutPostsInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const CategoryUpsertWithWhereUniqueWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryUpsertWithWhereUniqueWithoutPostsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(CategoryUncheckedUpdateWithoutPostsInput),
      },
      create: {
        type: new GraphQLNonNull(CategoryUncheckedCreateWithoutPostsInput),
      },
    }),
  })

export const CategoryUpdateWithWhereUniqueWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryUpdateWithWhereUniqueWithoutPostsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(CategoryUncheckedUpdateWithoutPostsInput),
      },
    }),
  })

export const CategoryUpdateManyWithWhereWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryUpdateManyWithWhereWithoutPostsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(
          CategoryUncheckedUpdateManyWithoutCategoriesInput,
        ),
      },
    }),
  })

export const CategoryScalarWhereInput = new GraphQLInputObjectType({
  name: 'CategoryScalarWhereInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(new GraphQLNonNull(CategoryScalarWhereInput)),
    },
    OR: { type: new GraphQLList(new GraphQLNonNull(CategoryScalarWhereInput)) },
    NOT: {
      type: new GraphQLList(new GraphQLNonNull(CategoryScalarWhereInput)),
    },
    id: { type: IntFilter },
    name: { type: StringFilter },
    parentId: { type: IntNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const PostImageUpsertWithWhereUniqueWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUpsertWithWhereUniqueWithoutPostInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(PostImageUncheckedUpdateWithoutPostInput),
      },
      create: {
        type: new GraphQLNonNull(PostImageUncheckedCreateWithoutPostInput),
      },
    }),
  })

export const PostImageUpdateWithWhereUniqueWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUpdateWithWhereUniqueWithoutPostInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(PostImageUncheckedUpdateWithoutPostInput),
      },
    }),
  })

export const PostImageUpdateManyWithWhereWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUpdateManyWithWhereWithoutPostInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(
          PostImageUncheckedUpdateManyWithoutImagesInput,
        ),
      },
    }),
  })

export const PostImageScalarWhereInput = new GraphQLInputObjectType({
  name: 'PostImageScalarWhereInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
    },
    OR: {
      type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
    },
    NOT: {
      type: new GraphQLList(new GraphQLNonNull(PostImageScalarWhereInput)),
    },
    id: { type: IntFilter },
    order: { type: IntFilter },
    featured: { type: BoolFilter },
    fileId: { type: IntFilter },
    postId: { type: IntFilter },
  }),
})

export const CategoryCreateWithoutChildrenInput = new GraphQLInputObjectType({
  name: 'CategoryCreateWithoutChildrenInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    parent: { type: CategoryCreateNestedOneWithoutChildrenInput },
    posts: { type: PostCreateNestedManyWithoutCategoriesInput },
  }),
})

export const CategoryUncheckedCreateWithoutChildrenInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedCreateWithoutChildrenInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      parentId: { type: GraphQLInt },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const CategoryCreateOrConnectWithoutChildrenInput =
  new GraphQLInputObjectType({
    name: 'CategoryCreateOrConnectWithoutChildrenInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(CategoryUncheckedCreateWithoutChildrenInput),
      },
    }),
  })

export const CategoryCreateWithoutParentInput = new GraphQLInputObjectType({
  name: 'CategoryCreateWithoutParentInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    children: { type: CategoryCreateNestedManyWithoutParentInput },
    posts: { type: PostCreateNestedManyWithoutCategoriesInput },
  }),
})

export const CategoryUncheckedCreateWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedCreateWithoutParentInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      children: { type: CategoryUncheckedCreateNestedManyWithoutParentInput },
    }),
  })

export const CategoryCreateOrConnectWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryCreateOrConnectWithoutParentInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(CategoryUncheckedCreateWithoutParentInput),
      },
    }),
  })

export const CategoryCreateManyParentInputEnvelope = new GraphQLInputObjectType(
  {
    name: 'CategoryCreateManyParentInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(CategoryCreateManyParentInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  },
)

export const PostCreateWithoutCategoriesInput = new GraphQLInputObjectType({
  name: 'PostCreateWithoutCategoriesInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    author: { type: new GraphQLNonNull(UserCreateNestedOneWithoutPostsInput) },
    images: { type: PostImageCreateNestedManyWithoutPostInput },
  }),
})

export const PostUncheckedCreateWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostUncheckedCreateWithoutCategoriesInput',
    fields: () => ({
      id: { type: GraphQLInt },
      authorId: { type: new GraphQLNonNull(GraphQLInt) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      slug: { type: new GraphQLNonNull(GraphQLString) },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      images: { type: PostImageUncheckedCreateNestedManyWithoutPostInput },
    }),
  })

export const PostCreateOrConnectWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostCreateOrConnectWithoutCategoriesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(PostUncheckedCreateWithoutCategoriesInput),
      },
    }),
  })

export const CategoryUpsertWithoutChildrenInput = new GraphQLInputObjectType({
  name: 'CategoryUpsertWithoutChildrenInput',
  fields: () => ({
    update: {
      type: new GraphQLNonNull(CategoryUncheckedUpdateWithoutChildrenInput),
    },
    create: {
      type: new GraphQLNonNull(CategoryUncheckedCreateWithoutChildrenInput),
    },
  }),
})

export const CategoryUpdateWithoutChildrenInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateWithoutChildrenInput',
  fields: () => ({
    name: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    parent: { type: CategoryUpdateOneWithoutChildrenInput },
    posts: { type: PostUpdateManyWithoutCategoriesInput },
  }),
})

export const CategoryUncheckedUpdateWithoutChildrenInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedUpdateWithoutChildrenInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      parentId: { type: GraphQLInt },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const CategoryUpsertWithWhereUniqueWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUpsertWithWhereUniqueWithoutParentInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(CategoryUncheckedUpdateWithoutParentInput),
      },
      create: {
        type: new GraphQLNonNull(CategoryUncheckedCreateWithoutParentInput),
      },
    }),
  })

export const CategoryUpdateWithWhereUniqueWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUpdateWithWhereUniqueWithoutParentInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(CategoryUncheckedUpdateWithoutParentInput),
      },
    }),
  })

export const CategoryUpdateManyWithWhereWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUpdateManyWithWhereWithoutParentInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(CategoryScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(
          CategoryUncheckedUpdateManyWithoutChildrenInput,
        ),
      },
    }),
  })

export const PostUpsertWithWhereUniqueWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostUpsertWithWhereUniqueWithoutCategoriesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(PostUncheckedUpdateWithoutCategoriesInput),
      },
      create: {
        type: new GraphQLNonNull(PostUncheckedCreateWithoutCategoriesInput),
      },
    }),
  })

export const PostUpdateWithWhereUniqueWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostUpdateWithWhereUniqueWithoutCategoriesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(PostUncheckedUpdateWithoutCategoriesInput),
      },
    }),
  })

export const PostUpdateManyWithWhereWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostUpdateManyWithWhereWithoutCategoriesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(PostUncheckedUpdateManyWithoutPostsInput),
      },
    }),
  })

export const PostImageCreateWithoutImageInput = new GraphQLInputObjectType({
  name: 'PostImageCreateWithoutImageInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    post: { type: new GraphQLNonNull(PostCreateNestedOneWithoutImagesInput) },
  }),
})

export const PostImageUncheckedCreateWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedCreateWithoutImageInput',
    fields: () => ({
      id: { type: GraphQLInt },
      order: { type: GraphQLInt },
      featured: { type: GraphQLBoolean },
      postId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const PostImageCreateOrConnectWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageCreateOrConnectWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(PostImageUncheckedCreateWithoutImageInput),
      },
    }),
  })

export const PostImageCreateManyImageInputEnvelope = new GraphQLInputObjectType(
  {
    name: 'PostImageCreateManyImageInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(PostImageCreateManyImageInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  },
)

export const PostImageUpsertWithWhereUniqueWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUpsertWithWhereUniqueWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(PostImageUncheckedUpdateWithoutImageInput),
      },
      create: {
        type: new GraphQLNonNull(PostImageUncheckedCreateWithoutImageInput),
      },
    }),
  })

export const PostImageUpdateWithWhereUniqueWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUpdateWithWhereUniqueWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(PostImageUncheckedUpdateWithoutImageInput),
      },
    }),
  })

export const PostImageUpdateManyWithWhereWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUpdateManyWithWhereWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostImageScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(
          PostImageUncheckedUpdateManyWithoutPostImageInput,
        ),
      },
    }),
  })

export const FileCreateWithoutPostImageInput = new GraphQLInputObjectType({
  name: 'FileCreateWithoutPostImageInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUncheckedCreateWithoutPostImageInput =
  new GraphQLInputObjectType({
    name: 'FileUncheckedCreateWithoutPostImageInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      bucket: { type: new GraphQLNonNull(GraphQLString) },
      mimeType: { type: new GraphQLNonNull(GraphQLString) },
      path: { type: new GraphQLNonNull(GraphQLString) },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      meta: { type: GraphQLJSON },
      tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    }),
  })

export const FileCreateOrConnectWithoutPostImageInput =
  new GraphQLInputObjectType({
    name: 'FileCreateOrConnectWithoutPostImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(FileUncheckedCreateWithoutPostImageInput),
      },
    }),
  })

export const PostCreateWithoutImagesInput = new GraphQLInputObjectType({
  name: 'PostCreateWithoutImagesInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    author: { type: new GraphQLNonNull(UserCreateNestedOneWithoutPostsInput) },
    categories: { type: CategoryCreateNestedManyWithoutPostsInput },
  }),
})

export const PostUncheckedCreateWithoutImagesInput = new GraphQLInputObjectType(
  {
    name: 'PostUncheckedCreateWithoutImagesInput',
    fields: () => ({
      id: { type: GraphQLInt },
      authorId: { type: new GraphQLNonNull(GraphQLInt) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      slug: { type: new GraphQLNonNull(GraphQLString) },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  },
)

export const PostCreateOrConnectWithoutImagesInput = new GraphQLInputObjectType(
  {
    name: 'PostCreateOrConnectWithoutImagesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PostWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(PostUncheckedCreateWithoutImagesInput),
      },
    }),
  },
)

export const FileUpsertWithoutPostImageInput = new GraphQLInputObjectType({
  name: 'FileUpsertWithoutPostImageInput',
  fields: () => ({
    update: {
      type: new GraphQLNonNull(FileUncheckedUpdateWithoutPostImageInput),
    },
    create: {
      type: new GraphQLNonNull(FileUncheckedCreateWithoutPostImageInput),
    },
  }),
})

export const FileUpdateWithoutPostImageInput = new GraphQLInputObjectType({
  name: 'FileUpdateWithoutPostImageInput',
  fields: () => ({
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUncheckedUpdateWithoutPostImageInput =
  new GraphQLInputObjectType({
    name: 'FileUncheckedUpdateWithoutPostImageInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      bucket: { type: GraphQLString },
      mimeType: { type: GraphQLString },
      path: { type: GraphQLString },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      meta: { type: GraphQLJSON },
      tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    }),
  })

export const PostUpsertWithoutImagesInput = new GraphQLInputObjectType({
  name: 'PostUpsertWithoutImagesInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(PostUncheckedUpdateWithoutImagesInput) },
    create: { type: new GraphQLNonNull(PostUncheckedCreateWithoutImagesInput) },
  }),
})

export const PostUpdateWithoutImagesInput = new GraphQLInputObjectType({
  name: 'PostUpdateWithoutImagesInput',
  fields: () => ({
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    author: { type: UserUpdateOneRequiredWithoutPostsInput },
    categories: { type: CategoryUpdateManyWithoutPostsInput },
  }),
})

export const PostUncheckedUpdateWithoutImagesInput = new GraphQLInputObjectType(
  {
    name: 'PostUncheckedUpdateWithoutImagesInput',
    fields: () => ({
      id: { type: GraphQLInt },
      authorId: { type: GraphQLInt },
      title: { type: GraphQLString },
      slug: { type: GraphQLString },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  },
)

export const PostCreateManyAuthorInput = new GraphQLInputObjectType({
  name: 'PostCreateManyAuthorInput',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PostUpdateWithoutAuthorInput = new GraphQLInputObjectType({
  name: 'PostUpdateWithoutAuthorInput',
  fields: () => ({
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    categories: { type: CategoryUpdateManyWithoutPostsInput },
    images: { type: PostImageUpdateManyWithoutPostInput },
  }),
})

export const PostUncheckedUpdateWithoutAuthorInput = new GraphQLInputObjectType(
  {
    name: 'PostUncheckedUpdateWithoutAuthorInput',
    fields: () => ({
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      slug: { type: GraphQLString },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      images: { type: PostImageUncheckedUpdateManyWithoutPostInput },
    }),
  },
)

export const PostUncheckedUpdateManyWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'PostUncheckedUpdateManyWithoutPostsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      slug: { type: GraphQLString },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const PostImageCreateManyPostInput = new GraphQLInputObjectType({
  name: 'PostImageCreateManyPostInput',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    fileId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
})

export const CategoryUpdateWithoutPostsInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateWithoutPostsInput',
  fields: () => ({
    name: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    parent: { type: CategoryUpdateOneWithoutChildrenInput },
    children: { type: CategoryUpdateManyWithoutParentInput },
  }),
})

export const CategoryUncheckedUpdateWithoutPostsInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedUpdateWithoutPostsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      parentId: { type: GraphQLInt },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      children: { type: CategoryUncheckedUpdateManyWithoutParentInput },
    }),
  })

export const CategoryUncheckedUpdateManyWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedUpdateManyWithoutCategoriesInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      parentId: { type: GraphQLInt },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const PostImageUpdateWithoutPostInput = new GraphQLInputObjectType({
  name: 'PostImageUpdateWithoutPostInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    image: { type: FileUpdateOneRequiredWithoutPostImageInput },
  }),
})

export const PostImageUncheckedUpdateWithoutPostInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedUpdateWithoutPostInput',
    fields: () => ({
      id: { type: GraphQLInt },
      order: { type: GraphQLInt },
      featured: { type: GraphQLBoolean },
      fileId: { type: GraphQLInt },
    }),
  })

export const PostImageUncheckedUpdateManyWithoutImagesInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedUpdateManyWithoutImagesInput',
    fields: () => ({
      id: { type: GraphQLInt },
      order: { type: GraphQLInt },
      featured: { type: GraphQLBoolean },
      fileId: { type: GraphQLInt },
    }),
  })

export const CategoryCreateManyParentInput = new GraphQLInputObjectType({
  name: 'CategoryCreateManyParentInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const CategoryUpdateWithoutParentInput = new GraphQLInputObjectType({
  name: 'CategoryUpdateWithoutParentInput',
  fields: () => ({
    name: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    children: { type: CategoryUpdateManyWithoutParentInput },
    posts: { type: PostUpdateManyWithoutCategoriesInput },
  }),
})

export const CategoryUncheckedUpdateWithoutParentInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedUpdateWithoutParentInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      children: { type: CategoryUncheckedUpdateManyWithoutParentInput },
    }),
  })

export const CategoryUncheckedUpdateManyWithoutChildrenInput =
  new GraphQLInputObjectType({
    name: 'CategoryUncheckedUpdateManyWithoutChildrenInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const PostUpdateWithoutCategoriesInput = new GraphQLInputObjectType({
  name: 'PostUpdateWithoutCategoriesInput',
  fields: () => ({
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: PostStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    author: { type: UserUpdateOneRequiredWithoutPostsInput },
    images: { type: PostImageUpdateManyWithoutPostInput },
  }),
})

export const PostUncheckedUpdateWithoutCategoriesInput =
  new GraphQLInputObjectType({
    name: 'PostUncheckedUpdateWithoutCategoriesInput',
    fields: () => ({
      id: { type: GraphQLInt },
      authorId: { type: GraphQLInt },
      title: { type: GraphQLString },
      slug: { type: GraphQLString },
      content: { type: GraphQLString },
      status: { type: PostStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      images: { type: PostImageUncheckedUpdateManyWithoutPostInput },
    }),
  })

export const PostImageCreateManyImageInput = new GraphQLInputObjectType({
  name: 'PostImageCreateManyImageInput',
  fields: () => ({
    id: { type: GraphQLInt },
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    postId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
})

export const PostImageUpdateWithoutImageInput = new GraphQLInputObjectType({
  name: 'PostImageUpdateWithoutImageInput',
  fields: () => ({
    order: { type: GraphQLInt },
    featured: { type: GraphQLBoolean },
    post: { type: PostUpdateOneRequiredWithoutImagesInput },
  }),
})

export const PostImageUncheckedUpdateWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedUpdateWithoutImageInput',
    fields: () => ({
      id: { type: GraphQLInt },
      order: { type: GraphQLInt },
      featured: { type: GraphQLBoolean },
      postId: { type: GraphQLInt },
    }),
  })

export const PostImageUncheckedUpdateManyWithoutPostImageInput =
  new GraphQLInputObjectType({
    name: 'PostImageUncheckedUpdateManyWithoutPostImageInput',
    fields: () => ({
      id: { type: GraphQLInt },
      order: { type: GraphQLInt },
      featured: { type: GraphQLBoolean },
      postId: { type: GraphQLInt },
    }),
  })
