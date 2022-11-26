import type { Principal } from '@dfinity/principal';
export interface MyProfile {
  'title' : string,
  'lastName' : string,
  'firstName' : string,
}
export interface _SERVICE { 'getUserInfo' : () => Promise<[] | [MyProfile]> }
