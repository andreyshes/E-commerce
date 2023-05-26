const { Model, DataTypes } = require("sequelize");
const { databaseVersion } = require("../config/connection.js");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
	{
		// define columns
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		tag_name: {
			type: Datatypes.STRING,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "tag",
	}
);

module.exports = Tag;
