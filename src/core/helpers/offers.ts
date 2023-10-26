import { CityType } from '../../types/city.type.js';
import { ConveniencesType } from '../../types/conveniences.type.js';
import { CoordinatesType } from '../../types/coordinates.type.js';
import { Offer } from '../../types/offer.type.js';
import { TypeHousing } from '../../types/typeHousing.js';
import { User } from '../../types/user.type.js';

export function createOffer(offerData: string): Offer {
  const [name, description, date, city, previewImg, images, flagIsPremium, flagIsFavourites, rating, typeHousing, countRooms, countPeople, price, conveniences, author, countComments, coordinates] = offerData.replace('\n', '').split('\t');
  return {
    name,
    description,
    date: new Date(date),
    city: city as CityType,
    previewImg,
    images: images.split(';'),
    flagIsPremium: flagIsPremium as unknown as boolean,
    flagIsFavourites: flagIsFavourites as unknown as boolean,
    rating: rating as unknown as 1 | 2 | 3 | 4 | 5,
    typeHousing: typeHousing as TypeHousing,
    countRooms: countRooms as unknown as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    countPeople: countPeople as unknown as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    price: Number.parseInt(price, 10),
    conveniences: conveniences as ConveniencesType,
    author: author as unknown as User,
    countComments: Number.parseInt(countComments, 10),
    coordinates: coordinates.split(',') as unknown as CoordinatesType
  } as Offer;
}
