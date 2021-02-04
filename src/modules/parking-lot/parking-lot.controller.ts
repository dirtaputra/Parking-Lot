import { Controller, Post, Body, Get } from '@nestjs/common';
import { ParkingLotService } from './parking-lot.service';
import {
  RegistrationParkingLotDto,
  CheckOutParkingLotDto,
  GetTotalByTypeParkingLotDto,
  GetListbyColorParkingLotDto,
} from './dto/parking-lot.dto';

@Controller('parking-lot')
export class ParkingLotController {
  constructor(private readonly parkingLotService: ParkingLotService) {}

  // Parking Endpoint

  @Post('/registration')
  async registration(
    @Body() registrationParkingLotDto: RegistrationParkingLotDto,
  ) {
    return await this.parkingLotService.registration(registrationParkingLotDto);
  }

  @Post('/checkout')
  async checkout(@Body() checkOutParkingLotDto: CheckOutParkingLotDto) {
    return await this.parkingLotService.checkout(checkOutParkingLotDto);
  }

  @Post('/total')
  async getTotalType(
    @Body() getTotalByTypeParkingLotDto: GetTotalByTypeParkingLotDto,
  ) {
    return await this.parkingLotService.getTotal(getTotalByTypeParkingLotDto);
  }

  @Post('/list')
  async getListByColor(
    @Body() getListbyColorParkingLotDto: GetListbyColorParkingLotDto,
  ) {
    return await this.parkingLotService.getList(getListbyColorParkingLotDto);
  }

  @Get('/All')
  async getAll() {
    return await this.parkingLotService.getAll();
  }
}
