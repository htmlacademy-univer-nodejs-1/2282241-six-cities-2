import {TypeHousing} from "./typeHousing";
import {ConveniencesType} from "./conveniences.type";
import {User} from "./user.type";

export type Offer = {
    name: string;
    description: string;
    date: Date;
    city: string;
    previewImg: string;
    images: string;
    flagIsPremium: boolean;
    flagIsFavourites: boolean;
    rating: 1 | 2 | 3 | 4 | 5;
    typeHousing: TypeHousing;
    countRooms: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    countPeople: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    price: number;
    conveniences: ConveniencesType;
    author: User;
    countComments: number;
    coordinates: number;
}
