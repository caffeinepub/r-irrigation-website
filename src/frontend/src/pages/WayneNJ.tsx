import { Link } from '@tanstack/react-router';
import { Phone, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function WayneNJ() {
  const services = [
    'Fast sprinkler system repairs',
    'Broken head replacement',
    'Valve and pipe leak repairs',
    'Controller diagnostics and repair',
    'Zone coverage optimization',
    'Preventive maintenance service'
  ];

  const benefits = [
    'Prompt service in Wayne Township',
    'Experienced local technicians',
    'All repairs guaranteed',
    'Fair, transparent pricing',
    'Emergency service available',
    'Free repair estimates'
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Wayne, NJ</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Sprinkler Repair Wayne NJ
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            When your Wayne sprinkler system needs repair, R Irrigation responds quickly with expert service. We specialize in diagnosing and fixing all types of irrigation problems to get your system back to working perfectly.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-12 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary-foreground">
                Sprinkler Broken? We Can Fix It Today
              </h2>
              <p className="text-primary-foreground/90">
                Fast, reliable repairs for Wayne homeowners
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto font-semibold whitespace-nowrap"
            >
              <a href="tel:9739558340">
                <Phone className="mr-2 h-5 w-5" />
                (973) 955-8340
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Wayne Sprinkler Repair Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                From minor adjustments to major repairs, we handle all sprinkler system issues in Wayne Township:
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Why Wayne Residents Trust Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                We've earned the trust of Wayne homeowners through reliable service and quality repairs:
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Local Content */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Expert Sprinkler Repair Throughout Wayne Township</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Wayne Township's larger properties and varied terrain can put extra demands on irrigation systems. Whether you're near Packanack Lake, in the Preakness section, or anywhere else in Wayne, we understand the challenges your sprinkler system faces.
              </p>
              <p>
                Common issues we repair include broken sprinkler heads from lawn equipment or freeze damage, leaking valves that waste water and create muddy spots, controllers that won't turn on or off properly, and zones that don't provide adequate coverage. Our technicians arrive with fully stocked trucks to complete most repairs in a single visit.
              </p>
              <p>
                We work efficiently to minimize disruption to your property and schedule. After completing repairs, we test the entire system to ensure everything is working correctly. We also provide recommendations for preventing future problems and improving system efficiency.
              </p>
              <p>
                Many Wayne homeowners have older irrigation systems that could benefit from upgrades. While we're there for repairs, we can discuss options for improving your system's performance and reducing water usage. Our goal is to keep your lawn healthy while saving you money on water bills.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Need Sprinkler Repair in Wayne?
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Call now for fast, professional service
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto font-semibold"
            >
              <a href="tel:9739558340">
                <Phone className="mr-2 h-5 w-5" />
                Call (973) 955-8340
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 text-lg px-8 py-6 h-auto font-semibold"
            >
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
