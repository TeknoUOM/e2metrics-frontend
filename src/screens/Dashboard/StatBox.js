import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { MoonLoader } from "react-spinners";

// import ProgressCircle from "./ProgressCircle";

const StatBox = ({ value, subtitle, loading }) => {
  return (
    <>
      <Box width="100%" m="0 10px">
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
              <Typography sx={{ fontSize: 18 }}>{subtitle}</Typography>
            </Box>
            {loading ? (
              <MoonLoader size={25} speedMultiplier={1} />
            ) : (
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "black" }}
              >
                {value}
              </Typography>
            )}
          </Box>
          <Box>{/*<ProgressCircle progress={progress} />*/}</Box>
        </Box>
      </Box>
    </>
  );
};

export default StatBox;
