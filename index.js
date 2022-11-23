const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');


//middleware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.tukbsww.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
  const AppoinmentOptions = client.db('doctor-portal').collection('AppoinmentOptions')
  try{
    app.get('/appointment_options', async(req, res)=>{
      const query = {}
      const cursor = AppoinmentOptions.find(query);
      const result = await cursor.toArray()
      res.send(result)
    })
  }
  catch{
    error=> console.error(error)
  }
  finally{

  }
}
run().catch(err=>console.error(err))



async function bookings(){
  const bookingsCollections = client.db('doctor-portal').collection('bookings')
  try{
    app.get('/bookings', async(req, res)=>{
      const query = {}
      const cursor = AppoinmentOptions.find(query);
      const result = await cursor.toArray()
      res.send(result)
    })
  }
  catch{
    error=> console.error(error)
  }
  finally{

  }
}
bookings().catch(err=>console.error(err))









app.get('/', (req, res)=>res.send('doctor-portal-server is running...'))
app.listen(port)