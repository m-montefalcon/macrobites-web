import { UserCardProps } from "@/lib/utils/types/feed/types";
import { Avatar, Stack, Typography } from "@mui/material";

export default function UserCard({
  name,
  avatarUrl,
  tagline,
  createdAt,
}: UserCardProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.5}
      sx={{ px: 2, pt: 1.5, pb: 1 }}
    >
      <Avatar src={avatarUrl} alt={name} />
      <Stack spacing={0.25}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, lineHeight: 1.2 }}
        >
          {name}
          <Typography
            component="span"
            variant="body2"
            sx={{ ml: 0.5, color: "text.secondary", fontWeight: 400 }}
          >
            ({tagline})
          </Typography>
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {new Date(createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </Stack>
    </Stack>
  );
}
