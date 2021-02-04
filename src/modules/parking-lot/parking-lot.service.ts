import { Injectable } from '@nestjs/common';
import {
  RegistrationParkingLotDto,
  CheckOutParkingLotDto,
  GetTotalByTypeParkingLotDto,
  GetListbyColorParkingLotDto,
} from './dto/parking-lot.dto';
import * as moment from 'moment';

export class Master {
  max_capacity: 20;
  parking_area: [];
}
@Injectable()
export class ParkingLotService {
  // initiate master data
  readonly maxCapacity = 5;
  readonly parking = [];

  async registration(registration: RegistrationParkingLotDto) {
    // destructure data
    let parking = this.parking;
    let maxCapacity = this.maxCapacity;

    // get parking lot
    const parking_lot = await this.generateParkingLot();

    // set time
    const time = moment(new Date()).format('YYYY-MM-DD HH:mm');

    // set up temporary data of parking lot
    const tmpRegistration = {
      plat_nomor: registration.plat_nomor,
      warna: registration.warna,
      tipe: registration.tipe,
      parking_lot: parking_lot,
      tanggal_masuk: time,
    };

    // check if the parking slot is ready
    if (parking.length >= maxCapacity) {
      return {
        status: false,
        message: 'Parkir penuh',
      };
    }

    // push temporary data to parking area
    parking.push(tmpRegistration);
    return {
      plat_nomor: tmpRegistration.plat_nomor,
      parking_lot: tmpRegistration.parking_lot,
      tanggal_masuk: tmpRegistration.tanggal_masuk,
    };
  }

  async generateParkingLot() {
    // destructure data
    const parking = this.parking;

    // generate parking lot
    const parking_lot = `A` + parking.length + 1;
    return parking_lot;
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

  async getAll() {
    return this.parking;
  }
}
