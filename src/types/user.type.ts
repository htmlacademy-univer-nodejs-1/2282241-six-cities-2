import {UserEnum} from './user.enum';

export type User = {
    name: string;
    email: string;
    avatar?: string;
    userType: UserEnum;
}
