"use client";

import { useState, useRef } from "react";
import { Box, Dialog, IconButton, CardMedia } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ImageCardProps } from "@/lib/utils/types/feed/types";

export default function ImageCard({ src, alt }: ImageCardProps) {
  const images = Array.isArray(src) ? src : [src];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const remainingCount = images.length - 4;
  const touchStartX = useRef(0);

  const handleImageClick = (idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // Single image - simple display with modal
  if (images.length === 1) {
    return (
      <>
        <Box
          onClick={() => handleImageClick(0)}
          sx={{ cursor: "pointer", width: "100%", aspectRatio: "4 / 3" }}
        >
          <CardMedia
            component="img"
            image={images[0]}
            alt={alt}
            sx={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }}
          />
        </Box>

        {/* Modal Lightbox */}
        <Dialog
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: "#000",
              margin: 0,
              padding: 0,
              overflow: "hidden",
            },
          }}
        >
          <Box
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#000",
              width: "100%",
              height: "100vh",
              maxHeight: "90vh",
              overflow: "hidden",
            }}
          >
            {/* Main image */}
            <CardMedia
              component="img"
              image={images[currentIdx]}
              alt={`${alt} ${currentIdx + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Dialog>
      </>
    );
  }

  // Multiple images - grid layout
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%",
        }}
      >
        {/* Special layout for 3 images: 1 top, 2 bottom */}
        {images.length === 3 ? (
          <>
            <Box
              onClick={() => handleImageClick(0)}
              sx={{
                position: "relative",
                aspectRatio: "4 / 3",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <CardMedia
                component="img"
                image={images[0]}
                alt={`${alt} 1`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 0.5,
              }}
            >
              {[1, 2].map((idx) => (
                <Box
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  sx={{
                    position: "relative",
                    aspectRatio: "1",
                    cursor: "pointer",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={images[idx]}
                    alt={`${alt} ${idx + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </>
        ) : (
          /* Standard 2x2 grid for other cases */
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0.5,
              width: "100%",
            }}
          >
            {Array.from({ length: Math.min(4, images.length) }).map(
              (_, idx) => (
                <Box
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  sx={{
                    position: "relative",
                    aspectRatio: "1",
                    cursor: "pointer",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={images[idx]}
                    alt={`${alt} ${idx + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {idx === 3 && remainingCount > 0 && (
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        +{remainingCount}
                      </Box>
                    </Box>
                  )}
                </Box>
              ),
            )}
          </Box>
        )}
      </Box>

      {/* Modal Lightbox */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#000",
            margin: 0,
            padding: 0,
            overflow: "hidden",
          },
        }}
      >
        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#000",
            width: "100%",
            height: "100vh",
            maxHeight: "90vh",
            overflow: "hidden",
          }}
        >
          {/* Main image */}
          <CardMedia
            component="img"
            image={images[currentIdx]}
            alt={`${alt} ${currentIdx + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />

          {/* Left chevron */}
          {images.length > 1 && (
            <IconButton
              aria-label="previous image"
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 16,
                color: "primary.light",
                transition: "opacity 0.2s",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}

          {/* Right chevron */}
          {images.length > 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 16,
                color: "primary.light",
                transition: "opacity 0.2s",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <ChevronRightIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}

          {/* Dot indicators - only show if multiple images */}
          {images.length > 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 0.75,
                padding: "4px 8px",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "12px",
              }}
            >
              {images.map((_, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor:
                      idx === currentIdx
                        ? "primary.light"
                        : "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s",
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}
