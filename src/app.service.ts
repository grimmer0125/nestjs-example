import { Injectable } from '@nestjs/common';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    console.log('get hello1');
    // await timeout(4 * 1000);
    console.log('get hello2');

    return 'Hello World!';
  }
}
