import React from "react";

export const NewBtn = React.memo(function NewBtn({ onClick }) {
  return (
    <button className="new-star" onClick={onClick}>
      ⭐
    </button>
  );
});
