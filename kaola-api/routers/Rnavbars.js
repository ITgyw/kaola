const router = require('koa-router')();
const navbarsData = require('../data/navbars')

router.get('/navbars', async (ctx) => {
    ctx.body = {
        data: navbarsData
    }
})

module.exports = router.routes()