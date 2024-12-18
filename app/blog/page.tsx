import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Simple Ways to Reduce Plastic Waste",
    category: "Environmental Awareness",
    excerpt: "Learn how small changes in your daily routine can significantly reduce plastic waste...",
    date: "2023-07-15"
  },
  {
    id: 2,
    title: "How to Organize a Successful Community Cleanup",
    category: "Cleanup Tips",
    excerpt: "Discover the key steps to planning and executing an impactful community cleanup event...",
    date: "2023-07-10"
  },
  {
    id: 3,
    title: "Nairobi River Restoration: A Success Story",
    category: "Success Stories",
    excerpt: "Read about how local volunteers transformed a polluted section of the Nairobi River...",
    date: "2023-07-05"
  },
  {
    id: 4,
    title: "Litter-Free Kenya Partners with Local Schools",
    category: "Announcements",
    excerpt: "We're excited to announce our new initiative to bring environmental education to schools...",
    date: "2023-07-01"
  }
]

export default function BlogNews() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Stay Informed and Inspired</h1>
      
      <p className="text-xl text-center mb-12">
        Welcome to our Blog and News section, where we share insights, tips, and stories to inspire a cleaner, greener Kenya. 
        Stay updated with our latest initiatives, success stories, and practical advice to make a positive impact on the environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.category} • {post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-green-600 hover:text-green-800 mt-4 inline-block">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Environmental Awareness</h2>
          <p>
            Learn about the importance of keeping our environment clean and the steps you can take to contribute to a healthier planet. 
            From reducing single-use plastics to recycling tips, we've got you covered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cleanup Tips</h2>
          <p>
            Join our mission to keep Kenya beautiful with our expert cleanup tips. 
            Learn how to organize community cleanups, manage waste efficiently, and make small but impactful changes in your daily life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <p>
            Be inspired by the incredible stories of individuals and communities who have made a difference. 
            See how their efforts have helped restore the beauty of Kenya's landscapes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
          <p>
            Stay in the loop with our latest initiatives, partnerships, and events. 
            Don't miss out on exciting updates and ways you can get involved.
          </p>
        </section>
      </div>
    </div>
  )
}

