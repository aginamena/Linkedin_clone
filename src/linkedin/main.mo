import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Types "./types";
import List "mo:base/List";

actor {
  //just as linkedin, the post of my friends are shown on my home page. 
  //when my friends login, the posts of their friends will be shown on their page.
  let friends = HashMap.HashMap<Principal, List.List<Types.Friend>>(0, Principal.equal, Principal.hash);
};
