import SockJS from "sockjs-client";
import { Client, Frame } from "@stomp/stompjs";
import { BaseDependency } from "./DependencyInjector";
import { GameState } from "../models/GameState";

// const ENDPOINT = "http://192.168.137.1:8090";
const ENDPOINT = "https://cnybackend.southeastasia.cloudapp.azure.com/game";

export default class SocketService extends BaseDependency {
  static id = "SocketService";
  socket: WebSocket;
  stompClient: Client;

  activate(msgCallback: (msg) => void) {
    const stompConfig = {
      // If disconnected, it will retry after 5s
      reconnectDelay: 5000
    };

    this.stompClient = new Client(stompConfig);
    this.stompClient.webSocketFactory = () => new SockJS(ENDPOINT);
    this.stompClient.onConnect = (frame: Frame) => {
      console.log(frame);
      // The return object has a method called `unsubscribe`
      const subscription = this.stompClient.subscribe("/topic/game", msg => {
        const payload = JSON.parse(msg.body) as GameState;

        console.log(payload);
        msgCallback(payload);
      });
    };
    this.stompClient.activate();
  }

  deactivate() {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
    }
  }
}
