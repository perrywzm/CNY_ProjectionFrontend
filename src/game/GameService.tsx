import AjaxService from "../services/AjaxService";
import { BaseDependency } from "../services/DependencyInjector";
import Question from "../models/Question";
import { GameState, ProgressState, QuestionState } from "../models/GameState";
import Result from "../models/Result";

export default class GameService extends BaseDependency {
  static id = "GameService";

  isFetchingAllQuestions = false;
  gameState = ProgressState.EMPTY;
  // gameState = ProgressState.END;
  currentQuestionPos: number = 1;
  questionState = QuestionState.START;
  currentAnswer: number;
  correctAnswer: number = null;
  score = 0;
  rank = 0;
  questionsMap: Map<string | number, Question> = new Map();
  questionResultsMap: Map<string | number, Result> = new Map();

  getAllQuestions = async () => {
    this.isFetchingAllQuestions = true;
    const questions = await AjaxService.fetchAllQuestions();
    if (questions && questions.length > 0) {
      this.questionsMap = new Map();
      questions.forEach(q => this.questionsMap.set(q.position, q));
      this.update();
    } else {
      console.log(questions);
    }
  };

  getCurrentGameState = async () => {
    // return;
    const result = await AjaxService.getCurrentGameState();
    if (result) {
      this.gameState = result.progress;
      this.questionState = result.questionState;
      this.currentQuestionPos = result.question;

      if (
        this.gameState === ProgressState.PLAYING &&
        !this.questionsMap.get(this.currentQuestionPos)
      ) {
        const currentQn = await AjaxService.fetchQuestion(
          this.currentQuestionPos
        );
        if (currentQn) {
          this.questionsMap.set(currentQn.position, currentQn);
        }
      }

      this.update();
      return true;
    } else {
      return false;
    }
  };

  getCurrentQuestion = () => {
    return this.questionsMap.get(this.currentQuestionPos);
  };

  preloadImages = () => {
    // Good ol' pyramid of doom
    if (this.questionsMap.size > 0) {
      this.questionsMap.forEach(qn => {
        qn.images.forEach((img, idx) => {
          AjaxService.fetchImageAsBase64(img.url).then(
            base64img => (qn.images[idx].url = base64img)
          );
        });
      });
    }
  };

  getQuestionResults = async (qnPos: number) => {
    const result = await AjaxService.fetchQuestionResults(
      this.currentQuestionPos
    );
    if (result) {
      this.questionResultsMap.set(qnPos, result);
      this.update();
    }
  };

  handleEvent = (msg: GameState) => {
    console.log("Handling", msg);
    switch (msg.progress) {
      case ProgressState.EMPTY:
        this.gameState = ProgressState.EMPTY;
        this.update();
        break;
      case ProgressState.WAITING:
        this.gameState = ProgressState.WAITING;
        this.update();
        break;
      case ProgressState.PLAYING:
        this.currentQuestionPos = msg.question;
        this.gameState = ProgressState.PLAYING;
        this.questionState = msg.questionState;
        this.update();
        break;
      case ProgressState.END:
        this.currentQuestionPos = 0;
        this.gameState = ProgressState.END;
        this.update();
        break;
    }
  };
}
