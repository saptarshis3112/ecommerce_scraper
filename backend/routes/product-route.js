const { productController } = require("../controllers");
const { productValidation, headerValidation } = require("../validations");

const tags = ['api', 'product'];

module.exports = {
  name: "product",
  register: (server, options) => {

    const routes = [
      {
        method: "POST",
        path: "/product/create",
        config: {
          auth: "default",
          tags,
          description: "Add new product",
          handler: productController.addNewProduct,
          validate: {
            headers: headerValidation,
            payload: productValidation.createProductValidation,
          },
        }
      },
      {
        method: "GET",
        path: "/product/list",
        config: {
          auth: "default",
          tags,
          description: "List products",
          handler: productController.getUserProducts,
          validate: {
            headers: headerValidation,
          }
        }
      },
      {
        method: "DELETE",
        path: "/product/delete/{user_product_id}",
        config: {
          auth: "default",
          tags,
          description: "Delete user product",
          handler: productController.deleteUserProduct,
          validate: {
            headers: headerValidation,
            params: productValidation.deleteUserProductValidation,
          }
        }
      }
    ];

    server.route(routes);

  },
};
