const url_base = 'https://mybackendchedroc.herokuapp.com/api/';
export const environment = {
  production: true,
  uriCategory: url_base + 'categories',
  uriPurchase: url_base + 'checkout/purchase',
  uriProducts: url_base + 'products',
  uriProductsCategory: url_base + 'products/search/findByCategoryId?id=',
};
