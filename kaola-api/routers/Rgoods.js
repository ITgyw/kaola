const router = require('koa-router')();
const goodsData = require('../data/goods')

router.get('/goods', async (ctx) => {
    ctx.body = {
        data: goodsData
    }
})

module.exports = router.routes()