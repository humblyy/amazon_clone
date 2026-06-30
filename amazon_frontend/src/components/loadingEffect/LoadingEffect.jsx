import React from 'react'
import {BeatLoader} from "react-spinners"

function LoadingEffect() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <BeatLoader color="#21971f" />
    </div>
  );
}

export default LoadingEffect