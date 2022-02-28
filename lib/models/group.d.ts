import { Model } from 'sequelize-typescript';
export default class Group extends Model<Group> {
    name: string;
    comment: string;
}
