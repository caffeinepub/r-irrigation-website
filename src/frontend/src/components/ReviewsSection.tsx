import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Michael R.',
      location: 'Clifton, NJ',
      rating: 5,
      text: 'R Irrigation fixed our sprinkler system leak quickly and professionally. They showed up on time and the price was very fair. Our lawn has never looked better!'
    },
    {
      name: 'Jennifer S.',
      location: 'Wayne, NJ',
      rating: 5,
      text: 'Excellent spring startup service. The technician was knowledgeable and took the time to explain how to use our system efficiently. Highly recommend for anyone in the area.'
    },
    {
      name: 'David L.',
      location: 'Paramus, NJ',
      rating: 5,
      text: 'We had a new irrigation system installed and couldn\'t be happier. The team was professional, the work was done on schedule, and the system works perfectly. Great experience from start to finish.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real reviews from satisfied homeowners in Northern New Jersey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
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
      </div>
    </section>
  );
}
