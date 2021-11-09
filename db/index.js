const mongoose = require("mongoose"); // 链接数据库

module.exports = () => {
  /* useNewUrlParser: true  为true的话 以后如果数据库里没有这个库 会自动生成这个库  */
  mongoose
    .connect("mongodb://localhost:27017/jianshu", { useUnifiedTopology: true, useNewUrlParser: true })
    /* connect 底层返回的是一个promise对象  可以通过.then 返回一些提示 */
    .then(() => {
      console.log("数据库连接成功");
    })
    .catch((err) => {
      console.error("数据库连接失败", err);
    });
};
