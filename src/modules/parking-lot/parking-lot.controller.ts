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
    try {
      return await this.parkingLotService.registration(
        registrationParkingLotDto,
      );
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Post('/checkout')
  async checkout(@Body() checkOutParkingLotDto: CheckOutParkingLotDto) {
    try {
      return await this.parkingLotService.checkout(checkOutParkingLotDto);
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Post('/total')
  async getTotalType(
    @Body() getTotalByTypeParkingLotDto: GetTotalByTypeParkingLotDto,
  ) {
    try {
      return await this.parkingLotService.getTotal(getTotalByTypeParkingLotDto);
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Post('/list')
  async getListByColor(
    @Body() getListbyColorParkingLotDto: GetListbyColorParkingLotDto,
  ) {
    try {
      return await this.parkingLotService.getList(getListbyColorParkingLotDto);
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get('/All')
  async getAll() {
    return await this.parkingLotService.getAll();
  }
}
