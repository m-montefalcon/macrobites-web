import { Card, Stack } from "@mui/material";
import UserCard from "@/app/components/feed/components/UserCard";
import TitleAndDescriptionCard from "@/app/components/feed/components/TitleAndDescriptionCard";
import MacrosCard from "@/app/components/feed/components/MacrosCard";
import ActionButtons from "@/app/components/feed/components/ActionButtons";
import ImageCard from "@/app/components/shared/ImageCard";
import { FeedCardProps } from "@/lib/utils/types/feed/types";

export default function FeedCard({ item }: FeedCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        borderRadius: 3,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <UserCard
        name={item.name}
        tagline={item.tagline}
        avatarUrl={item.avatarUrl}
        createdAt={item.createdAt}
      />

      <Stack spacing={1.25} sx={{ px: 2, pt: 1.25, pb: 1.25 }}>
        <TitleAndDescriptionCard
          title={item.title}
          description={item.description}
        />
        <MacrosCard id={item.id} macros={item.macros} />
      </Stack>

      <ImageCard src={item.imageUrl} alt={`${item.name} post image`} />

      <ActionButtons />
    </Card>
  );
}
