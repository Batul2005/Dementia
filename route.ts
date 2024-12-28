import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

export async function POST(request: Request) {
  const patientData = await request.json()

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db('dementia-care')
    const patients = database.collection('patients')

    await patients.insertOne(patientData)

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ success: false }, { status: 500 })
  } finally {
    await client.close()
  }
}

