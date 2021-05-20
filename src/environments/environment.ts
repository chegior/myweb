// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of fi"le replacements can be found in `angular.json`.
const url_base = 'https://mybackendchedroc.herokuapp.com/api/';
export const environment = {
  production: false,
  uriCategory: url_base + 'categories',
  uriPurchase: url_base + 'checkout/purchase',
  uriProducts: url_base + 'products',
  uriProductsCategory: url_base + 'products/search/findByCategoryId?id=',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

//Aca podemos poner el firebase
//firebase:{
//   apiKey: "AIzaSyBq7iHxVUELe_wbo1mO6fiKcL45dzSKrdg",
//   authDomain: "clientpanelprod-d0bba.firebaseapp.com",
//   databaseURL: "https://clientpanelprod-d0bba.firebaseio.com",
//   projectId: "clientpanelprod-d0bba",
//   storageBucket: "clientpanelprod-d0bba.appspot.com",
//   messagingSenderId: "381763771821",
//   appId: "1:381763771821:web:8554cb7ad5521dea0e9524",
//   measurementId: "G-X2V91HE8X6"
//}
