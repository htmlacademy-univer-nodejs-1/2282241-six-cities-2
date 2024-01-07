import {CityType} from '../../../../types/city.type.js';
import {TypeHousing} from '../../../../types/typeHousing.js';
import {ConveniencesType} from '../../../../types/conveniences.type.js';
import {User} from '../../../../types/user.type.js';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsMongoId,
  IsNumber, IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import {CreateOfferValidationMessage} from './create-offer-messages.js';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: CreateOfferValidationMessage.name.minLength})
  @MaxLength(100, {message: CreateOfferValidationMessage.name.maxLength})
    name?: string;

  @IsOptional()
  @MinLength(20, {message: CreateOfferValidationMessage.name.minLength})
  @MaxLength(1024, {message: CreateOfferValidationMessage.name.maxLength})
    description?: string;

  @IsOptional()
  @IsDateString({}, {message: CreateOfferValidationMessage.date.invalidFormat})
    date?: Date;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.city.invalidFormat})
    city?: CityType;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.previewImg.invalidFormat})
    previewImg?: string;

  @IsOptional()
  @IsArray({message: CreateOfferValidationMessage.images.invalidFormat})
    images?: string[];

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.flagIsPremium.invalidFormat})
    flagIsPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.flagIsFavourites.invalidFormat})
    flagIsFavourites?: boolean;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferValidationMessage.rating.invalidFormat})
    rating?: 1 | 2 | 3 | 4 | 5;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.typeHousing.invalidFormat})
    typeHousing?: TypeHousing;

  @IsOptional()
  @IsInt({message: CreateOfferValidationMessage.countRooms.invalidFormat})
    countRooms?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsOptional()
  @IsInt({message: CreateOfferValidationMessage.countPeople.invalidFormat})
    countPeople?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
    price?: number;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.conveniences.invalidFormat})
    conveniences?: ConveniencesType;

  @IsOptional()
  @IsMongoId({message: CreateOfferValidationMessage.author.invalidId})
    author?: User;

  @IsOptional()
    countComments?: number;

  @IsOptional()
  @IsArray({message: CreateOfferValidationMessage.coordinates.invalidFormat})
    coordinates?: number[];
}
