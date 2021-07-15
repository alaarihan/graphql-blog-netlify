import { PrismaClient } from '@prisma/client'
import { rolePermsCache, roleSchemaCache } from './auth'


const prisma = new PrismaClient()

// add_prisma_middlewares
prisma.$use(async (params, next) => {
    if (
        params.model == 'Permission' &&
        [
            'create',
            'createMany',
            'update',
            'updateMany',
            'delete',
            'deleteMany',
        ].includes(params.action)
    ) {
        rolePermsCache.flushAll()
        roleSchemaCache.flushAll()
    }
    return next(params)
})


export { prisma }
