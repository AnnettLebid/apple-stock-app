import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
  padding: "0.313rem",
  "& .wrapper": {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  "& .date-time": {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#9A9C9F",
  },
  "& .price-wrapper": {
    display: "flex",
    alignItems: "center",
  },
  "& .change-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    "&.MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
}));
