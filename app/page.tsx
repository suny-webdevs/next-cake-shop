import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cake, Sparkles, Truck } from "lucide-react";

const featuredCakes = [
  {
    id: 1,
    name: "Chocolate Dream",
    description: "Rich dark chocolate layers with ganache frosting",
    price: "$42",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Vanilla Cloud",
    description: "Light vanilla sponge with buttercream swirls",
    price: "$38",
    badge: "Classic",
  },
  {
    id: 3,
    name: "Red Velvet Royale",
    description: "Velvety red cake with cream cheese frosting",
    price: "$45",
    badge: "Popular",
  },
];

const highlights = [
  {
    icon: Cake,
    title: "Fresh Daily",
    description: "Every cake is baked fresh each morning",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    description: "Personalized cakes for every occasion",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery available in your area",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <section className="mb-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Welcome to Cake Shop
        </Badge>
        <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Handcrafted Cakes for Every Moment
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
          Discover our collection of artisan cakes, baked with love and the
          finest ingredients. From birthdays to weddings, we make every
          celebration sweeter.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/cakes">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Browse Cakes
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-16 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="text-center">
            <CardHeader>
              <item.icon className="text-primary mx-auto mb-2 h-10 w-10" />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="text-foreground mb-8 text-2xl font-bold">
          Featured Cakes
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredCakes.map((cake) => (
            <Card key={cake.id} className="overflow-hidden">
              <div className="bg-muted flex h-40 items-center justify-center">
                <Cake className="text-muted-foreground h-16 w-16" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{cake.name}</CardTitle>
                  <Badge variant="outline">{cake.badge}</Badge>
                </div>
                <CardDescription>{cake.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-lg font-bold">
                    {cake.price}
                  </span>
                  <Link href={`/cakes`}>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
