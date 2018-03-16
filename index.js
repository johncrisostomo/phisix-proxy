const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/:stockInfo', async (req, res) => {
  try {
    const { data } = await axios(
      `http://phisix-api.appspot.com/stocks/${req.params.stockInfo}`
    )
    return res.json(data)
  } catch (error) {
    return res.json({})
  }
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`)
})
