import { Link } from '@tanstack/react-router';
import { Phone, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function HackensackNJ() {
  const services = [
    'Complete sprinkler system service',
    'Spring system startup',
    'Fall winterization',
    'Repair and troubleshooting',
    'System efficiency audits',
    'Ongoing maintenance plans'
  ];

  const benefits = [
    'Serving Hackensack homeowners',
    'Reliable, on-time service',
    'Licensed professionals',
    'Honest recommendations',
    'Quality parts and materials',
    'Customer satisfaction focus'
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Hackensack, NJ</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Sprinkler Service Hackensack NJ
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            R Irrigation delivers dependable sprinkler service to Hackensack residents. Whether you need seasonal maintenance, system repairs, or ongoing care for your irrigation system, we provide the professional service your lawn deserves.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-12 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary-foreground">
                Professional Sprinkler Service in Hackensack
              </h2>
              <p className="text-primary-foreground/90">
                Reliable maintenance and repair for your irrigation system
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
              <CardTitle className="text-2xl">Comprehensive Sprinkler Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Keep your Hackensack lawn healthy year-round with our complete range of sprinkler services:
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
              <CardTitle className="text-2xl">Your Hackensack Service Provider</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Hackensack homeowners choose R Irrigation for dependable service and professional results:
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
              <CardTitle className="text-2xl">Trusted Sprinkler Service for Hackensack Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hackensack's urban and suburban properties require irrigation systems that work efficiently and reliably. From the residential neighborhoods to properties near the Hackensack River, we provide sprinkler service that keeps lawns green and healthy throughout the growing season.
              </p>
              <p>
                Our seasonal service is particularly popular with Hackensack homeowners. In spring, we activate your system, check for winter damage, adjust all sprinkler heads for proper coverage, and program your controller for efficient watering. In fall, we properly winterize your system to prevent costly freeze damage.
              </p>
              <p>
                Between seasons, we're available for repairs and adjustments. If you notice dry spots, pooling water, or any other irrigation issues, we respond quickly to diagnose and fix the problem. Regular maintenance prevents small issues from becoming expensive repairs.
              </p>
              <p>
                We also help Hackensack homeowners optimize their irrigation systems for water efficiency. With the right adjustments and upgrades, you can maintain a beautiful lawn while reducing water consumption and lowering utility costs. Our technicians provide practical advice based on years of experience with Bergen County properties.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Schedule Your Sprinkler Service in Hackensack
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Contact us today for reliable irrigation service
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
