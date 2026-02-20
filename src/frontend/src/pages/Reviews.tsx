import { Card, CardContent } from '@/components/ui/card';
import { Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function Reviews() {
  const reviews = [
    {
      name: 'Michael R.',
      location: 'Clifton, NJ',
      rating: 5,
      service: 'Sprinkler Repair',
      text: 'R Irrigation fixed our sprinkler system leak quickly and professionally. They showed up on time and the price was very fair. Our lawn has never looked better!'
    },
    {
      name: 'Jennifer S.',
      location: 'Wayne, NJ',
      rating: 5,
      service: 'Spring Startup',
      text: 'Excellent spring startup service. The technician was knowledgeable and took the time to explain how to use our system efficiently. Highly recommend for anyone in the area.'
    },
    {
      name: 'David L.',
      location: 'Paramus, NJ',
      rating: 5,
      service: 'New Installation',
      text: 'We had a new irrigation system installed and couldn\'t be happier. The team was professional, the work was done on schedule, and the system works perfectly. Great experience from start to finish.'
    },
    {
      name: 'Susan M.',
      location: 'Hackensack, NJ',
      rating: 5,
      service: 'Winterization',
      text: 'Very professional winterization service. They explained the entire process and made sure everything was properly shut down for winter. Will definitely use them again in the spring.'
    },
    {
      name: 'Robert K.',
      location: 'Passaic, NJ',
      rating: 5,
      service: 'Leak Detection',
      text: 'Had a hidden leak that was driving up our water bill. R Irrigation found it quickly and repaired it the same day. Saved us a lot of money and hassle.'
    },
    {
      name: 'Patricia H.',
      location: 'Fair Lawn, NJ',
      rating: 5,
      service: 'System Upgrade',
      text: 'Upgraded to a smart controller and new efficient heads. The difference in water usage is amazing and our lawn looks healthier than ever. Great investment!'
    },
    {
      name: 'James T.',
      location: 'Clifton, NJ',
      rating: 5,
      service: 'Emergency Repair',
      text: 'Called with an emergency on a Saturday and they came out the same day. Fixed the problem quickly and charged a fair price. Really appreciate their responsiveness.'
    },
    {
      name: 'Linda W.',
      location: 'Wayne, NJ',
      rating: 5,
      service: 'Spring Startup',
      text: 'Third year using R Irrigation for spring startup. Always reliable, always professional. They take care of everything so we don\'t have to worry about it.'
    },
    {
      name: 'Thomas B.',
      location: 'Garfield, NJ',
      rating: 5,
      service: 'Sprinkler Repair',
      text: 'Multiple broken heads and a valve issue. They diagnosed everything, explained the repairs needed, and had it all fixed in one visit. Very satisfied with the service.'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Customer Reviews
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            See what homeowners throughout Northern New Jersey are saying about our irrigation services
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">5.0 Average Rating</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {review.service}
                  </span>
                </div>
                <p className="mb-4 text-foreground">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="mb-6 text-lg text-primary-foreground/90">
            Join our satisfied customers throughout Northern New Jersey
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto font-semibold"
            >
              <a href="tel:9739558340">
                <Phone className="mr-2 h-5 w-5" />
                (973) 955-8340
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto font-semibold"
            >
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
