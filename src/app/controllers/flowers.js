const express = require('express')

const Flower = require('../models/Flower')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const flowers = await Flower.findAll()

    if (flowers.length === 0) {
      return response
        .status(404)
        .json({ message: 'Nenhuma flor foi encontrada' })
    }

    return response.status(200).json(flowers)
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const flowers = await Flower.findByPk(id)

    if (!flowers) {
      return response
        .status(404)
        .json({ message: `Nenhuma flor foi encontrada com o ID: ${id}` })
    }

    return response.status(200).json(flowers)
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    })
  }
})

router.post('/create', async (request, response) => {
  try {
    const { name, description, origin, availability, basic_care } = request.body

    const flowerFind = await Flower.findOne({
      where: { name },
    })

    if (flowerFind) {
      return response
        .status(200)
        .json({ message: `A flor "${name}" já existe cadastrada!` })
    }

    const flowerCreate = await Flower.create({
      name,
      description,
      origin,
      availability,
      basic_care,
    })

    response.status(201).json(flowerCreate)
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    })
  }
})

router.put('/update/:id', async (request, response) => {
  try {
    const { id } = request.params

    const { name, description, origin, availability, basic_care } = request.body

    const flower = await Flower.findOne({
      where: { id },
    })

    if (!flower) {
      return response
        .status(404)
        .json({ message: `Nenhuma flor foi encontrada com o ID: ${id}` })
    }

    flower.name = name
    flower.description = description
    flower.origin = origin
    flower.availability = availability
    flower.basic_care = basic_care

    await flower.save()

    return response.status(200).json({ message: 'A flor foi atualizada!' })
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    })
  }
})

router.delete('/delete/:id', async (request, response) => {
  try {
    const { id } = request.params

    const flower = await Flower.findOne({
      where: { id },
    })

    if (!flower) {
      return response
        .status(404)
        .json({ message: `Nenhuma flor foi encontrada com o ID: ${id}` })
    }

    flower.destroy()

    return response.status(200).json({ message: 'A flor foi deletada!' })
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    })
  }
})

module.exports = app => app.use('/flowers', router)
