const Tudo = require('../models/Tudo');

module.exports = {
  async list(req, res) {
    const tudos = await Tudo.findAll();

    return res.json(tudos);
  },

  async store(req, res) {
    const { description, status } = req.body;

    const tudo = await Tudo.create({
      description,
      status
    })

    return res.json(tudo)
  },

  async show(req, res) {
    const { id } = req.params;
    const tudo = await Tudo.findByPk(id);

    const { description, status, createdAt } = tudo;

    res.json({ description, status, createdAt });
  },

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const tudo = await Tudo.findByPk(id);

    tudo.update({
      status
    })


    return res.json(tudo)
  },

  async delet(req, res) {
    const { id } = req.params;

    const tudo = await Tudo.findByPk(id);

    tudo.destroy();

    res.send();
  }
}