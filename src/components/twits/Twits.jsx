import React from "react";
import "./styles.css";

function Twits({ data }) {
  const twit = data.body;
  const userName = data.user.username;
  const avatar = data.user.avatar_url;

  return (
    <div
      id="blue"
      className="mx-4 text-center blue mx-auto mb-3 col-sm-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 rounded"
    >
      <div>
        <img className="img-fluid rounded-circle shadow rounded" src={avatar} />
        <h4 className="mt-3 text-wrap text-break">{userName}</h4>
      </div>
      <p className="text-left text-wrap text-break p-3">{twit}</p>
    </div>
  );
}

export default Twits;
