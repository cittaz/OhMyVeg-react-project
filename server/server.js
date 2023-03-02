import express from 'express'
import axios from 'axios'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'


dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});


const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'This is the server for OhMyVeg.'
  })
})

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createImage({
      prompt: `${prompt},  high contrast on the food, wide shot, photography`,
      n: 1,
      size: "1024x1024",
    });

    res.status(200).send({
      image: response.data.data[0].url
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5000, () => console.log('Server started on http://localhost:5000'))
