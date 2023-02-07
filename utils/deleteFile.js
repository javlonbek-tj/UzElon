const fs = require('fs');

const deleteFile = filePath => {
  fs.unlink(filePath, err => {
    if (err) {
      throw err;
    }
  });
};

const deleteFiles = files => {
  let i = files.length;
  files.forEach(filepath => {
    fs.unlink(filepath, err => {
      i--;
      if (err) {
        throw err;
      } else if (i <= 0) {
        return;
      }
    });
  });
};

module.exports = {
  deleteFile,
  deleteFiles,
};
