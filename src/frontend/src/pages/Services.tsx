import { Link } from '@tanstack/react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Droplets, Sun, Snowflake, Search, ArrowUpCircle, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Sprinkler Repair',
      description: 'Fast, reliable repairs for all types of irrigation system problems.',
      details: [
        'Broken or damaged sprinkler heads',
        'Leaking valves and pipes',
        'Controller and timer issues',
        'Low water pressure problems',
        'Zone coverage adjustments',
        'Emergency repair service available'
      ]
    },
    {
      icon: Droplets,
      title: 'Sprinkler Installation',
      description: 'Professional design and installation of complete irrigation systems.',
      details: [
        'Custom system design for your property',
        'High-efficiency sprinkler heads',
        'Smart controller installation',
        'Proper zone layout and coverage',
        'Underground pipe installation',
        'Backflow prevention device'
      ]
    },
    {
      icon: Sun,
      title: 'Spring Startup',
      description: 'Complete system activation and inspection for the growing season.',
      details: [
        'System pressurization and activation',
        'Full inspection of all components',
        'Sprinkler head adjustment',
        'Controller programming',
        'Leak detection and repair',
        'Efficiency optimization'
      ]
    },
    {
      icon: Snowflake,
      title: 'Winterization',
      description: 'Protect your system from freeze damage with proper shutdown.',
      details: [
        'Complete system blowout',
        'Air compressor service',
        'Controller shutdown',
        'Backflow device draining',
        'System inspection',
        'Freeze damage prevention'
      ]
    },
    {
      icon: Search,
      title: 'Leak Detection',
      description: 'Advanced techniques to find and repair hidden leaks.',
      details: [
        'Underground leak location',
        'Pressure testing',
        'Water usage analysis',
        'Pipe and valve inspection',
        'Efficient repair methods',
        'Water conservation advice'
      ]
    },
    {
      icon: ArrowUpCircle,
      title: 'System Upgrades',
      description: 'Modernize your irrigation with the latest technology.',
      details: [
        'Smart controller installation',
        'High-efficiency nozzles',
        'Rain and moisture sensors',
        'Drip irrigation zones',
        'Water-saving technology',
        'System automation'
      ]
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Irrigation Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Complete sprinkler and irrigation solutions for homeowners in Northern New Jersey. From repairs to new installations, we handle all your lawn watering needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
            Need Irrigation Service Today?
          </h2>
          <p className="mb-6 text-lg text-primary-foreground/90">
            Call now or request a free estimate for any of our services
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
