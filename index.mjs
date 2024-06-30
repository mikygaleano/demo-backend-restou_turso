import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.json())

// Deshabilitar el encabezado X-Powered-By
app.disable('X-Powered-By')
app.use(express.json())

// cargar el archivo JSON
const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'))

// ruta raiz
app.get('/', (req, res) => {
  res.contentType('text/plain')
  res.send('¡Hola bienvenidos a mi api rest!')
})

// ruta todos los productos
app.get('/api/products', (req, res) => {
  res.contentType('text/plano')
  res.json(products.categories.flatMap(product => product.items))
})

// ruta flitro de productos por id
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.categories
    .flatMap(category => category.items)
    .find(item => item.id.toString() === id.toString())
  if (product) return res.json(product)
  res.status(404).json({ message: 'product no encontrado' })
})

// ruta filtro de productos por nombre
app.get('/api/products', (req, res) => {
  const { name } = req.query
  if (name) {
    const toLowerCaseName = name.toString().toLowerCase()
    const filterpProduct = products.categories.map(item => item.items)
      .filter(n => n.name.toLowerCase().includes(toLowerCaseName))
    if (filterpProduct) return res.json(filterpProduct)
  }
  res.status(404).json({ message: 'product no encontrado' }
  )
})

const PORT = process.env.PORT || 5000

// servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
