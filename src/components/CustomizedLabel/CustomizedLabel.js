import { Box } from "@mui/material";

export const CustomizedLabel = ({ title, viewBox }) => {
  const x = viewBox.width + viewBox.x + 5;
  const y = viewBox.y - 10;
  return (
    <g>
      <foreignObject x={x} y={y} width={60} height={100}>
        <Box
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#03AC13",
            borderRadius: "5px",
          }}
        >
          {title}
        </Box>
      </foreignObject>
    </g>
  );
};

export default CustomizedLabel;
