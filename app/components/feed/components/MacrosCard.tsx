import { Box, Typography, Tooltip } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { MacrosCardProps } from "@/lib/utils/types/feed/types";
import {
  isGoodProteinRatio,
  isGoodCarbsRatio,
  isGoodFatRatio,
} from "@/lib/utils/helpers";

export default function MacrosCard({ id, macros }: MacrosCardProps) {
  const proteinGood = isGoodProteinRatio(macros);
  const carbsGood = isGoodCarbsRatio(macros);
  const fatGood = isGoodFatRatio(macros);
  return (
    <Box
      sx={{
        mt: 0.75,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", fontWeight: 700 }}
        >
          Macros:
        </Typography>
        {proteinGood && (
          <Tooltip
            title="Protein is a good amount for this meal"
            enterTouchDelay={0}
            leaveTouchDelay={1500}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FitnessCenterIcon
                sx={{ fontSize: 14, color: "primary.light", cursor: "pointer" }}
              />
            </Box>
          </Tooltip>
        )}
        {carbsGood && (
          <Tooltip
            title="Carbs are well-balanced for this meal"
            enterTouchDelay={0}
            leaveTouchDelay={1500}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BoltIcon
                sx={{ fontSize: 14, color: "primary.light", cursor: "pointer" }}
              />
            </Box>
          </Tooltip>
        )}
        {fatGood && (
          <Tooltip
            title="Fat content is optimal for this meal"
            enterTouchDelay={0}
            leaveTouchDelay={1500}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalFireDepartmentIcon
                sx={{ fontSize: 14, color: "primary.light", cursor: "pointer" }}
              />
            </Box>
          </Tooltip>
        )}
      </Box>
      <Box sx={{ mt: 0.75, display: "flex", flexWrap: "wrap", gap: 0.75 }}>
        {Object.entries(macros)
          .filter(([, value]) => value !== undefined)
          .map(([key, value], idx) => {
            const unit = key === "calories" ? " kcal" : "g";
            return (
              <Typography
                key={`${id}-macro-${idx}`}
                variant="body2"
                sx={{
                  px: 1,
                  py: 0.5,
                  borderRadius: 1.5,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "action.hover",
                  lineHeight: 1.2,
                }}
              >
                {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}${unit}`}
              </Typography>
            );
          })}
      </Box>
    </Box>
  );
}
