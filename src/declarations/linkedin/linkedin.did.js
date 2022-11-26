export const idlFactory = ({ IDL }) => {
  const MyProfile = IDL.Record({
    'title' : IDL.Text,
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  return IDL.Service({
    'getUserInfo' : IDL.Func([], [IDL.Opt(MyProfile)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
