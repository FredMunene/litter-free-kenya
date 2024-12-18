'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">We'd Love to Hear From You!</h1>
      
      <p className="text-xl text-center mb-12">
        Whether you have a question, want to collaborate, or simply wish to share your ideas, we're here to connect. 
        Reach out to us through the form below or connect with us on social media.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" required />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
          <p className="mt-4 text-sm text-gray-600">We'll get back to you within 2-3 business days.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <p className="mb-4">
            Follow us and stay updated on our efforts to keep Kenya clean. Share your cleanup stories and tag us to inspire others!
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={24} /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><Twitter size={24} /></a>
            <a href="#" className="text-pink-600 hover:text-pink-800"><Instagram size={24} /></a>
            <a href="#" className="text-blue-800 hover:text-blue-900"><Linkedin size={24} /></a>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="mb-4">
            Subscribe to our monthly newsletter for updates, tips, and upcoming events. Join our growing community of environmental champions!
          </p>
          <form onSubmit={handleSubscribe} className="flex">
            <Input 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mr-2"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

