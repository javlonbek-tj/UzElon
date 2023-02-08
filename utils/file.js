const fs = require('fs');

function deleteFile(filePath) {
  fs.unlink(filePath, err => {
    if (err) {
      throw err;
    }
  });
}

function deleteFiles(files) {
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
}

function deleteImage(imageUrl) {
  if (imageUrl.length >= 2) {
    deleteFiles(imageUrl);
  } else {
    deleteFile(imageUrl[0]);
  }
}

function getImageUrl(images) {
  const imageUrl = [];
  let image1;
  let image2;
  let image3;
  if (images.image1) {
    image1 = images.image1[0].path;
    imageUrl.push(image1);
  }
  if (images.image2) {
    image2 = images.image2[0].path;
    imageUrl.push(image2);
  }
  if (images.image3) {
    image3 = images.image3[0].path;
    imageUrl.push(image3);
  }
  return imageUrl;
}

function deleteImageIfError(images) {
  const imageUrl = getImageUrl(images);
  if (imageUrl.length >= 2) {
    deleteFiles(imageUrl);
  } else {
    deleteFile(imageUrl[0]);
  }
}

module.exports = {
  deleteFile,
  deleteFiles,
  getImageUrl,
  deleteImageIfError,
  deleteImage,
};
