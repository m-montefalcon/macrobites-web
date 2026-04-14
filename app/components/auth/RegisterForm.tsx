"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRegister } from "@/lib/api/auth/api";
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
  PersonOutlined,
} from "@mui/icons-material";

const RegisterForm = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const { user } = await apiRegister(email, password, name);
      setUser(user);
      router.push("/feed");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.message || "Registration failed");
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
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 5 },
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: 3,
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary"
            gutterBottom
          >
            Create account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join us — it only takes a minute
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
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            sx={{ mb: 2.5 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlined
                      sx={{ color: "text.secondary", fontSize: 20 }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />

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
            autoComplete="new-password"
            sx={{ mb: 2.5 }}
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

          <TextField
            fullWidth
            type={showConfirm ? "text" : "password"}
            label="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            error={!!confirmPassword && confirmPassword !== password}
            helperText={
              !!confirmPassword && confirmPassword !== password
                ? "Passwords do not match"
                : ""
            }
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
                      onClick={() => setShowConfirm((v) => !v)}
                      edge="end"
                      size="small"
                      sx={{ color: "text.secondary" }}
                    >
                      {showConfirm ? (
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
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: "primary.light",
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
              "Create account"
            )}
          </Button>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{" "}
            <Link
              href="/login"
              underline="hover"
              sx={{
                color: "primary.light",
                fontWeight: 600,
                "&:hover": { color: "primary.main" },
              }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
