const formatProd = prods => {
  if (prods.length) {
    prods.map(p => {
      if (p.price) {
        p.price = p.price.toLocaleString('fr');
      }
      p.createdAt = p.createdAt.toLocaleString('en-GB');
      if (p.year) {
        p.year = p.year.getFullYear();
      }
    });
  } else {
    if (prods.price) {
      prods.price = prods.price.toLocaleString('fr');
    }
    prods.createdAt = prods.createdAt.toLocaleString('en-GB');
    if (prods.year) {
      prods.year = prods.year.getFullYear();
    }
  }
  return prods;
};

module.exports = formatProd;
