import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Loading from "../../common/Loading/Loading";
// import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box width="100%" m="0 10px">
          <Box display="flex" justifyContent="space-between">
            <Box>
              {icon}
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "black" }}
              >
                {title}
              </Typography>
            </Box>
            <Box>{/*<ProgressCircle progress={progress} />*/}</Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography sx={{ color: "green", fontSize: 18 }}>
              {subtitle}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default StatBox;
