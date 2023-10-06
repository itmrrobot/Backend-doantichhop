'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Product.init({
    ten_san_pham: DataTypes.STRING,
    slug_san_pham: DataTypes.STRING,
    so_luong_nhap: DataTypes.INTEGER,
    so_luong_ban: DataTypes.INTEGER,
    id_partner: DataTypes.INTEGER,
    hinh_anh: DataTypes.STRING,
    tinh_trang: DataTypes.INTEGER,
    mo_ta_ngan: DataTypes.STRING,
    mo_ta_chi_tiet: DataTypes.STRING,
    gia_ban: DataTypes.INTEGER,
    gia_khuyen_mai: DataTypes.INTEGER,
    id_chuyen_muc: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};