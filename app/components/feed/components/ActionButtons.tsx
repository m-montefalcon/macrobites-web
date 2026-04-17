import { Box, IconButton } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

export default function ActionButtons() {
  return (
    <Box
      sx={{
        px: 0.75,
        py: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton sx={{ color: "text.primary" }} aria-label="like post">
          <FavoriteBorderRoundedIcon />
        </IconButton>
        <IconButton sx={{ color: "text.primary" }} aria-label="comment post">
          <ChatBubbleOutlineRoundedIcon />
        </IconButton>
      </Box>

      <IconButton sx={{ color: "text.primary" }} aria-label="save post">
        <BookmarkBorderRoundedIcon />
      </IconButton>
    </Box>
  );
}
