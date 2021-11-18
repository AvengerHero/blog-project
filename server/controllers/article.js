const db = require('../models')

module.exports = {
  index: async (req, res) => {
    try {
      const articles = await db.articles.findAll()
      return res.json(articles)
    } catch (e) {
      console.log(e)
      return res.status(500).json({ message: 'Cannot get data from database.' })
    }
  },
  show: async (req, res) => {
    const id = req.params.id
    try {
      const articles = await db.articles.findByPk(id)
      return res.json(articles)
    } catch (e) {
      console.log('data', e)

      return res.status(500).json({ message: 'Cannot get data from database.' })
    }
  },
  store: async (req, res) => {
    const data = req.body
    console.log('data', data)
    if (data) {
      try {
        const article = await db.sequelize.transaction((t) => {
          return db.articles.create(data, { transaction: t })
        })
        return res.status(201).json(article)
      } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Cannot store data to database.' })
      }
    }
    return res.status(400).json({ message: 'Bad request.' })
  },
  update: async (req, res) => {
    const id = req.params.id
    const data = req.body
    if (id && data) {
      await db.sequelize.transaction((t) => {
        return db.articles.update(data, { where: { id } }, { transaction: t })
      })
      return res.json(data)
    }
    return res.status(400).json({ message: 'Bad request.' })
  },
  destroy: async (req, res) => {
    const id = req.params.id
    if (id) {
      try {
        await db.articles.destroy({ where: { id } })
        return res.status(204).send()
      } catch (e) {
        return res.status(500).json({ message: 'Cannot remove data from database.' })
      }
    } else {
      return res.status(400).json({ message: 'Bad request.' })
    }
  }
}
