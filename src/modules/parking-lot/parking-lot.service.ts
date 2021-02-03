import { Injectable } from '@nestjs/common';
import {
  RegistrationParkingLotDto,
  CheckOutParkingLotDto,
  GetTotalByTypeParkingLotDto,
  GetListbyColorParkingLotDto,
} from './dto/parking-lot.dto';

@Injectable()
export class ParkingLotService {
  async registration(registrationParkingLotDto: RegistrationParkingLotDto) {
    return registrationParkingLotDto;
  }

  async checkout(checkOutParkingLotDto: CheckOutParkingLotDto) {
    return {
      plat_nomor: 'B 123 34',
      tanggal_masuk: '2019-03-21 10:00',
      tanggal_keluar: '2019-03-21 15:00',
      jumlah_bayar: '45000',
    };
  }

  async getTotal(getTotalByTypeParkingLotDto: GetTotalByTypeParkingLotDto) {
    return {
      jumlah_kendaraan: 1,
    };
  }

  async getList(getListbyColorParkingLotDto: GetListbyColorParkingLotDto) {
    return {
      plat_nomor: ['B 123 34', 'B 123 35', 'B 123 39'],
    };
  }
}
