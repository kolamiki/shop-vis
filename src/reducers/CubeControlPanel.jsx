// import React from "react";

export function CubeControlPanelReducer(state, action) {
  // console.log("Action", action);

  switch (action?.type) {
    case "ADD_NEW_CUBE": {
      const currentCubes = state.length;
      return [
        ...state,
        {
          cubeHeight: { label: `Cube ${currentCubes + 1} Height`, value: 40 },
          cubeWidth: { label: `Cube ${currentCubes + 1} Width`, value: 40 },
          cubeThickness: {
            label: `Cube ${currentCubes + 1} Thickness`,
            value: 1,
          },
        },
      ];
    }
    case "UPDATE_CUBE_PARAMETER": {
      const { cubeIndex, cubeParameter, parameterValue } = action.payload;
      let newList = [];

      for (let i = 0; i < state.length; i++) {
        if (i !== cubeIndex) {
          newList.push(state.cubeIndex);
        } else {
          // console.log("current state", state[cubeIndex]);
          newList.push({
            ...state[cubeIndex],
            [cubeParameter]: {
              ...state[cubeIndex][cubeParameter],
              value: parameterValue,
            },
          });
        }
      }

      return newList;
    }

    default:
      console.error(
        `${action?.type} is not recognized by CubeControlPanelReducer.`
      );
  }
}
