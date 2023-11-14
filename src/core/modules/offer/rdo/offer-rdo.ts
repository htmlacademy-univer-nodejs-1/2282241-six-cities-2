import {Expose} from "class-transformer";
import {CityType} from "../../../../types/city.type";
import {TypeHousing} from "../../../../types/typeHousing";
import {ConveniencesType} from "../../../../types/conveniences.type";
import {User} from "../../../../types/user.type";
import {CoordinatesType} from "../../../../types/coordinates.type";

export class OfferRdo {
    @Expose()
    public name!: string;

    @Expose()
    public description!: string;

    @Expose()
    public date!: Date;

    @Expose()
    public city!: CityType;

    @Expose()
    public previewImg!: string;

    @Expose()
    public images!: string[];

    @Expose()
    public flagIsPremium!: boolean;

    @Expose()
    public flagIsFavourites!: boolean;

    @Expose()
    public rating!: 1 | 2 | 3 | 4 | 5;

    @Expose()
    public typeHousing!: TypeHousing;

    @Expose()
    public countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    @Expose()
    public countPeople!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

    @Expose()
    public price!: number;

    @Expose()
    public conveniences!: ConveniencesType;

    @Expose()
    public author!: User;

    @Expose()
    public coordinates!: CoordinatesType;
}
