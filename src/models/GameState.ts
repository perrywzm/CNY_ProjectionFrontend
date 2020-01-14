export interface GameState {
    gameSessionId: number;
    question: number;
    questionState: QuestionState;
    progress: ProgressState;
}

export enum QuestionState {
    START = 'START',
    END = 'END'
}


export enum ProgressState {
    EMPTY = 'EMPTY',
    WAITING = 'WAITING',
    PLAYING = 'PLAYING',
    END = 'END'
}



