const { MongoClient } = require('mongodb')
const uri = require('../app-config.json').mongodb.uri

exports.insert = async (collection, database, value) => {
    let client =  new MongoClient(uri, {useUnifiedTopology : true})
    await client.connect()
    let conection = client.db(database).collection(collection)
    let result = await conection.insertOne(value) //insertMany()
    await client.close()
    return Promise.resolve(result.insertedCount > 0) 
}

exports.select =  async (database, collection, query = {}) => {
    let client =  new MongoClient(uri, {useUnifiedTopology : true})
    await client.connect()
    let col = client.db(database).collection(collection)
    let cursor = col.find(query) //findOne()
    let array = await cursor.toArray()
    await cursor.close()
    await client.close()
    return Promise.resolve(array)
}

exports.delete = async (database, collection, query) => {
    let client = new MongoClient(uri, {useUnifiedTopology : true})
    await client.connect()
    let col = client.db(database).collection(collection)
    let result = await col.deleteOne(query) //deleteMany()
    await client.close()
    return Promise.resolve(result.deletedCount > 0)
}

expports.update = async (database, collection, filter, updateValues) => {
    let client = new MongoClient(uri, {useUnifiedTopology : true})
    await client.connect()
    let col = client.db(database).collection(collection)
    let result = await col.updateOne(filter, updateValues) //replaceOne()
    await client.close()
    return Promise.resolve(result.modifiedCount > 0)
}