import { Button } from '@/components/ui/button';
import { Building2, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Simplify Your Venue Bookings
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your university club event planning with our easy-to-use venue management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/login">Club Login</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/admin">Admin Portal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose UniVenue?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="h-10 w-10" />}
              title="Easy Booking"
              description="Book venues in minutes with our streamlined process and intuitive interface."
            />
            <FeatureCard
              icon={<Building2 className="h-10 w-10" />}
              title="Venue Variety"
              description="Access a wide range of venues suitable for any type of club event or meeting."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Real-time Availability"
              description="Check venue availability instantly and plan your events accordingly."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}