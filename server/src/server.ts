import express from "express"

const app = express()

app.get('/ads', (request, response) => {

  
  return response.json([
    { message1: "Hello World!1"},
    { message2: "Hello World!2"},
    { message3: "Hello World!3"},
  ])
})

app.listen(3333)