const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const router = require('koa-router')();
const goodsRouter = require('./routers/Rgoods')

// 挂载跨域中间件
app.use(cors());
app.use(goodsRouter);
app.use(router.routes())

app.listen(3022, () => {
    console.log("Your app is running");
})