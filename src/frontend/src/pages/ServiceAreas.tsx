import { Link } from '@tanstack/react-router';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ServiceAreas() {
  const primaryCity = {
    name: 'Clifton',
    description: 'Our home base with same-day service often available',
    link: '/clifton-nj'
  };

  const bergenCounty = [
    { name: 'Paramus', link: '/paramus-nj' },
    { name: 'Hackensack', link: '/hackensack-nj' },
    { name: 'Fair Lawn', link: null },
    { name: 'Garfield', link: null },
    { name: 'Lodi', link: null },
    { name: 'Saddle Brook', link: null },
    { name: 'Elmwood Park', link: null },
    { name: 'Ridgewood', link: null },
    { name: 'Fort Lee', link: null },
    { name: 'Teaneck', link: null }
  ];

  const passaicCounty = [
    { name: 'Wayne', link: '/wayne-nj' },
    { name: 'Paterson', link: null },
    { name: 'Passaic', link: null },
    { name: 'Little Falls', link: null },
    { name: 'Totowa', link: null },
    { name: 'West Milford', link: null },
    { name: 'Pompton Lakes', link: null },
    { name: 'Woodland Park', link: null },
    { name: 'Hawthorne', link: null },
    { name: 'Haledon', link: null }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Service Areas in Northern New Jersey
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            R Irrigation proudly serves homeowners throughout Bergen County and Passaic County with professional sprinkler and irrigation services.
          </p>
        </div>

        {/* Primary Service Area */}
        <div className="mb-12">
          <Card className="border-2 border-secondary bg-secondary/5">
            <CardHeader className="text-center">
              <MapPin className="mx-auto mb-3 h-10 w-10 text-secondary" />
              <CardTitle className="text-3xl">
                {primaryCity.name}, NJ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-lg text-muted-foreground">
                {primaryCity.description}
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to={primaryCity.link}>
                  Learn More About Service in {primaryCity.name}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* County Service Areas */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Bergen County */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Bergen County</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {bergenCounty.map((city) => (
                  <div key={city.name} className="flex items-center justify-between rounded-lg border bg-background p-3">
                    <span className="font-medium text-foreground">{city.name}</span>
                    {city.link ? (
                      <Button asChild variant="link" size="sm" className="text-primary">
                        <Link to={city.link}>View Details →</Link>
                      </Button>
                    ) : (
                      <span className="text-sm text-muted-foreground">Service Available</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Passaic County */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Passaic County</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {passaicCounty.map((city) => (
                  <div key={city.name} className="flex items-center justify-between rounded-lg border bg-background p-3">
                    <span className="font-medium text-foreground">{city.name}</span>
                    {city.link ? (
                      <Button asChild variant="link" size="sm" className="text-primary">
                        <Link to={city.link}>View Details →</Link>
                      </Button>
                    ) : (
                      <span className="text-sm text-muted-foreground">Service Available</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
            Don't See Your Town Listed?
          </h2>
          <p className="mb-6 text-lg text-primary-foreground/90">
            We may still service your area. Give us a call to find out!
          </p>
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
        </div>
      </div>
    </div>
  );
}
