import React from "react";

export type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default class Card extends React.Component<{productInfo: Props}> {
  render() {
    return (
      <div style={cardStyle.card}>
        <img style={cardStyle.cardImage} src={this.props.productInfo.image} alt={this.props.productInfo.title} width="50%"/>
        <div>
          <h3 style={cardStyle.cardTitle}>{this.props.productInfo.title}</h3>
          <p style={cardStyle.cardDescription}>{this.props.productInfo.description}</p>
        </div>
        <div style={cardStyle.cardAction}>
          <a href={this.props.productInfo.link}>Read more</a>
        </div>
      </div>
    )
  }
}

const cardStyle: { [key: string]: React.CSSProperties } = {
  card: {
    width: "15vw",
    height: "40vh",
    margin: "0.5vw",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",  
    alignItems: "center",

    backgroundColor: "#FAFAFA",
    borderRadius: "0.5vw",
    boxShadow: "0 0.5vw 0.5vw 0 rgba(0,0,0,0.2)"
  },
  cardImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    borderRadius: "0.5vw 0.5vw 0 0",
  },
  cardTitle: {
    fontSize: "1.2vw",
    fontWeight: "bold",
    textAlign: "left",
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  cardDescription: {
    fontSize: "0.8vw",
    textAlign: "left",
    margin: "0"
  },
  cardAction: {
    marginTop: "5vh",
  }
};