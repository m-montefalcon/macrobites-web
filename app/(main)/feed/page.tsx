import { Box, Stack } from "@mui/material";
import FeedCard from "@/app/components/feed/FeedCard";
import { FeedCardItem } from "@/lib/utils/types/feed/types";

// TODO: Replace with real data fetching logic on next PR, ignore this on code review
const dummyCards: FeedCardItem[] = [
  {
    id: "1",
    name: "Ariana Bell",
    tagline: "Motivational Speaker",
    avatarUrl: "https://i.pravatar.cc/160?img=12",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    title: "Grilled Chicken Salad Bowl",
    description:
      "This vibrant and nutritious grilled chicken salad bowl is packed with fresh greens, cherry tomatoes, cucumbers, and perfectly seasoned grilled chicken breast. Topped with a light lemon vinaigrette, it's the perfect high-protein meal for lunch prep that keeps you energized throughout the day. Meal prep friendly and ready in under 30 minutes!",
    macros: {
      calories: 520,
      protein: 43,
      carbs: 38,
      fat: 21,
    },
    createdAt: "2024-06-15T14:30:00Z",
    isGoodProteinRatio: true,
    isGoodCarbsRatio: true,
    isGoodFatRatio: true,
  },
  {
    id: "2",
    name: "Marcus Reed",
    tagline: "Fitness Coach",
    avatarUrl: "https://i.pravatar.cc/160?img=15",
    imageUrl: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    ],
    title: "Overnight Oats with Berries",
    description:
      "Wake up to a delicious and wholesome breakfast with these creamy overnight oats! Loaded with fresh blueberries, strawberries, chia seeds for omega-3s, and a generous dollop of almond butter for healthy fats. The combination of rolled oats and Greek yogurt creates the perfect texture while keeping you full until lunch. Pro tip: prep 5 jars on Sunday for easy grab-and-go breakfasts all week!",
    macros: {
      calories: 410,
      protein: 19,
      carbs: 52,
      fat: 14,
    },
    createdAt: "2024-06-14T09:15:00Z",
    isGoodProteinRatio: true,
    isGoodCarbsRatio: true,
    isGoodFatRatio: true,
  },
  {
    id: "3",
    name: "Nina Khan",
    tagline: "Nutritionist",
    avatarUrl: "https://i.pravatar.cc/160?img=25",
    imageUrl:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80",
    title: "Salmon, Rice, and Greens Plate",
    description:
      "A perfectly balanced dinner plate featuring wild-caught salmon with crispy skin, fluffy jasmine rice, and sautéed seasonal greens including spinach and bok choy. The salmon is rich in omega-3 fatty acids and provides excellent quality protein, while the greens add essential vitamins and minerals. Finished with a drizzle of sesame oil and toasted sesame seeds for an extra flavor boost. This is what clean eating looks like!",
    macros: {
      calories: 600,
      protein: 45,
      carbs: 40,
      fat: 25,
    },
    createdAt: "2024-06-13T18:45:00Z",
    isGoodProteinRatio: true,
    isGoodCarbsRatio: true,
    isGoodFatRatio: true,
  },
  {
    id: "4",
    name: "Sophia Garcia",
    tagline: "Chef & Food Blogger",
    avatarUrl: "https://i.pravatar.cc/160?img=47",
    imageUrl: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    ],
    title: "Açai Bowl Smoothie Paradise",
    description:
      "Dive into this vibrant açai bowl loaded with fresh berries, granola, coconut flakes, and topped with honey drizzle. This superfood breakfast combines antioxidants, healthy fats, and probiotics for ultimate wellness. Every spoonful is a burst of tropical flavors and textures. Perfect for Instagram and your health journey!",
    macros: {
      calories: 380,
      protein: 12,
      carbs: 62,
      fat: 8,
    },
    createdAt: "2024-06-12T07:20:00Z",
    isGoodProteinRatio: false,
    isGoodCarbsRatio: true,
    isGoodFatRatio: true,
  },
];

export default function Page() {
  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Stack spacing={3} alignItems="center">
        {dummyCards.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
      </Stack>
    </Box>
  );
}
