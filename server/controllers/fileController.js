const multer = require('multer');

const upload = multer({ dest: 'uploads/' }).any('image');

module.exports = {
  storeFile: async (req, res) => {
    upload(req, res, async err => {
      if (err) {
        return res.json({ message: 'Failed', err: err.message });
      }

      return res.status(200).json({
        message: 'Success',
        // url: res.req.file.path,
      });
    });
  },
};
