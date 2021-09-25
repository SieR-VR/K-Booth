import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header style={headerStyle.header}>
        <h1 style={headerStyle.title}>K-Booth</h1>
        <p style={headerStyle.subtitle}>Asset exchange platform</p>
      </header>
    );
  }
}

const headerStyle: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    backgroundColor: "#fafafa",
    minWidth: "100vw",

    padding: "1rem",
    margin: "0",
    boxSizing: "border-box",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",

    margin: "0",
    padding: "0",
  },
  subtitle: {
    fontSize: "1rem",
    
    margin: "0",
    padding: "0",
  },
};