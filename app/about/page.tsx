import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Litter Free Kenya</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At Litter Free Kenya, we are driven by a singular mission: to create a cleaner, greener, and healthier Kenya by addressing the growing issue of littering. Through community-driven initiatives, educational campaigns, and hands-on cleanup drives, we strive to empower individuals and communities to take ownership of their environment. Our goal is to inspire positive change in every corner of the nation, ensuring that the beauty of Kenya remains preserved for future generations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg">
          We envision a Kenya free of litter, where every individual, community, and business plays an active role in protecting and sustaining the environment. Our vision is of a country where cleanliness and waste management are integrated into daily life, and where littering is no longer a challenge but a thing of the past.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Founders' Story</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/dennis-muthomi.jpg"
            alt="Dennis Muthomi, founder of Litter Free Kenya"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Dennis Muthomi</h3>
            <p className="text-lg">
              Litter Free Kenya was founded by Dennis Muthomi, a passionate environmentalist who witnessed firsthand the growing environmental challenges facing Kenya. Dennis's love for the country's natural beauty, paired with his determination to make a difference, inspired him to take action.
            </p>
            <p className="text-lg mt-4">
              During his childhood trips across Kenya, Dennis was deeply affected by the sight of litter and pollution that tarnished the country's landscapes. This motivated him to create a movement that would not only tackle the immediate issue of littering but also educate and empower Kenyans to take responsibility for their environment.
            </p>
            <p className="text-lg mt-4">
              In 2007, Dennis founded Litter Free Kenya with a simple yet powerful goal: to rally communities around the cause of a cleaner Kenya. By bringing people together for cleanup events, spreading awareness about waste management, and fostering sustainable practices, Dennis has led the organization to create lasting change in communities across Kenya.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Empower Local Communities",
              content: "We believe that real change begins at the grassroots level. Our goal is to empower communities to actively participate in cleanup drives, waste reduction, and environmental education. We provide the tools, resources, and support needed to enable communities to take charge of their environment."
            },
            {
              title: "Raise Awareness",
              content: "Our mission is to spread awareness about the negative impacts of littering and the importance of sustainable waste management practices. Through social media, school outreach programs, workshops, and campaigns, we aim to inspire behavioral change in both urban and rural areas."
            },
            {
              title: "Organize Regular Cleanup Drives",
              content: "We coordinate regular cleanup events across Kenya, from bustling cities to remote villages. These events bring together volunteers of all ages to clean and restore public spaces, parks, beaches, and roadsides. By making cleanup a community activity, we foster a sense of unity and responsibility."
            },
            {
              title: "Reduce Plastic Pollution",
              content: "With plastic waste being a significant challenge, we are committed to tackling plastic pollution. We advocate for alternatives to single-use plastics, encourage recycling, and partner with organizations to promote sustainable packaging."
            },
            {
              title: "Strengthen Partnerships for a Cleaner Future",
              content: "Collaboration is key to scaling our impact. We work closely with government agencies, local businesses, NGOs, and educational institutions to amplify our efforts and create sustainable solutions to waste management and environmental conservation."
            }
          ].map((goal, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{goal.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Impact Areas</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-lg">
            <strong>Urban and Rural Cleanup Projects:</strong> Our teams work tirelessly in both urban and rural areas, organizing monthly cleanup events that address litter hotspots. From the busy streets of Nairobi to the quiet corners of Kenya's rural villages, we focus on high-impact areas that need immediate attention.
          </li>
          <li className="text-lg">
            <strong>Educational Campaigns:</strong> We run educational programs targeting schools, community groups, and the general public, teaching sustainable waste practices and the importance of environmental stewardship. Our campaigns are designed to equip individuals with the knowledge and skills they need to reduce waste in their daily lives.
          </li>
          <li className="text-lg">
            <strong>Beach and Coastal Cleanup:</strong> With Kenya's beautiful coastline under threat from plastic waste, we regularly organize beach cleanups to protect marine life and maintain the natural beauty of our shores.
          </li>
          <li className="text-lg">
            <strong>Waste Management Advocacy:</strong> Through partnerships with local governments and businesses, we advocate for better waste management infrastructure, from improved waste segregation to accessible recycling points. We aim to bring sustainable waste solutions to every corner of Kenya.
          </li>
          <li className="text-lg">
            <strong>Sustainability Partnerships:</strong> We collaborate with organizations, both locally and internationally, to promote sustainability in all sectors. By supporting policies that prioritize environmental protection, we help create a cleaner, more sustainable future for Kenya.
          </li>
        </ul>
      </section>
    </div>
  )
}

