import { Box, Typography } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { useWebSocket } from "../../hooks/useWebSocket";
import { StyledCard } from "./Header.styles";

export const Header = () => {
  const { lastPrice, change, percentChange, lastUpdateTime } = useWebSocket();

  return (
    <StyledCard>
      <Box className="wrapper">
        <Box>
          <Typography fontSize="2rem" fontWeight="600">
            Apple Inc
          </Typography>
          <Typography className="date-time">As of: {lastUpdateTime}</Typography>
        </Box>
        <Box>
          <Box className="price-wrapper">
            {percentChange > 0 ? (
              <ArrowDropUp fontSize="large" htmlColor="#03AC13" />
            ) : (
              <ArrowDropDown fontSize="large" htmlColor="#FF0800" />
            )}
            <Box sx={{ minWidth: 160 }}>
              <Typography fontSize="2.2rem" fontWeight="800" title={lastPrice}>
                {lastPrice}
              </Typography>
            </Box>
          </Box>
          <Box
            className="change-wrapper"
            sx={{ color: percentChange > 0 ? "#03AC13" : "#FF0800" }}
          >
            <Typography>{change}</Typography>
            <Typography>({percentChange}%)</Typography>
          </Box>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default Header;