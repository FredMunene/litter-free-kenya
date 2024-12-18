import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Here you would typically save the data to a database
  // For this example, we'll just log it and return a success response
  console.log('Received registration:', data)

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulate a 10% chance of an error
  if (Math.random() < 0.1) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Registration successful' }, { status: 201 })
}

