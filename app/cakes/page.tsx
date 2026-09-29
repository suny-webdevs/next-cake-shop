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
import { Cake, ArrowLeft } from "lucide-react";

const allCakes = [
  {
    id: 1,
    name: "Chocolate Dream",
    description: "Rich dark chocolate layers with ganache frosting",
    price: "$42",
    category: "Chocolate",
  },
  {
    id: 2,
    name: "Vanilla Cloud",
    description: "Light vanilla sponge with buttercream swirls",
    price: "$38",
    category: "Vanilla",
  },
  {
    id: 3,
    name: "Red Velvet Royale",
    description: "Velvety red cake with cream cheese frosting",
    price: "$45",
    category: "Specialty",
  },
  {
    id: 4,
    name: "Lemon Sunshine",
    description: "Zesty lemon cake with tangy citrus glaze",
    price: "$36",
    category: "Fruit",
  },
  {
    id: 5,
    name: "Carrot Spice",
    description: "Moist carrot cake with walnuts and cream cheese",
    price: "$40",
    category: "Spice",
  },
  {
    id: 6,
    name: "Strawberry Bliss",
    description: "Fresh strawberry layers with whipped cream",
    price: "$44",
    category: "Fruit",
  },
];

export default function CakesPage() {
  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-foreground text-3xl font-bold">Our Cakes</h1>
          <p className="text-muted-foreground">
            Browse our full collection of handcrafted cakes
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {["All", "Chocolate", "Vanilla", "Fruit", "Specialty", "Spice"].map(
          (cat) => (
            <Badge
              key={cat}
              variant={cat === "All" ? "default" : "outline"}
              className="cursor-pointer"
            >
              {cat}
            </Badge>
          ),
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allCakes.map((cake) => (
          <Card
            key={cake.id}
            className="overflow-hidden transition-shadow hover:shadow-lg"
          >
            <div className="bg-muted flex h-48 items-center justify-center">
              <Cake className="text-muted-foreground h-20 w-20" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{cake.name}</CardTitle>
                <Badge variant="secondary">{cake.category}</Badge>
              </div>
              <CardDescription>{cake.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-primary text-xl font-bold">
                  {cake.price}
                </span>
                <Button
                  size="sm"
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
