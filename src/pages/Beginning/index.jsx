import React, { useEffect, useState } from "react";
// import { Context } from "../../Context/AuthContext";
import { Redirect } from "react-router-dom";
import $ from "jquery";

import rulesIcon from "../../assets/images/rules.svg";
import goAheadIcon from "../../assets/images/down.svg";

import api from "../../services/api";
import history from "../../history";

import "./index.css";

const Beginning = () => {
  // const { authenticated, handleLogin } = useContext(Context);
  const [redirect, setRedirect] = useState("");

  function goStart() {
    let startTop = $("#start").offset().top;
    $(".content").animate(
      {
        scrollTop: startTop,
      },
      1200
    );
  }

  async function start() {
    const {
      data: { lvl },
    } = await api.get("/getLevel");

    history.push(`/lvl${lvl}`);
    history.go(`/lvl${lvl}`);
  }

  useEffect(() => {
    $(".content").animate(
      {
        opacity: 1,
      },
      1200
    );
  }, []);

  return (
    <div className="content">
      <div className="article1">
        <h2>These are the rules</h2>
        <div className="grid">
          <img src={rulesIcon} alt="ruleIcon" />
          <span className="rule">
            <h4>Keep an open mind...</h4>
          </span>
          <span className="rule">
            <h4>Complete to get in!</h4>
          </span>
          <span className="rule">
            <h4>Respect the game just as he respects you.</h4>
          </span>
          <span className="rule">
            <h4>Only the bests will get in. Are you ready?</h4>
          </span>
        </div>
        <img id="goAhead1" src={goAheadIcon} alt="goAhead" onClick={goStart} />
      </div>

      <div className="article1">
        <h2 id="start" onClick={start}>
          Start
        </h2>

        {redirect ? <Redirect to={redirect} /> : ""}
      </div>
    </div>
  );
};

export default Beginning;
