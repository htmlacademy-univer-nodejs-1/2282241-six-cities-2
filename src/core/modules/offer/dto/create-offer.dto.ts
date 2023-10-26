import {CityType} from '../../../../types/city.type.js';
import {TypeHousing} from '../../../../types/typeHousing.js';
import {ConveniencesType} from '../../../../types/conveniences.type.js';
import {User} from '../../../../types/user.type.js';
import {CoordinatesType} from '../../../../types/coordinates.type.js';

export default class CreateOfferDto {
  name!: string;
  description!: string;
  date!: Date;
  city!: CityType;
  previewImg!: string;
  images!: string[];
  flagIsPremium!: boolean;
  flagIsFavourites!: boolean;
  rating!: 1 | 2 | 3 | 4 | 5;
  typeHousing!: TypeHousing;
  countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  countPeople!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  price!: number;
  conveniences!: ConveniencesType;
  author!: User;
  countComments!: number;
  coordinates!: CoordinatesType;
}
