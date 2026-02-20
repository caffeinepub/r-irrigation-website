export default function WhyChooseUs() {
  const benefits = [
    {
      icon: '/assets/generated/icon-fast-service.dim_64x64.png',
      title: 'Fast Service',
      description: 'Quick response times and efficient repairs to get your system running smoothly.'
    },
    {
      icon: '/assets/generated/icon-experienced.dim_64x64.png',
      title: 'Experienced Technicians',
      description: 'Our skilled team has years of experience with all types of irrigation systems.'
    },
    {
      icon: '/assets/generated/icon-reliable.dim_64x64.png',
      title: 'Reliable Work',
      description: 'Quality workmanship backed by our satisfaction guarantee and warranty.'
    },
    {
      icon: '/assets/generated/icon-location.dim_64x64.png',
      title: 'Serving Northern NJ',
      description: 'Local experts familiar with the unique needs of Bergen and Passaic County properties.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why Choose R Irrigation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're committed to providing the best irrigation services in Northern New Jersey
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-medium transition-shadow"
            >
              <img 
                src={benefit.icon} 
                alt={benefit.title}
                className="mb-4 h-16 w-16"
              />
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
