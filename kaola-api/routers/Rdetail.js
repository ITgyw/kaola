const router = require('koa-router')();
const goodsData = require('../data/goods')

const A = (index, id) => {
    router.get(`/detail/${id}`, async (ctx) => {
        ctx.body =
            goodsData[index].data
                .filter(item => {
                    return item.goodsId == id
                })

    })
}

const B = () => {
    for (let i = 0, len = goodsData.length; i < len; i++) {
        for (let j = 0, len1 = goodsData[i].data.length; j < len1; j++) {
            A(i, goodsData[i].data[j].goodsId)
        }
    }
}
// router.get(`/detail`, async (ctx) => {

//     ctx.body =
//         goodsData[0].data.filter(item => (
//             item.goodsId == 2490312


//         ))

// })
// A(0, 0)
B()
module.exports = router.routes()