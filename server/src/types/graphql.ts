import { GraphQLResolveInfo } from 'graphql';
import { ModuleContext } from '@graphql-modules/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateZkApp = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  currentVersion: Scalars['String']['input'];
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  error?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkSlug: Scalars['Boolean']['output'];
  createZkApp: ZkApp;
  deleteZkApp: Scalars['Boolean']['output'];
  login?: Maybe<Token>;
  logout?: Maybe<Message>;
  refreshToken?: Maybe<Token>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmail?: Maybe<Message>;
  signup?: Maybe<Token>;
  updatePassword?: Maybe<Message>;
  updateResetPassword?: Maybe<Message>;
  updateZkApp: ZkApp;
  verifyEmail?: Maybe<Message>;
};


export type MutationCheckSlugArgs = {
  slug: Scalars['String']['input'];
};


export type MutationCreateZkAppArgs = {
  zkApp: CreateZkApp;
};


export type MutationDeleteZkAppArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationResendVerifyEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  user: Signup;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationUpdateResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};


export type MutationUpdateZkAppArgs = {
  zkApp: UpdateZkApp;
};


export type MutationVerifyEmailArgs = {
  emailVerificationToken: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  publicInfo?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserWithZkApp>;
  userDetails?: Maybe<SelfUser>;
  userSearch?: Maybe<Array<Maybe<User>>>;
  usersSortedByFollowers?: Maybe<Array<Maybe<User>>>;
  zkApp?: Maybe<ZkApp>;
  zkAppCategoriesSearch?: Maybe<Array<Maybe<ZkAppCategory>>>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserSearchArgs = {
  username: Scalars['String']['input'];
};


export type QueryZkAppArgs = {
  slug: Scalars['String']['input'];
};


export type QueryZkAppCategoriesSearchArgs = {
  text: Scalars['String']['input'];
};

export type SelfUser = {
  __typename?: 'SelfUser';
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
};

export type Signup = {
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  isDeveloper: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  xUsername?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  bannerPicture?: Maybe<Scalars['String']['output']>;
  discordUrl?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  xUsername?: Maybe<Scalars['String']['output']>;
};

export type UserWithZkApp = {
  __typename?: 'UserWithZkApp';
  bannerPicture?: Maybe<Scalars['String']['output']>;
  discordUrl?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  xUsername?: Maybe<Scalars['String']['output']>;
  zkApps?: Maybe<Array<Maybe<ZkApp>>>;
};

export type ZkApp = {
  __typename?: 'ZkApp';
  bannerImage?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  currentVersion: Scalars['String']['output'];
  discordUrl?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  reviewCount?: Maybe<Scalars['Float']['output']>;
  reviewScore?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ZkAppCategory = {
  __typename?: 'ZkAppCategory';
  name: Scalars['String']['output'];
  zkAppCount?: Maybe<Scalars['Int']['output']>;
};

export type UpdateZkApp = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  currentVersion?: InputMaybe<Scalars['String']['input']>;
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateZkApp: CreateZkApp;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SelfUser: ResolverTypeWrapper<SelfUser>;
  Signup: Signup;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
  UserWithZkApp: ResolverTypeWrapper<UserWithZkApp>;
  ZkApp: ResolverTypeWrapper<ZkApp>;
  ZkAppCategory: ResolverTypeWrapper<ZkAppCategory>;
  updateZkApp: UpdateZkApp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateZkApp: CreateZkApp;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Message: Message;
  Mutation: {};
  Query: {};
  SelfUser: SelfUser;
  Signup: Signup;
  String: Scalars['String']['output'];
  Token: Token;
  User: User;
  UserWithZkApp: UserWithZkApp;
  ZkApp: ZkApp;
  ZkAppCategory: ZkAppCategory;
  updateZkApp: UpdateZkApp;
};

export type MessageResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  error?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  checkSlug?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCheckSlugArgs, 'slug'>>;
  createZkApp?: Resolver<ResolversTypes['ZkApp'], ParentType, ContextType, RequireFields<MutationCreateZkAppArgs, 'zkApp'>>;
  deleteZkApp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteZkAppArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  logout?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationRefreshTokenArgs, 'refreshToken'>>;
  requestResetPassword?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationRequestResetPasswordArgs, 'email'>>;
  resendVerifyEmail?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationResendVerifyEmailArgs, 'email'>>;
  signup?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'user'>>;
  updatePassword?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'newPassword' | 'oldPassword'>>;
  updateResetPassword?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdateResetPasswordArgs, 'newPassword' | 'resetToken'>>;
  updateZkApp?: Resolver<ResolversTypes['ZkApp'], ParentType, ContextType, RequireFields<MutationUpdateZkAppArgs, 'zkApp'>>;
  verifyEmail?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationVerifyEmailArgs, 'emailVerificationToken'>>;
};

export type QueryResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  publicInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserWithZkApp']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  userDetails?: Resolver<Maybe<ResolversTypes['SelfUser']>, ParentType, ContextType>;
  userSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUserSearchArgs, 'username'>>;
  usersSortedByFollowers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  zkApp?: Resolver<Maybe<ResolversTypes['ZkApp']>, ParentType, ContextType, RequireFields<QueryZkAppArgs, 'slug'>>;
  zkAppCategoriesSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkAppCategory']>>>, ParentType, ContextType, RequireFields<QueryZkAppCategoriesSearchArgs, 'text'>>;
};

export type SelfUserResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['SelfUser'] = ResolversParentTypes['SelfUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  bannerPicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithZkAppResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['UserWithZkApp'] = ResolversParentTypes['UserWithZkApp']> = {
  bannerPicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zkApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkApp']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['ZkApp'] = ResolversParentTypes['ZkApp']> = {
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppCategoryResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['ZkAppCategory'] = ResolversParentTypes['ZkAppCategory']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zkAppCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ModuleContext> = {
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SelfUser?: SelfUserResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserWithZkApp?: UserWithZkAppResolvers<ContextType>;
  ZkApp?: ZkAppResolvers<ContextType>;
  ZkAppCategory?: ZkAppCategoryResolvers<ContextType>;
};

