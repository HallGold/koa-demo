/**
 *用于查询所有用户的公共方法
 * @param {*} model
 * @param {*} where
 * @param {*} ctx
 * @return {*}
 */
const findAll = (model, where, ctx) => {
  return model
    .find(where)
    .then((res) => {
      ctx.body = {
        data: res,
      };
    })
    .catch((err) => {
      ctx.body = { code: 400, msg: "查询出现异常" };
      console.error(err);
    });
};

module.exports = { findAll };
