const mongoose = require('mongoose');
const Page = require('../models/page.model');

module.exports = {
  loadPage: function (req, res) {
    console.log('Load Page request');
    Page.find(function (err, pages) {
      if (err) {
        return res.status(404).json(err);
      } else if (!pages.length) {
        res.json({});
      } else {
        res.json(pages.pop());
      }
    });
  },

  storePage: function (req, res) {
    console.log('Request Parameters: ' + req.params);
    Page.find(function (err, pages) {
      if (pages.length > 0) {
        if (pages.length >= 50) {
          for (let i = 0; i < 20; i++) {
            Page.findOneAndDelete({ _id: pages[i]._id }, (err, deletedPage) => {
              if (err)
                console.log(
                  'Error occured while deleting page at index ' + index + ' error: ' + err,
                );
            });
          }
        }
      }
    });
    let newPageDetails = req.body;
    // newPageDetails._id = pageID;
    newPageDetails._id = new mongoose.Types.ObjectId();
    let page = new Page(newPageDetails);
    page.save(function (err) {
      if (err) console.log('BRUH THERES AN ISSUE: ' + err);
      console.log('Saving content now ' + new Date());
      res.json(page);
    });
  },
};
