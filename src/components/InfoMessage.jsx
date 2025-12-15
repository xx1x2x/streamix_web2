import React from "react";

class InfoMessage extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <section
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          padding: "16px 24px",
          borderRadius: "10px",
          marginTop: "16px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
        }}
      >
        {title && (
          <h3
            style={{
              marginTop: 0,
              marginBottom: "8px",
              fontWeight: 600,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {title}
          </h3>
        )}
        <div style={{ color: "#ffffff", textAlign: "center" }}>{children}</div>
      </section>
    );
  }
}

export default InfoMessage;
