import typegoose, { defaultClasses, getModelForClass } from '@typegoose/typegoose';
import { User } from '../../../types/user.type.js';
import { createSHA256 } from '../../helpers/common.js';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends defaultClasses.Base {
}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({unique: true, required: true})
  public email: string;

  @prop({required: true})
  public name: string;

  @prop({required: false, default: 'avatar-max.jpg'})
  public avatar?: string;

  @prop({required: true, default: ''})
  private password!: string;

  constructor(userData: User) {
    super();

    this.email = userData.email;
    this.avatar = userData.avatar;
    this.name = userData.name;
    this.userType = userData.userType;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  @prop({required: true})
  public userType: string;

  @prop({required: true})
  public favoriteOffers!: string[];
}

export const UserModel = getModelForClass(UserEntity);
