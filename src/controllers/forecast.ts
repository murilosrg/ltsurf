import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecasts')
export class ForecastController {
  @Get('')
  public getForecast(_: Request, res: Response): void {
    res.send({ id: 1 });
  }
}
