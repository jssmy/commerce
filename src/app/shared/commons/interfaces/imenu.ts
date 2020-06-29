import { ILink } from './ilink';

export interface IMenu extends ILink{
    links?: ILink[]
}
