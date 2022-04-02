class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (e) {
      // something error handling
      // 의미있는 에러처리가 가능한 부분에서 에러처리하기
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);

app.run();
