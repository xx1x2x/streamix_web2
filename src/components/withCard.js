import React from "react";

function withCard(WrappedComponent) {
  return function WithCardWrapper(props) {
    return (
      <div
        style={{
          border: "1px solid #dddddd",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withCard;
