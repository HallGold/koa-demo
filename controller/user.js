const { User } = require("../models");
const crud = require("./crudUtil");
// 添加用户
const userAdd = async (ctx) => {
  const { username, pwd } = ctx.request.body;
  /* 接口模型对象 */
  await User.create({ username, pwd })
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: "添加成功!",
          data: res,
        };
      } else {
        ctx.body = { code: 300, msg: "添加失败" };
      }
    })
    .catch((err) => {
      ctx.body = { code: 400, msg: "添加出现异常" };
      console.error(err);
    });
};
// 修改用户
const updateUser = async (ctx) => {
  const params = ctx.request.body;
  await User.updateOne(
    /* 对应的ID */
    { _id: params._id },
    /* 具体要修改的值 */
    {
      username: params.username,
      pwd: params.pwd,
    }
  )
    .then((res) => {
      ctx.body = {
        code: 200,
        msg: "修改成功!",
        data: res,
      };
    })
    .catch((err) => {
      ctx.body = { code: 400, msg: "修改出现异常" };
      console.error(err);
    });
};
// 删除用户
const delUser = async (ctx) => {
  const { _id } = ctx.request.body;
  await User.findOneAndDelete({ _id })
    .then((res) => {
      ctx.body = {
        data: res,
        msg: "删除成功!",
      };
    })
    .catch((err) => {
      ctx.body = { code: 400, msg: "删除出现异常" };
      console.error(err);
    });
};
// 查询所有用户
const findAll = async (ctx) => {
  await crud.findAll(User, null, ctx);
};
// 查询单个用户
const findUser = async (ctx) => {
  await User.findOne({ _id: ctx.params.id })
    .then((res) => {
      ctx.body = { data: res };
    })
    .catch((err) => {
      ctx.body = { code: 400, msg: "查询出现异常" };
      console.error(err);
    });
};
module.exports = {
  userAdd,
  updateUser,
  delUser,
  findAll,
  findUser,
};
