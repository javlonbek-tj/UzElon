const filtering = (category, from, to, address) => {
  let filtering;
  //If exists all of them
  if (category && from && to && address) {
    filtering = {
      category,
      price: { $gte: from, $lte: to },
      address,
    };
  }

  //If exists only category
  if (category && !from && !to && !address) {
    filtering = {
      category,
    };
  }

  //If existe category and address
  if (category && !from && !to && address) {
    filtering = {
      category,
      address,
    };
  }

  //If exist category address and from
  if (category && from && !to && address) {
    filtering = {
      category,
      address,
      price: { $gte: from },
    };
  }

  //If exist category address and to
  if (category && !from && to && address) {
    filtering = {
      category,
      address,
      price: { $lte: to },
    };
  }

  //If exist only category and from
  if (category && from && !to && !address) {
    filtering = {
      category,
      price: { $gte: from },
    };
  }

  //If exist category and to
  if (category && !from && to && !address) {
    filtering = {
      category,
      price: { $lte: to },
    };
  }

  //If exist category  from and to
  if (category && from && to && !address) {
    filtering = {
      category,
      price: { $gte: from, $lte: to },
    };
  }

  //If exist only from
  if (!category && from && !to && !address) {
    filtering = {
      price: { $gte: from },
    };
  }

  //If exist from and to
  if (!category && from && to && !address) {
    filtering = {
      price: { $gte: from, $lte: to },
    };
  }

  //If exist from and to and address
  if (!category && from && to && address) {
    filtering = {
      address,
      price: { $gte: from, $lte: to },
    };
  }

  //If exist from and address
  if (!category && from && !to && address) {
    filtering = {
      address,
      price: { $gte: from },
    };
  }

  //If exist only to
  if (!category && !from && to && !address) {
    filtering = {
      price: { $lte: to },
    };
  }

  //If exist to and address
  if (!category && !from && to && address) {
    filtering = {
      address,
      price: { $lte: to },
    };
  }

  //If exist only address
  if (!category && !from && !to && address) {
    filtering = {
      address,
    };
  }

  //If not exist any of them
  if (!category && !from && !to && !address) {
    filtering = {};
  }

  return filtering;
};

module.exports = filtering;
