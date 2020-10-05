import React, { useEffect, useState } from "react";
import $ from "jquery";

import { Redirect } from "react-router-dom";

import downArrow from "../../assets/images/down.svg";

import "./index.css";

const Home = () => {
  let click = 0;

  var [redirect, setRedirect] = useState(false);

  function goDown() {
    // let stickyTop = $("#second").offset().top;
    // $(".content").animate(
    //   {
    //     scrollTop: stickyTop,
    //   },
    //   1200
    // );

    $(".content").animate(
      {
        scrollTop:
          click === 0
            ? window.innerHeight
            : window.pageYOffset +
              $(".article").offset().top * -1 +
              window.innerHeight,
      },
      {
        duration: 1200,
        complete: () => {
          click++;
        },
      }
    );

    setTimeout(() => {
      $(".ready > img").css("transition", "1.2s ease");
      $(".ready > img").css("z-index", "1");

      if (click !== 4) {
        $(".ready > img").css(
          "transform",
          window.innerWidth <= 768
            ? `translate(-55vw, ${$(".article").offset().top * -1}px)`
            : `translate(-46.5vw, ${$(".article").offset().top * -1}px)`
        );
      } else {
        setTimeout(() => {
          document.querySelector("#arrowAnimation").style.transform +=
            " rotate(-90deg)";
        }, 1200);

        setTimeout(() => {
          $(".ready > img").css(
            "transform",
            window.innerWidth <= 768
              ? `translate(20vw, ${
                  $(".article").offset().top * -1
                }px) rotate(-90deg)`
              : `translate(35vw, ${
                  $(".article").offset().top * -1
                }px) rotate(-90deg)`
          );
        }, 2400);

        setTimeout(() => {
          document.querySelector("#arrowAnimation").style.transform +=
            " scale(2.08)";
        }, 3600);

        $(".ready > img").css(
          "transform",
          window.innerWidth <= 768
            ? `translate(-55vw, ${$(".article").offset().top * -1}px)`
            : `translate(-46.5vw, ${$(".article").offset().top * -1}px)`
        );

        document
          .querySelector(".ready")
          .removeEventListener("click", goDown, false);

        document.querySelector(".ready").addEventListener(
          "click",
          () => {
            setRedirect(true);
          },
          false
        );
      }
    }, 1800);
  }

  let cont = 0;

  useEffect(() => {
    $(".content").animate(
      {
        opacity: 1,
      },
      1200
    );

    document.querySelector(".ready").addEventListener("click", goDown, false);

    setInterval(() => {
      if (cont === 0) {
        $("#maybeNot").text($("#maybeNot").text().substring(0, 11));
        cont++;
      } else {
        $("#maybeNot").text("Maybe not...");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cont = 0;
      }
    }, 1000);

    document
      .getElementsByClassName("content")[0]
      .addEventListener("scroll", () => {
        if ($("#fifth").offset().top === 0) {
          $("#fifth > h3").css("opacity", 1);
          $("#fifth > h3").css("transform", "translateX(0)");
        }
      });
  }, []);

  return (
    <div className="content">
      <div className="article">
        <div id="title">
          <h1>Welcome to LXMSAT...</h1>
          <h3>Whatever</h3>
        </div>
        <div className="ready">
          <h4>Ready? Go ahead!</h4>
          <img src={downArrow} id="arrowAnimation" alt="downArrow" />
        </div>
      </div>

      <div id="second" className="article">
        <h2>Have you considered the meaning of things?</h2>
      </div>

      <div id="third" className="article">
        <h3 id="maybeNot">Maybe not...</h3>
      </div>

      <div id="fourth" className="article">
        <h2>Don't feel bad</h2>
      </div>

      <div id="fifth" className="article">
        <h3>It's never too late to think about it!</h3>
        {redirect ? <Redirect to="/beginning" /> : ""}
      </div>
    </div>
  );
};

export default Home;
