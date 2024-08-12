import { mergeTypeDefs } from '@graphql-tools/merge'
import messageGQLSchema from './message.js'

const mergedSchema = mergeTypeDefs([messageGQLSchema]);

export default mergedSchema;