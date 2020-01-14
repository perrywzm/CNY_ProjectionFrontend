import axios from "axios";
import Question from "./../models/Question";
import { GameState } from "../models/GameState";

const BASE_BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com";
const BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com/api";

export default class ProjectionAjaxService {
  static fetchQuestionResults = async (qnPos: number) => {
    try {
      const result = await axios.get(BASE_HREF + `/poll/${qnPos}`);
      if (result.status === 200) {
        console.log("Getting question results", result.data);
        return result.data;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  }

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
}