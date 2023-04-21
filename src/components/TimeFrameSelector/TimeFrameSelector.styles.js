import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

export const StyledStack = styled(Stack)(() => ({
  padding: "0.5rem",
  "& .toggle-button": {
    border: "none",
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiButtonBase-root": {
    textTransform: "none",
  },
}));
