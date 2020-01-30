import React from "react";
import { Rotate } from "src/faccs";

function withRotate<P>(TargetComponent: any) {
  return function WithRotate(props: P) {
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
