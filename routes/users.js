const router = require("koa-router")();
// 引入封装的业务逻辑
const { userAdd, updateUser, delUser, findAll, findUser } = require("../controller/user");

// 默认路由
router.prefix("/users");

// 添加用户
router.post("/add", userAdd);

// 修改用户
router.post("/update", updateUser);
// 删除用户
router.post("/del", delUser);
// 查询所有用户
router.get("/find", findAll);
// 查询单个用户
router.get("/find/:id", findUser);
module.exports = router;
