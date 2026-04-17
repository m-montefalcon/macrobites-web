"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { MAX_CHARS } from "@/lib/utils/constants";
import { TitleAndDescriptionCardProps } from "@/lib/utils/types/feed/types";

export default function TitleAndDescriptionCard({
  title,
  description,
}: TitleAndDescriptionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTooLong = description.length > MAX_CHARS;
  const displayText = isExpanded
    ? description
    : description.slice(0, MAX_CHARS);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ color: "text.secondary", fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Box sx={{ mt: 0.5 }}>
        <Typography
          variant="body2"
          sx={{ lineHeight: 1.45, display: "inline" }}
        >
          {displayText}
          {isTooLong && !isExpanded && "..."}
        </Typography>
        {isTooLong && (
          <Button
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              textTransform: "none",
              padding: "2px 4px",
              minWidth: "auto",
              marginLeft: "4px",
              color: "primary.light",
              lineHeight: 1.45,
              verticalAlign: "baseline",
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            {isExpanded ? "See less" : "See more"}
          </Button>
        )}
      </Box>
    </Box>
  );
}
