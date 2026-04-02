"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiLogin } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Link,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { user } = await apiLogin(email, password);
      setUser(user);
      router.push("/feed");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default", // #091413
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 5 },
          bgcolor: "background.paper", // #285A48
          border: "1px solid",
          borderColor: "tertiary.main", // #408A71
          borderRadius: 3,
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary" // #B0E4CC
            gutterBottom
          >
            Welcome back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {" "}
            {/* #408A71 */}
            Sign in to your account to continue
          </Typography>
        </Box>

        {/* Error Alert */}
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 3,
              bgcolor: "#1a0a0a",
              color: "#f87171",
              border: "1px solid #7f1d1d",
              "& .MuiAlert-icon": { color: "#f87171" },
            }}
          >
            {error}
          </Alert>
        )}

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            sx={{ mb: 2.5 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined
                      sx={{ color: "text.secondary", fontSize: 20 }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            sx={{ mb: 3.5 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{ color: "text.secondary", fontSize: 20 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((v) => !v)}
                      edge="end"
                      size="small"
                      sx={{ color: "text.secondary" }}
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            size="large"
            sx={{
              py: 1.5,
              fontWeight: 600,
              fontSize: "1rem",
              bgcolor: "primary.main", // #408A71
              color: "primary.contrastText", // #091413
              "&:hover": {
                bgcolor: "primary.light", // #B0E4CC
                color: "#091413",
              },
              "&:disabled": {
                bgcolor: "secondary.main",
                opacity: 0.6,
              },
            }}
          >
            {loading ? (
              <CircularProgress
                size={22}
                sx={{ color: "primary.contrastText" }}
              />
            ) : (
              "Sign in"
            )}
          </Button>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            No account?{" "}
            <Link
              href="/register"
              underline="hover"
              sx={{
                color: "primary.light", // #B0E4CC
                fontWeight: 600,
                "&:hover": { color: "primary.main" },
              }}
            >
              Create one
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
