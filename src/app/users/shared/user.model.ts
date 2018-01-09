import{Credit} from './credit';

export class User {

  $key: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  credits: Credit[];
  providingServices: string;
  serviceSeekers: string;
  serviceFee: number;

}
