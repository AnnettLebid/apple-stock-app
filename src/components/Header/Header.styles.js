import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
  padding: "1rem",
  "& .wrapper": {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  "& .date-time": {
    fontSize: "0.875rem",
    fontWeight: 550,
    color: "#A6AEB5",
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
