import { Link } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServiceAreaSection() {
  const primaryCity = 'Clifton';
  const bergenCounty = ['Paramus', 'Hackensack', 'Fair Lawn', 'Garfield', 'Lodi', 'Saddle Brook', 'Elmwood Park'];
  const passaicCounty = ['Wayne', 'Paterson', 'Passaic', 'Little Falls', 'Totowa', 'West Milford'];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Service Areas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Proudly serving homeowners throughout Northern New Jersey
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Primary Service Area */}
          <div className="mb-8 rounded-lg border-2 border-secondary bg-secondary/5 p-6 text-center">
            <MapPin className="mx-auto mb-3 h-8 w-8 text-secondary" />
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              {primaryCity}, NJ
            </h3>
            <p className="text-muted-foreground">
              Our primary service area - same-day service often available
            </p>
          </div>

          {/* Additional Service Areas */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h4 className="mb-4 text-xl font-semibold text-foreground">
                Bergen County
              </h4>
              <div className="flex flex-wrap gap-2">
                {bergenCounty.map((city) => (
                  <span 
                    key={city}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h4 className="mb-4 text-xl font-semibold text-foreground">
                Passaic County
              </h4>
              <div className="flex flex-wrap gap-2">
                {passaicCounty.map((city) => (
                  <span 
                    key={city}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">
              Don't see your town listed? We may still service your area.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/service-areas">View All Service Areas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
