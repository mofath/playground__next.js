const mongoose = require('mongoose');
const Page = require('../models/page.model');

module.exports = {
  loadPage: async (req, res) => {
    try {
      console.log('Load Page');
      const pages = await Page.find();
      if (!pages.length) return res.json({});
      return res.json(pages.pop());
    } catch (error) {
      console.log(error.message);
    }
  },

  storePage: async (req, res) => {
    try {
      console.log('Storing Page');
      const newPage = { ...req.body, _id: new mongoose.Types.ObjectId() };
      let page = new Page(newPage);
      page = await page.save();
      console.log('Saving content now');
      return res.json(page);
    } catch (error) {
      console.log(error.message);
    }
  },
};
