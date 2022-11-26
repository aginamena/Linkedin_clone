import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Types "./types";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor {
  //just as linkedin, the post of my friends are shown on my home page. 
  //when my friends login, the posts of their friends will be shown on their page.
  let friends = HashMap.HashMap<Principal, List.List<Types.Friend>>(0, Principal.equal, Principal.hash);
  let users = HashMap.HashMap<Principal, Types.MyProfile>(0, Principal.equal, Principal.hash);

  //if the user is in the users database, we return the profile of the user otherwise, return null.
  public query id func getUserInfo(): async ?Types.MyProfile{
    Debug.print(debug_show("id.caller = ", id.caller));
    return users.get(id.caller)
  };
};
