import { Injectable } from '@nestjs/common';
import {
  RegistrationParkingLotDto,
  CheckOutParkingLotDto,
  GetTotalByTypeParkingLotDto,
  GetListbyColorParkingLotDto,
} from './dto/parking-lot.dto';
import * as moment from 'moment';

@Injectable()
export class ParkingLotService {
  // initiate master data
  readonly maxCapacity = 5;
  readonly parking = [];
  readonly listOfCar = [];
  readonly suvCharge = 25000;
  readonly mpvCharge = 35000;

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
    // destructure data
    const parking: any = this.parking;

    // get data by nomor kendaraan
    const data: any = parking.filter(function(item) {
      return item.plat_nomor === checkOutParkingLotDto.plat_nomor;
    });

    console.log(data.length);
    // check data is exist
    if (data.length == 0) {
      return {
        success: false,
        message: 'Nomor Kendaraan Tidak Terdaftar',
      };
    }
    // remove data from parking area
    parking.filter(function(value, index, arr) {
      if (value.plat_nomor === checkOutParkingLotDto.plat_nomor) {
        parking.splice(index, 1);
      }
    });

    const getCharge = await this.getCharge(data[0].tipe, data[0].tanggal_masuk);
    return {
      plat_nomor: data.plat_nomor,
      tanggal_masuk: data.tanggal_masuk,
      tanggal_keluar: getCharge.date_checkout,
      jumlah_bayar: getCharge.charge,
    };
  }

  async getCharge(type: string, dateRegistration: string) {
    const now = moment(new Date()).format('YYYY-MM-DD HH:mm');

    let duration = Math.ceil(
      moment
        .duration(
          moment(now).diff(moment(dateRegistration, 'YYYY-MM-DD HH:mm')),
        )
        .asHours(),
    );
    console.log(now);
    console.log(dateRegistration);
    console.log(duration);

    let charge;
    if (duration == 1 || duration < 1) {
      charge =
        type === 'SUV' ? (charge = this.suvCharge) : (charge = this.mpvCharge);
    } else {
      charge =
        type === 'SUV'
          ? (charge = this.suvCharge + 0.2 * this.suvCharge * (duration - 1))
          : (charge = this.mpvCharge + 0.2 * this.mpvCharge * (duration - 1));
    }
    console.log(charge);
    return {
      date_checkout: now,
      charge: charge,
    };
  }

  async getTotal(getTotalByTypeParkingLotDto: GetTotalByTypeParkingLotDto) {
    // destructure data
    const parking = this.parking;

    const count = parking.filter(
      item => item.tipe === getTotalByTypeParkingLotDto.tipe,
    ).length;
    return {
      jumlah_kendaraan: count,
    };
  }

  async getList(getListbyColorParkingLotDto: GetListbyColorParkingLotDto) {
    // destructure data
    const parking = this.parking;
    let listOfCar = this.listOfCar;
    const warna = getListbyColorParkingLotDto.warna;

    // set array to null
    listOfCar = [];

    // filter array by warna
    let filteredArray = parking.filter(function(item) {
      if (item.warna === warna) {
        // push plat nomor to array
        return listOfCar.push(item.plat_nomor);
      }
    });

    return {
      plat_nomor: listOfCar,
    };
  }

  async getAll() {
    return this.parking;
  }
}
