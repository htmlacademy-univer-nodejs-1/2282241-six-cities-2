import {CityType} from "../../../../types/city.type";
import {TypeHousing} from "../../../../types/typeHousing";
import {ConveniencesType} from "../../../../types/conveniences.type";
import {User} from "../../../../types/user.type";
import {CoordinatesType} from "../../../../types/coordinates.type";

export default class UpdateOfferDto{
    name?: string;
    description?: string;
    date?: Date;
    city?: CityType;
    previewImg?: string;
    images?: string[];
    flagIsPremium?: boolean;
    flagIsFavourites?: boolean;
    rating?: 1 | 2 | 3 | 4 | 5;
    typeHousing?: TypeHousing;
    countRooms?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    countPeople?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    price?: number;
    conveniences?: ConveniencesType;
    author?: User;
    countComments?: number;
    coordinates?: CoordinatesType;
}
