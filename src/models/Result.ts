export default class Result {
  resultsMap = new Map<number, number>();

  static adaptFromJson = (jsonArray: any[]) => {
    const qnResult = new Result();
    jsonArray.forEach(result => {
      qnResult.resultsMap.set(result.choice, result.number);
    });
    return qnResult;
  };
}
