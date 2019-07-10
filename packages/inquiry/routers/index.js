const { Router } = require('express');
const { json } = require('body-parser');
const jsonErrorHandler = require('@endeavorb2b/base-website-routing-utils/json-error-handler');
const bodyParser = require('body-parser');
const submit = require('./submit');

module.exports = ({ queryFragment, notification, confirmation }) => {
  const router = Router();
  router.use(json());
  router.post('/:id(\\d{8})', bodyParser.json(), submit({ queryFragment, notification, confirmation }));
  router.use(jsonErrorHandler());
  return router;
};
