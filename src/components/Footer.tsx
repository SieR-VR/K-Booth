import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer style={footerStyle.footer}>
      </footer>
    );
  }
}

const footerStyle: { [key: string]: React.CSSProperties } = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: "#fafafa",
    minWidth: "100vw",

    padding: "1rem",
    margin: "0",
    boxSizing: "border-box",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
  }
};