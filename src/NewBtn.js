import React from "react";

const NewBtn =({ onClick })=> 
      <button className="new-star" onClick={onClick}>
        ⭐
      </button>

export default React.memo(NewBtn);
