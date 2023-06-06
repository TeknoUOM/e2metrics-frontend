import { Box,Button,Typography,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import StatBox from "../../Components/StatBox";
import ProgressCircle from "../../Components/ProgressCircle";
import { padding } from "@mui/system";
import { DownloadDoneOutlined } from "@mui/icons-material";
import { blue, green } from "@mui/material/colors";

const Dashboard=() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItem="center">
                <Header title="Overview" subtitle="Welcome to Dashboard"/>
            </Box> 
            <Box>
                <Button
                sx={{
                backgroundColor:green[700],
                color:colors.grey[100],
                fontSize:"14px",
                fontweight:"bold",
                padding:"10px 20px"
                
                }}>
                    
                    Download Reports

                </Button>
            </Box>
            {/*Charts*/}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="20px">
                {/*Row*/}
                <Box gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                diplay="flex" 
                alignItems="center"
                justifyContent="center">
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"

                    />

                

                </Box>
                <Box gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                diplay="flex" 
                alignItems="center"
                justifyContent="center">
                    <StatBox
                        title="2,361"
                        subtitle="Lines of Codes"
                        progress="0.75"
                        increase="+64%"

                    />

                

                </Box>
                <Box gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                diplay="flex" 
                alignItems="center"
                justifyContent="center">
                    <StatBox
                        title="61"
                        subtitle="Number of commits"
                        progress="0.75"
                        increase="+14%"

                    />

                

                </Box>
                


                
            </Box>
            
        </Box>
    );
};

export default Dashboard;
