const formatProd = prods => {
  if (Array.isArray(prods)) {
    prods.forEach(p => {
      if (p.price) p.price = p.price.toLocaleString('fr');
      if (p.createdAt) p.createdAt = new Date(p.createdAt).toLocaleString('en-GB');
      if (p.year) p.year = new Date(p.year).getFullYear();
    });
  } else if (prods && typeof prods === 'object') {
    if (prods.price) prods.price = prods.price.toLocaleString('fr');
    if (prods.createdAt) prods.createdAt = new Date(prods.createdAt).toLocaleString('en-GB');
    if (prods.year) prods.year = new Date(prods.year).getFullYear();
  }
  return prods;
};

module.exports = formatProd;
