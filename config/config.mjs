import { createClient } from '@libsql/client'

// Inicializar la base de datos Turso
const client = createClient({
  url: 'libsql://demo-restou-mikygaleano.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTk1MDEwNTgsImlkIjoiNjQyY2M2NjctZWU5MS00MTAzLThmZTItZWMxMmNlODMwZjczIn0.oFfhkOzHR_UegxOeUNgK7eK2UBttDtd_74LjFfjYitZc8WYJ8Hrx7Oh79mTe7R8PG-oyh4SpHK9_soZj6VydAw',
})

export default client
