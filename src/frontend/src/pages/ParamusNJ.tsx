import { Link } from '@tanstack/react-router';
import { Phone, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ParamusNJ() {
  const services = [
    'Professional irrigation system design',
    'Expert sprinkler installation',
    'Seasonal maintenance programs',
    'System repairs and troubleshooting',
    'Water-efficient upgrades',
    'Smart irrigation technology'
  ];

  const benefits = [
    'Serving Paramus for years',
    'Experienced with local properties',
    'Fully licensed and insured',
    'Competitive pricing',
    'Quality workmanship guaranteed',
    'Responsive customer service'
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Paramus, NJ</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Irrigation Services Paramus NJ
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            R Irrigation provides comprehensive irrigation services to Paramus homeowners. From new system installations to repairs and seasonal maintenance, we deliver professional service that keeps your lawn healthy and beautiful throughout the year.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-12 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary-foreground">
                Professional Irrigation Service in Paramus
              </h2>
              <p className="text-primary-foreground/90">
                Contact us for expert installation, repair, and maintenance
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
              <CardTitle className="text-2xl">Complete Irrigation Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Paramus properties deserve irrigation systems that work efficiently and reliably. We offer a full range of services to meet your needs:
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
              <CardTitle className="text-2xl">Your Paramus Irrigation Experts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                We understand the investment you've made in your Paramus home and landscape. That's why we provide:
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
              <CardTitle className="text-2xl">Irrigation Services Tailored for Paramus Homes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Paramus homeowners take pride in their properties, and a well-maintained lawn is essential to your home's appearance. Whether you live in one of the established neighborhoods near Paramus Park or in the newer developments throughout the borough, proper irrigation is key to maintaining a lush, healthy lawn.
              </p>
              <p>
                Our irrigation services are designed specifically for Bergen County properties. We account for local water regulations, seasonal weather patterns, and the specific grass types common in Paramus. From initial system design to ongoing maintenance, we ensure your irrigation system operates at peak efficiency.
              </p>
              <p>
                Many Paramus homeowners are upgrading to smart irrigation controllers that adjust watering based on weather conditions, saving water and money while keeping lawns healthy. We specialize in these modern systems and can retrofit your existing setup or design a new installation from scratch.
              </p>
              <p>
                Our team is familiar with Paramus building codes and permitting requirements, ensuring your irrigation project is completed properly and in compliance with all local regulations. We handle the details so you can enjoy the results.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Get Expert Irrigation Service in Paramus
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Call today for a free consultation and estimate
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
