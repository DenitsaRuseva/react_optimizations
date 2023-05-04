import React from "react";

const Info = ({Stars}) => {
    const StarsArray = Object.values(Stars);

    const distances = { max: 0, min: 1000 };
    StarsArray.forEach((currentStar) => {
      StarsArray.forEach((compareStar) => {
        if (compareStar === currentStar) {
          return;
        }

        distances.max = Math.max(
          distances.max,
          Math.max(Number(currentStar.age), Number(compareStar.age))
        );
        distances.min = Math.min(
          distances.min,
          Math.min(Number(currentStar.age), Number(compareStar.age))
        );
      });
    });

    return (
      <div className="board">
        <div>You have {Object.keys(Stars).length} stars!</div>
        <div>Age of the oldest star: {distances.max}</div>
        <div>Age of the youngest star: {distances.min}</div>
      </div>
    );

}


export default React.memo(Info, (prevProps, nextProps) => {
  const oldKeys = Object.values(prevProps)
  const newKeys =Object.values(nextProps)

  return oldKeys.length !== newKeys.length
})
