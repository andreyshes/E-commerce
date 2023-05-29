import { Model, DataTypes } from "sequelize";

import sequelize from "../config/connection";

class ProductTag extends Model {}

ProductTag.init(
	{
		// define columns
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		product_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "product",
				key: "id",
				unique: false,
			},
		},
		tag_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "tag",
				key: "id",
				unique: false,
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product_tag",
	}
);

export default ProductTag;
