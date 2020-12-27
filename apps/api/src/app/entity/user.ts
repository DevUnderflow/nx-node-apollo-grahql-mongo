import { prop, getModelForClass, modelOptions, Severity} from '@typegoose/typegoose';
import { Field, ObjectType } from "type-graphql";
import { IsEmail , Length } from 'class-validator';

@modelOptions({ options: { allowMixed : Severity.ALLOW} })
@ObjectType()
export class User {
  @Field()
  readonly _id: string;

  @Field()
  @prop()
  public name: string;

  @Field()
  @prop()
  public username: string;

  @Field()
  @IsEmail()
  @prop()
  public email: string;

  @prop({ type: String })
  public password!: string;

  @Field()
  @Length(1, 255)
  @prop({ default: null })
  public bio: string;
}
export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });
