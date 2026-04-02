"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExploreIcon from "@mui/icons-material/Explore";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isActive = (path: string) => pathname.startsWith(path);

  const activeColor = "#B0E4CC";
  const inactiveColor = "white";
  const { user, logout } = useAuth();
  const { name, avatar } = user || {};

  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#091413",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar sx={{ position: "relative", minHeight: "64px" }}>
        {/* 🔹 Logo */}
        <Typography
          variant="h6"
          component={Link}
          href="/feed"
          sx={{
            position: "absolute",
            left: 16,
            fontWeight: 600,
            letterSpacing: 0.5,
            textDecoration: "none",
            color: "white",
          }}
        >
          MacroBites
        </Typography>

        {/* 🔸 Center Icons */}
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            gap: 4,
            background: "rgba(255,255,255,0.04)",
            padding: "6px 16px",
            borderRadius: "999px",
          }}
        >
          {/* Feed */}
          <IconButton component={Link} href="/feed">
            <DynamicFeedIcon
              sx={{
                color: isActive("/feed") ? activeColor : inactiveColor,
                transition: "0.2s",
                transform: isActive("/feed") ? "scale(1.2)" : "scale(1)",
              }}
            />
          </IconButton>

          {/* Saved */}
          <IconButton component={Link} href="/saved-posts">
            <FavoriteIcon
              sx={{
                color: isActive("/saved-posts") ? activeColor : inactiveColor,
                transition: "0.2s",
                transform: isActive("/saved-posts") ? "scale(1.2)" : "scale(1)",
              }}
            />
          </IconButton>

          {/* Explore */}
          <IconButton component={Link} href="/explore">
            <ExploreIcon
              sx={{
                color: isActive("/explore") ? activeColor : inactiveColor,
                transition: "0.2s",
                transform: isActive("/explore") ? "scale(1.2)" : "scale(1)",
              }}
            />
          </IconButton>
        </Box>

        {/* 🔹 Profile */}
        <Box sx={{ position: "absolute", right: 16 }}>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: isActive("/profile") ? "#408A71" : "#285A48",
                fontSize: 14,
                transition: "0.2s",
              }}
            >
              {avatar ? (
                <Image
                  src={avatar}
                  alt="Profile"
                  width={50}
                  height={50}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Typography>
                  {name ? name.charAt(0).toUpperCase() : "U"}
                </Typography>
              )}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem component={Link} href="/profile">
              Profile
            </MenuItem>
            <MenuItem component={Link} href="/settings">
              Settings
            </MenuItem>
            <MenuItem sx={{ color: "red" }} onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
