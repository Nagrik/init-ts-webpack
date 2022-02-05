import HttpClientProtected from './http-client-protected';

export default class MainProtected extends HttpClientProtected {
  private static instanceCached: MainProtected;

  private constructor() {
    super(process.env.BASE_URL);
  }

  static getInstance = () => {
    if (!MainProtected.instanceCached) {
      MainProtected.instanceCached = new MainProtected();
    }

    return MainProtected.instanceCached;
  };

  //
  // public getBotInfo = (id: string, organizationId: string) => this.instance.get<BotInfo>(`/bots/${id}`,
  //   {
  //     params: {
  //       organizationId,
  //     },
  //   });

  // public getIntervals = () => this.instance.get('/jobs/intervals', {
  //   headers: {
  //     secret: 'secret',
  //   },
  // });

  public getTestInfo = () => this.instance.get('/api/products/3');
}
