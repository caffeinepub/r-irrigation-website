import { Link } from '@tanstack/react-router';
import { Phone, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function CliftonNJ() {
  const services = [
    'Emergency sprinkler repairs',
    'Complete system installations',
    'Spring startup and activation',
    'Fall winterization service',
    'Leak detection and repair',
    'Smart controller upgrades'
  ];

  const benefits = [
    'Local Clifton-based service',
    'Same-day service often available',
    'Licensed and insured professionals',
    'Upfront pricing with no hidden fees',
    'Satisfaction guaranteed',
    'Free estimates on new installations'
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Clifton, NJ</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Sprinkler Repair Clifton NJ
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            R Irrigation is your trusted local provider for professional sprinkler repair and irrigation services in Clifton, New Jersey. We understand the unique needs of Clifton homeowners and deliver fast, reliable service to keep your lawn looking its best.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-12 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary-foreground">
                Need Sprinkler Repair in Clifton Today?
              </h2>
              <p className="text-primary-foreground/90">
                Call now for fast service - same-day appointments often available
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
              <CardTitle className="text-2xl">Clifton Irrigation Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                As Clifton residents ourselves, we know how important a healthy lawn is to your home's curb appeal. Our comprehensive irrigation services include:
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
              <CardTitle className="text-2xl">Why Clifton Homeowners Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                We've built our reputation in Clifton on quality work and honest service. When you call R Irrigation, you can expect:
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
              <CardTitle className="text-2xl">Expert Sprinkler Service for Clifton Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Clifton's diverse neighborhoods, from the tree-lined streets near Weasel Brook Park to the newer developments off Route 3, each have unique irrigation needs. Our experienced technicians understand the local soil conditions, water pressure variations, and seasonal challenges that affect sprinkler systems in Clifton.
              </p>
              <p>
                Whether you're dealing with a broken sprinkler head after a harsh winter, need your system activated for spring, or want to upgrade to a more efficient irrigation setup, we provide prompt, professional service. We work with all major sprinkler brands and can repair or replace any component of your system.
              </p>
              <p>
                Our Clifton customers appreciate our straightforward approach - we diagnose the problem, explain your options clearly, and complete repairs efficiently. No surprises, no pressure, just honest service from your neighbors in the community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Ready to Fix Your Clifton Sprinkler System?
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Contact us today for fast, reliable service
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
