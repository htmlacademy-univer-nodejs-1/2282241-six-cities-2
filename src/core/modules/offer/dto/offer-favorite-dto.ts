import {Expose} from 'class-transformer';
import {CityType} from '../../../../types/city.type.js';
import {TypeHousing} from '../../../../types/typeHousing.js';

export class FavoriteOfferDto {
  @Expose()
  public id!: string;

  @Expose()
    name!: string;

  @Expose({ name: 'createdAt'})
    date!: Date;

  @Expose()
    description!: string;

  @Expose()
    city!: CityType;

  @Expose()
    previewImg!: string;

  @Expose()
    flagIsPremium!: boolean;

  flagIsFavourites = true;

  @Expose()
    rating!: number;

  @Expose()
    typeHousing!: TypeHousing;

  @Expose()
    price!: number;

  @Expose()
    countComments!: number;
}
