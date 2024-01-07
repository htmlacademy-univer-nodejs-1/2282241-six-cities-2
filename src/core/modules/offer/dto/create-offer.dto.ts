import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsObject,
  IsString, Length,
  MaxLength,
  MinLength
} from 'class-validator';
import {CityType} from '../../../../types/city.type.js';
import {TypeHousing} from '../../../../types/typeHousing.js';
import {ConveniencesType} from '../../../../types/conveniences.type.js';
import {CoordinatesType} from '../../../../types/coordinates.type.js';
import {CreateOfferValidationMessage} from './create-offer-messages.js';

export default class CreateOfferDto {
  @MinLength(10, {message: CreateOfferValidationMessage.name.minLength})
  @MaxLength(100, {message: CreateOfferValidationMessage.name.maxLength})
  public name!: string;

  @MinLength(20, {message: CreateOfferValidationMessage.name.minLength})
  @MaxLength(1024, {message: CreateOfferValidationMessage.name.maxLength})
  public description!: string;

  @IsDateString({}, {message: CreateOfferValidationMessage.date.invalidFormat})
  public date!: Date;

  @IsString({message: CreateOfferValidationMessage.city.invalidFormat})
  public city!: CityType;

  @IsString({message: CreateOfferValidationMessage.previewImg.invalidFormat})
  public previewImg!: string;

  @IsArray({message: CreateOfferValidationMessage.images.invalidFormat})
  public images!: string[];

  @IsBoolean({message: CreateOfferValidationMessage.flagIsPremium.invalidFormat})
  public flagIsPremium!: boolean;

  @IsBoolean({message: CreateOfferValidationMessage.flagIsFavourites.invalidFormat})
  public flagIsFavourites!: boolean;

  @IsNumber({}, {message: CreateOfferValidationMessage.rating.invalidFormat})
  @Length(1, 5, {message: CreateOfferValidationMessage.rating.lengthField})
  public rating!: 1 | 2 | 3 | 4 | 5;

  @IsString({message: CreateOfferValidationMessage.typeHousing.invalidFormat})
  public typeHousing!: TypeHousing;

  @IsInt({message: CreateOfferValidationMessage.countRooms.invalidFormat})
  @Length(1, 8, {message: CreateOfferValidationMessage.countRooms.lengthField})
  public countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsInt({message: CreateOfferValidationMessage.countPeople.invalidFormat})
  @Length(1, 10, {message: CreateOfferValidationMessage.countPeople.lengthField})
  public countPeople!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
  @Length(100, 100000, {message: CreateOfferValidationMessage.price.lengthField})
  public price!: number;

  @IsString({message: CreateOfferValidationMessage.conveniences.invalidFormat})
  public conveniences!: ConveniencesType;

  public userId!: string;

  public countComments!: number;

  @IsObject({message: CreateOfferValidationMessage.coordinates.invalidFormat})
  public coordinates!: CoordinatesType;
}
