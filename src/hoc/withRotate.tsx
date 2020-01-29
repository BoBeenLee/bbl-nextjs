import React from "react";
import { Rotate } from "../facc";

function withRotate(TargetComponent) {
  return function WithRotate(props) {
    //   console.log("x,y,z", xDeg, yDeg, zDeg);
    return (
      <Rotate>
        {({ xDeg, yDeg, zDeg }) => (
          <TargetComponent motion={{ xDeg, yDeg, zDeg }} {...props} />
        )}
      </Rotate>
    );
  };
}

export default withRotate;
