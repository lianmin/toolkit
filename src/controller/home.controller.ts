import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/404')
  async notFound(): Promise<string> {
    return '404';
  }

  @Get('/welcome')
  async home(): Promise<string> {
    return 'Hello Midwayjs2!';
  }
}
