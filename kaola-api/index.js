const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const router = require('koa-router')();
const goodsRouter = require('./routers/Rgoods')
const navbarsRouter = require('./routers/Rnavbars')
const detailRouter = require('./routers/Rdetail')
const siderbarsRouter = require('./routers/Rsiderbars')
// 挂载跨域中间件
app.use(cors());
app.use(goodsRouter);
app.use(navbarsRouter);
app.use(detailRouter)
app.use(siderbarsRouter)
app.use(router.routes())

app.listen(3011, () => {
    console.log("Your app is running");
})