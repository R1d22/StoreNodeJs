const express = require('express');
const router = express.Router();
const axios = require('axios');
const { findItem, findItemByQuery } = require('../controllers/items');

// const { articleFields, getArticles } = require('../controller/article');

router.get('/', (req, res) => {
  res.render('index', { title: 'ARTICLES' });
  // findItem();
});

router.get('/items', async (req, res) => {
  // console.log('asda')
  const items = await findItem();
  // console.log(items);
  res.send(items);
});

router.get('/items/filter', async (req, res) => {
  const { obj } = req.query;
  const items = await findItemByQuery(obj);
  console.log('ASDASD:', items)
  res.send(items);

});



module.exports = router;
