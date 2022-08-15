const router = require('koa-router')();
const siderbarsData = require('../data/siderbars')

router.get('/siderbars', async (ctx) => {
    ctx.body = {
        data: siderbarsData
    }
})

module.exports = router.routes()
