const router = require("express").Router();
const { afterFind } = require("../../config/connection");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
	// find all categories
	// be sure to include its associated Products
	try {
		const categoryAll = await Category.findAll({
			include: [
				{
					model: Product,
					attributes: ["id", "price", "product_name", "stock", "category_id"],
				},
			],
		});
		res.status(200).json(categoryAll);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/:id", async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	try {
		const categoryOne = await Category.findOne({
			where: {
				id: req.params.id,
			},
			// may need to use includes here
			// be sure to include its associated Products

			includes: [
				{
					model: Product,
					attributes: ["id", "price", "product_name", "stock", "category_id"],
				},
			],
		});
		if (!categoryOne) {
			res.status(404).json({ message: "No location found with this id!" });
			return;
		}

		res.status(200).json(categoryOne);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	// create a new category
	try {
		const newCategory = await Category.create({
			category_name: req.body.category_name,
		});
		if (!newCategory) {
			res.status(404).json({ message: "No new category created" });
		}
		res.status(200).json(newCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	// update a category by its `id` value
	try {
		const updateCatergory = await Category.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (!updateCatergory) {
			res.status(404).json({ message: "NO new updated cateogry!" });
		}
		res.status(200).json(updateCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", async (req, res) => {
	// delete a category by its `id` value
	try {
		const deleteCategory = await Category.destroy(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (!deleteCategory) {
			res.status(404).json({ message: "No deleted category!" });
			return;
		}
		res.status(200).json(deleteCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
