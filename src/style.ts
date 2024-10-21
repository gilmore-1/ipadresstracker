import {CSSProperties} from "react";
export const styled = {
    head: {
      container: {
        display: "flex",
        flexDirection: 'column' as CSSProperties['flexDirection'],
        padding: "60px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "blue" as CSSProperties['backgroundColor'],
      },
      subcontaner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
      },
      h1: {
        color: "#FFF",
        fontFamily: "Rubik",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "30px",
        letterSpacing: "-0.286px",
      },
      input: {
        borderRadius: "15px",
        background: "#FFF",
        boxShadow: "0px 50px 50px -25px rgba(0, 0, 0, 0.10)",
        width: "550px",
        padding: "20px",
        color: "#2C2C2C",
        fontFamily: "Rubik",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "normal",
      }
    },
    mapbody: {
      infowrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      info: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "15px",
        width: "1110px",
        padding: "50px",
        background: "#FFF",
        boxShadow: "0px 50px 50px -25px rgba(0, 0, 0, 0.10)",
        color: "black"
      },
      h3: {
        color: "#2C2C2C",
        fontFamily: "Rubik",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        letterSpacing: "1.75px",
        textTransform: "uppercase" as CSSProperties['textTransform'],
        opacity: 0.4987,
      },
      p: {
        color: "#2C2C2C",
        fontSize: "26px",
        fontWeight: 500,
        marginTop: "15px",
        width: "215px",
        lineHeight: "30px",
        letterSpacing: "-0.232px",
      }
    }
  }