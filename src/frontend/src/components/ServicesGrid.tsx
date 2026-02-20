import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Wrench, Droplets, Sun, Snowflake, Search, ArrowUpCircle } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Wrench,
      title: 'Sprinkler Repair',
      description: 'Fast, reliable repairs for broken heads, leaking valves, and system malfunctions to keep your lawn healthy.'
    },
    {
      icon: Droplets,
      title: 'Sprinkler Installation',
      description: 'Professional design and installation of efficient irrigation systems tailored to your property\'s needs.'
    },
    {
      icon: Sun,
      title: 'Spring Startup',
      description: 'Complete system activation, inspection, and adjustment to prepare your sprinklers for the growing season.'
    },
    {
      icon: Snowflake,
      title: 'Winterization',
      description: 'Protect your investment with proper system blowout and shutdown to prevent freeze damage.'
    },
    {
      icon: Search,
      title: 'Leak Detection',
      description: 'Advanced techniques to locate and repair hidden leaks, saving water and reducing your utility bills.'
    },
    {
      icon: ArrowUpCircle,
      title: 'System Upgrades',
      description: 'Modernize your irrigation with smart controllers, efficient nozzles, and water-saving technology.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Complete irrigation solutions for residential properties in Northern New Jersey
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
