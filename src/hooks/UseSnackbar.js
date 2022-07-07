/*
 * File: UseSnackbar.js
 * Project: webapp-rrs
 * Created Date: Thursday, August 19th 2021, 3:49:53 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday August 19th 2021 3:49:53 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";

/**
 * Function UseSnackbar
 * @returns
 */
const UseSnackbar = () => {
  const { isMobile } = useSelector((state) => state.device);
  const options = {
    position: isMobile ? "bottom-center" : "top-center",
    style: {
      backgroundColor: "#DB2840",
      fontFamily: "proxima-nova",
      fontSize: "16px",
      textAlign: "center",
      // ...(isMobile ? { marginBottom: '20px' } : { marginTop: '20px' }),
      color: "#FFF",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
    duration: 3000,
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  const showSnackbarError = (msg, duration) => {
    openSnackbar(msg ?? "Sorry something went wrong!", duration);
  };

  const showSnackbarSuccess = (msg, duration) => {
    options.style.backgroundColor = "#325A17";
    options.closeStyle.color = "#FFF";
    openSnackbar(msg ?? "Success", duration);
  };

  return { showSnackbarError, showSnackbarSuccess, closeSnackbar };
};

export default UseSnackbar;
