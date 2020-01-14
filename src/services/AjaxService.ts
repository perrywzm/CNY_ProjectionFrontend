import axios from "axios";
import Question from "./../models/Question";
import { GameState } from "../models/GameState";
import Result from "../models/Result";

const BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com/api";

export default class AjaxService {
  static fetchAllQuestions = async (withAuth = true) => {
    try {
      const result = await axios.get(BASE_HREF + `/question/all`);
      if (result.status === 200) {
        console.log("Getting all your questions", result.data);
        return result.data as Question[];
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static getCurrentGameState = async () => {
    try {
      const result = await axios.get(BASE_HREF + `/game/state`);
      if (result.status === 200) {
        console.log("Getting current game state", result.data);
        return result.data as GameState;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchQuestion = async (qnPos: number | string) => {
    try {
      const result = await axios.get(BASE_HREF + `/question/${qnPos}`);
      if (result.status === 200) {
        return result.data as Question;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchQuestionResults = async (qnPos: number) => {
    try {
      const result = await axios.get(BASE_HREF + `/poll/${qnPos}`);
      console.log(result);
      if (result.status === 200) {
        return Result.adaptFromJson(result.data.pollSummaries);
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchImageAsBase64 = async (url: string) => {
    try {
      url = url.replace("http://", "https://");
      const result = await axios.get(url, { responseType: "arraybuffer" });
      if (result.status === 200) {
        const b64img = Buffer.from(result.data, "binary").toString("base64");
        return `data:image/jpg;base64, ${b64img}`;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching image!", e);
      return null;
    }
  };
}
