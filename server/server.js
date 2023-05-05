const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
const port = 3000; // or any other port you prefer

app.get('/api/summary', async (req, res) => {
    const { articleUrl } = req.query;
  
    try {
      const response = await axios.get('https://article-extractor-and-summarizer.p.rapidapi.com/summarize', {
        headers: {
          'X-RapidAPI-Key': process.env.VITE_RAPID_API_ARTICLE_KEY,
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
        },
        params: {
          url: articleUrl,
        },
      });
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching the summary');
    }
  });
  

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});