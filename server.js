const express = require('express')
// npm install cors --save 
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const footballData = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'	
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'sammy the rapper':{
        'age':32,
        'birthName': 'Samantha Marie Kauser',
        'birthLocation': 'Redwood City, California'
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthPlace': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

//name is a query parameter and the key in the object above
app.get('/api/:pick', (request, response) => {
    const pickNumber = request.params.pickNumber.toLowerCase()
    if( rappers[rapperName] ){
        response.json(footballData[pickNumber])
    }else{
        response.json(footballData['unknown'])
    }

})
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}, betta go catch it!`)
})