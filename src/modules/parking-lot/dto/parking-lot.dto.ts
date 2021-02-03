import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsIn,
  IsNumberString,
  IsArray,
  IsPositive,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { isString } from 'util';

export class RegistrationParkingLotDto {
  @IsString()
  @ApiProperty()
  plat_nomor: string;

  @IsString()
  @ApiProperty()
  warna: string;

  @IsString()
  @ApiProperty()
  tipe: string;
}

export class CheckOutParkingLotDto {
  @IsString()
  @ApiProperty()
  plat_nomor: string;
}

export class GetTotalByTypeParkingLotDto {
  @IsString()
  @ApiProperty()
  tipe: string;
}

export class GetListbyColorParkingLotDto {
  @IsString()
  @ApiProperty()
  warna: string;
}
