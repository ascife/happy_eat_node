const app = require("./app");
const mongoose = require("mongoose");

const port = 4000;

mongoose.Promise = global.Promise;

mongoose.connect(
'mongodb+srv://bizapr:pkmxSMiRA1SBYDpP@cluster0.wukgr.mongodb.net/webstore?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

.then((db)=> {
  app.listen(port, () => {
      console.log(`Server started on port ${port}`);
  });
})
.catch((error)=> {
    console.log('DB Error');
})