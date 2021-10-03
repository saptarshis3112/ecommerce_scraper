const { Product, UserProductAssociation, User } = require("../models");
const { responseHelper } = require("../helpers");

const { default: axios } = require("axios");

/**
 * Add new user product
 * @param {*} req 
 * @param {*} h 
 * @returns 
 */
const addNewProduct = async (req, h) => {
  try {

    const { payload: { url }, user } = req;

    const [removeQuery, ...rest] = url.split("ref");

    if (user && user.product_count >= 5) {
      return responseHelper.error(h, "USERPRODUCTLIMIT400");
    }

    const productExists = await Product.findOne({
      where: {
        url: removeQuery,
      },
      raw: true,
      attributes: ['id'],
    });

    if (productExists) {

      // Check if user already searched this product.
      const userProductExists = await UserProductAssociation.findOne({
        where: {
          user_id: user.id,
          product_id: productExists.id,
        },
        attributes: ['id'],
        raw: true,
      });

      if (userProductExists) {
        return responseHelper.error(h, "USERPRODUCTEXISTS400");
      }
      
    }

    if (!productExists) {

      const response = await axios.post("http://localhost:7050/scrape_amazon", { url: removeQuery });

      const { item_name, item_price, item_rating, item_site, item_star } = response.data;

      const newProduct = await Product.create({
        product_name: item_name,
        site_name: item_site,
        url: removeQuery,
        current_price: item_price,
        lowest_price: item_price,
        product_star: item_star,
        product_rating: item_rating,
      });

      const associationCreate = UserProductAssociation.create({
        user_id: user.id,
        product_id: newProduct.dataValues.id,
      });

      const updateCount = User.update({
        product_count: user.product_count + 1
      }, {
        where: {
          id: user.id,
        }
      });

      await Promise.all([associationCreate, updateCount]);

    } else {

      const associationCreate = UserProductAssociation.create({
        user_id: user.id,
        product_id: productExists.id,
      });

      const updateCount = User.update({
        product_count: user.product_count + 1
      }, {
        where: {
          id: user.id,
        }
      });

      await Promise.all([associationCreate, updateCount]);

    }

    return responseHelper.success(h, "PRODUCTCREATED200");

  } catch (ex) {
    return responseHelper.error(h, "SERVER500", ex);
  }
}

/**
 * Get user products.
 * @param {*} req 
 * @param {*} h 
 * @returns 
 */
const getUserProducts = async (req, h) => {
  try {

    const { user } = req;

    const userProducts = await UserProductAssociation.findAll({
      where: {
        user_id: user.id,
      },
      raw: true,
      attributes: ['id', 'product_id'],
    });

    const productList = await Product.findAll({
      where:{ 
        id: userProducts.map(product => product.product_id),
      },
      raw: true,
      attributes: {
        exclude: ['createdAt', 'deletedAt', 'updatedAt'],
      }
    });

    const finalList = productList.map(product => {
      const userProductId = userProducts.find(userProduct => userProduct.product_id == product.id);
      return {
        ...product,
        user_product_id: userProductId.id,
      };
    });

    return responseHelper.success(h, "USERPRODUCTLIST200", {
      "product_list": finalList,
    });

  } catch (ex) {
    return responseHelper.error(h, "SERVER500", ex);
  }
}

/**
 * Delete user product
 * @param {*} req 
 * @param {*} h 
 * @returns 
 */
const deleteUserProduct = async (req, h) => {

  const { params: { user_product_id }, user } = req;

  const userProductExists = await UserProductAssociation.findOne({
    where: {
      id: user_product_id,
    },
    raw: true,
    attributes: ['id'],
  });

  if (!userProductExists) {
    return responseHelper.error(h, "USERPRODUCT404");
  }

  const deleteProduct = UserProductAssociation.destroy({
    where: {
      id: user_product_id,
    }
  });

  const updateCount = User.update({
    product_count: user.product_count-1,
  }, {
    where: {
      id: user.id,
    }
  });

  await Promise.all([deleteProduct, updateCount]);
  return responseHelper.success(h, "USERPRODUCTDELETED204");

}

module.exports = {
  addNewProduct,
  getUserProducts,
  deleteUserProduct,
};
