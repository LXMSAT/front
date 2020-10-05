import React from "react";
import { Redirect } from "react-router-dom";
import api from "../services/api";

export default {
  getLvl: async () => {
    const {
      data: { lvl },
    } = await api.get("/getLevel");

    if (!lvl === 0) {
      return <Redirect to={`/lvl${lvl}`} />;
    }

    return <Redirect to="/beginning" />;
  },
};
