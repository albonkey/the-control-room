const awsServerlessExpress = require('aws-serverless-express');
//const app = require('./app');
const { connect } = require("./mongoose");

let connection = null;

//const server = awsServerlessExpress.createServer(app);

exports.handler = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false;

  if (connection === null) connection = await connect();
  const app = require("./app");
  const server = awsServerlessExpress.createServer(app);
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
