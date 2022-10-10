const express = require("express");
const app = express();
const userRouter = require("./api/user/user.router.js");
const port = 5000;

app.use(express.json());

app.use("/api/users", userRouter);

app.get ('/', (req, res) => {
    res.json({
        message : 'JWT token'
    })
});

app.listen(port, () => {
  console.log("Port is listing :", port);
});
