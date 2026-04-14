import { Skeleton } from "@mui/material";
import { Box } from "@mui/material";

export default function Loading() {
  const NUMBER_OF_POSTS = 5;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Skeleton variant="rounded" width={650} height={140} />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        mt={4}
        gap={4}
      >
        {Array.from({ length: NUMBER_OF_POSTS }).map((_, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={2}
          >
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={40} height={40} />
              <Box display="flex" flexDirection="column" gap={0.5}>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "0.875rem", width: 100 }}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "0.75rem", width: 150 }}
                />
              </Box>
            </Box>
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: 650 }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: 650 }} />
            <Skeleton variant="rounded" width={650} height={650} />
          </Box>
        ))}
      </Box>
    </>
  );
}
