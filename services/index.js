// require('module-alias/register');
// const http = require('http'),

const database = require('./services/BudgetManagerAPI/config/database.js')
const app = require('./services/BudgetManagerAPI/config/app.js')(database)
BudgetManagerPORT = process.env.PORT || 8080;
// LOCAL = '0.0.0.0';

// BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () => console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`));
app.listen(BudgetManagerPORT, () => {
  console.log("listening on port 8080")
})
