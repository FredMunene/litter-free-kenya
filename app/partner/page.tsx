import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Partner() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Together, We Can Achieve More</h1>
      
      <p className="text-xl text-center mb-12">
        We believe that partnerships are key to creating lasting change. Join us in our mission to make Kenya litter-free. 
        Whether you're a business, NGO, or government agency, there's a role for you in this journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Corporate Social Responsibility (CSR) Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Enhance your brand image and show your commitment to the environment through meaningful CSR initiatives.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Make a direct impact by engaging with local communities and inspiring action toward environmental sustainability.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recognition and Visibility</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Gain recognition as an environmentally conscious partner. Your contributions will be highlighted in our campaigns and events.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Get Involved</h2>
        <p className="mb-4">Here are some ways to collaborate with us:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Sponsor a cleanup drive or event.</li>
          <li>Provide resources or expertise to enhance our initiatives.</li>
          <li>Collaborate on awareness campaigns or educational programs.</li>
        </ul>
      </section>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's work together to make a difference.</h2>
        <p className="mb-8">Contact us today to start a conversation about partnership opportunities.</p>
        <Link href="/contact">
          <Button size="lg">Contact Us About Partnerships</Button>
        </Link>
      </div>
    </div>
  )
}

