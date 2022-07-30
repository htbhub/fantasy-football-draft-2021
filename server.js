const express = require('express')
// npm install cors --save 
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

//name is a query parameter and the key in the object above
app.get('/api/:pick', (request, response) => {
    const pickNumber = request.params.pick.toLowerCase()
    if( footballData[pickNumber] ){
        response.json(footballData[pickNumber])
    }else{
        response.json(footballData['unknown'])
    }

})
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}, betta go catch it!`)
})

const footballData = {
    "cmc":{
        "Pick": 1,
        "Round": 1,
        "Last Name": "McCaffrey",
        "First Name": "Christian",
        "Name": "Christian McCaffrey",
        "Position": "RB",
        "Cost": 78,
        "2021 Points": 109,
        "Points to $": 1.4,
        "Avg. Pick": 1.2,
        "Avg. Round": 1,
        "Avg. Cost": 73.9,
        "% Drafted": 1
      },
    'unknown':{
        "Pick": "unknown",
        "Round": "unknown",
        "Last Name": "unknown",
        "First Name": "unknown",
        "Name": "unknown",
        "Position": "unknown",
        "Cost": "unknown",
        "2021 Points": "unknown",
        "Points to $": "unknown",
        "Avg. Pick": "unknown",
        "Avg. Round": "unknown",
        "Avg. Cost": "unknown",
        "% Drafted": "unknown"
    }
  }