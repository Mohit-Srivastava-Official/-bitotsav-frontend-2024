import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchedTable from "./table";
import toast, { Toaster } from "react-hot-toast";
import { publicApiClient } from "../../api/apiClient";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function MobileTabs() {
    const [detail, setDetail] = React.useState([[], [], []]);
    const getData = async (category) => {
        try {
            const res = await publicApiClient.get("/leaderBoard");
            if (res?.data?.status === "success") {
                setDetail(res?.data?.data);
                // console.log(detail)
            }
        } catch (err) {
            toast.error("Could Not fetch the LeaderBoard", {
                duration: 5000,
                position: "top-center",
                style: {
                    fontSize: "20px",
                },
            });
        }
    };
    React.useEffect(() => {
        getData();
    }, []);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "100%" }}>

            <TabPanel value={value} index={0}>
                {detail?.length ? (
                    <SchedTable detail={detail} />
                ) : (
                    ""
                )}
            </TabPanel>
        </Box>
    );
}
