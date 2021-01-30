const { MongoClient } = require('mongodb')
const uri = require('../app-config.json').mongodb.uri

exports.insert = async (collection, database, value) => {
    let client =  new MongoClient(uri, {useUnifiedTopology : true})
    await client.connect()
    let conection = client.db(database).collection(collection)
    let result = await conection.insertOne(value)
    await client.close()
    return Promise.resolve(result.insertedCount > 0 ? true : false) 
}

exports.select =  async (database, collection, query = {}) => {
    let client =  new MongoClient(uri, {useUnifiedTopology : true})
    await client.connect()
    let col = client.db(database).collection(collection)
    let cursor = col.find(query)
    let array = await cursor.toArray()
    await cursor.close()
    await client.close()
    return Promise.resolve(array)
}