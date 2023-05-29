// import models
const Product = require("./Product");
const Category = require("./Category").default;
const Tag = require("./Tag");
const ProductTag = require("./ProductTag").default;

// Products belongsTo Category
Product.belongsTo(Category, {
	foreignKey: "catergory_id",
	onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
	foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
	foreignKey: "tag_id",
	through: ProductTag,
});
module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
