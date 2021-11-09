/* 创建模型对象 */
const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  /* 当前模型对象规则 */
  username: "String",
  pwd: "String",
});

/* 创建用户模型对象 */ /* 如果数据库里没有users这个集合  mongoose会自动生成 */
const User = mongoose.model("users", Userschema);

module.exports = {
  User,
};
