import HttpClient from './http-client';

class Main extends HttpClient {
  private static instanceCached: Main;

  private constructor() {
    super(process.env.BASE_URL);
  }

  static getInstance = () => {
    if (!Main.instanceCached) {
      Main.instanceCached = new Main();
    }

    return Main.instanceCached;
  };

  public refresh = (body:{ refreshToken: string }) => this.instance.post('/otp/refresh', body);
}

export default Main;
