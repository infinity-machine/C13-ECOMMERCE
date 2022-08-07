const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product
    }
  }).then(data => res.json(data))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: {
      model: Product
    }
  }).then(data => res.json(data))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(console.log('TAG CREATED!'))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
