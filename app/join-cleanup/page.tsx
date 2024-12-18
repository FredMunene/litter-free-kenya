'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

// Placeholder for cleanup events
const cleanupEvents = [
  { id: 1, date: new Date(2023, 7, 15), location: 'Nairobi National Park' },
  { id: 2, date: new Date(2023, 7, 22), location: 'Mombasa Beach' },
  { id: 3, date: new Date(2023, 8, 5), location: 'Lake Nakuru' },
]

interface FormData {
  name: string;
  email: string;
  phone: string;
  event: string;
  message: string;
}

export default function JoinCleanup() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    event: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const data = await response.json()
      toast({
        title: "Success!",
        description: data.message,
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        event: '',
        message: '',
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Join a Cleanup</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="mb-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </div>
          <div>
            {cleanupEvents.map((event) => (
              <Card key={event.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{event.location}</CardTitle>
                  <CardDescription>{event.date.toDateString()}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Volunteer Registration</h2>
          <Card>
            <CardHeader>
              <CardTitle>Sign Up for a Cleanup Event</CardTitle>
              <CardDescription>Join us in keeping Kenya clean!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address" 
                      type="email" 
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number" 
                      type="tel" 
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="event">Preferred Event</Label>
                    <select 
                      id="event" 
                      name="event"
                      value={formData.event}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select an event</option>
                      {cleanupEvents.map((event) => (
                        <option key={event.id} value={event.id}>
                          {event.location} - {event.date.toDateString()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any additional information or questions?" 
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" type="reset" onClick={() => setFormData({ name: '', email: '', phone: '', event: '', message: '' })}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Share and Invite Others</h2>
        <p className="mb-4">Help us spread the word! Share this page on social media to invite others to join our cleanup efforts.</p>
        <div className="flex space-x-4">
          <Button variant="outline" className="flex items-center">
            <Facebook className="mr-2 h-4 w-4" />
            Share on Facebook
          </Button>
          <Button variant="outline" className="flex items-center">
            <Twitter className="mr-2 h-4 w-4" />
            Share on Twitter
          </Button>
          <Button variant="outline" className="flex items-center">
            <Linkedin className="mr-2 h-4 w-4" />
            Share on LinkedIn
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Cleanup Locations</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891888295!2d36.70730744656545!3d-1.3031933930949898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1638123723801!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

