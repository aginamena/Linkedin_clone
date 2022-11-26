import Principal "mo:base/Principal";
module{
    public type Friend = {
        id : Principal;
        firstName : Text;
        LastName : Text
    };

    public type MyProfile={
        firstName: Text;
        lastName : Text;
        title: Text;
    }
}