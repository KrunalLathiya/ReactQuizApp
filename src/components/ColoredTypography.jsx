// src/components/ColoredTypography.jsx

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const ColoredTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isCorrect",
})(({ theme, isCorrect }) => ({
  color: isCorrect ? theme.palette.success.main : theme.palette.error.main,
}));

export default ColoredTypography;
