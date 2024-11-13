/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import "./leaderboard.css";
import { makeStyles } from "@mui/styles";
import { Scale, Transform } from "@mui/icons-material";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
    tableRow: {
        transition: "transform 0.3s ease", // Add transition for smooth scaling
        "&:hover": {
            backgroundColor: "purple", // Change background color on hover
            // transform: "scale(1.025)", // Scale up the row on hover
        },
    },
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? (
                    <MdLastPage color="white" />
                ) : (
                    <MdFirstPage color="white" />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <FaChevronRight color="white" />
                ) : (
                    <FaChevronLeft color="white" />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <FaChevronLeft color="white" />
                ) : (
                    <FaChevronRight color="white" />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? (
                    <MdFirstPage color="white" />
                ) : (
                    <MdLastPage color="white" />
                )}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(Name, Rank, Point) {
    return { Rank, Name, Point };
}

export default function SchedTable(props) {
    let row = [];
    const classes = useStyles();
    // for (let i = 0; i < props?.detail?.length; i++) {
    //     const startDate = dayjs(
    //         props.detail[i].dates[`day${props.day}`].start
    //     ).format("hh:mm A");
    //     const endDate = dayjs(
    //         props.detail[i].dates[`day${props.day}`].end
    //     ).format("hh:mm A");
    //     // console.log(startDate);
    //     // console.log(endDate);
    //     if (startDate !== endDate) {
    //         row.push(
    //             createData(
    //                 props.detail[i].name,
    //                 `${startDate} To ${endDate}`,
    //                 props.detail[i].place
    //             )
    //         );
    //     }
    // }

    console.log(props.detail.length)
    console.log(props.detail)
    console.log(props?.detail[0]?.teamName)
    for (let i = 0; i < props?.detail?.length; i++) {
        row.push(
            createData(
                i + 1,
                props.detail[i].teamName,
                props.detail[i].point,
            )
        )
    }
    row?.sort((a, b) => (a.Time < b.Time ? -1 : 1));
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(-1);
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - row.length) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <TableContainer
            component={Paper}
            sx={{
                backgroundColor: "transparent",
                width: "100%",
                height: "auto",
            }}
        >
            <Table aria-label="custom pagination table">
                <TableHead
                    sx={{
                        backgroundColor: "#9C27B0",
                        filter: "drop-shadow(0px 0px 0px )",
                        gap: "100px",
                        padding: "20px",
                    }}
                >
                    <TableRow>
                        <TableCell
                            align="center"
                            className="head"
                            sx={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "18px",
                            }}
                        >
                            Rank
                        </TableCell>
                        <TableCell
                            align="center"
                            className="head"
                            sx={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "18px",
                            }}
                        >
                            Team Name
                        </TableCell>
                        <TableCell
                            align="center"
                            className="head"
                            sx={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "18px",
                            }}
                        >
                            Points
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? row?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        : row
                    )?.map((ro) => (
                        <TableRow
                            key={row.Rank}
                            className={`${classes.tableRow} ${classes.cell}`}
                        >
                            <TableCell
                                align="center"
                                component="th"
                                scope="row"
                                className="bod"
                                sx={{
                                    borderBottomColor: "white",
                                    color: "white",
                                    borderRightColor: "white",
                                    borderLeftColor: "white",
                                }}
                            >
                                {ro.Name}
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bod"
                                sx={{
                                    borderBottomColor: "white",
                                    color: "white",
                                }}
                            >
                                {ro.Rank}
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bod"
                                sx={{
                                    borderBottomColor: "white",
                                    color: "white",
                                }}
                            >
                                {ro.Point}
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                {/* <TableFooter sx={{ color: "white" }}>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                { label: "All", value: -1 },
                            ]}
                            colSpan={3}
                            count={row.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter> */}
            </Table>
        </TableContainer>
    );
}
