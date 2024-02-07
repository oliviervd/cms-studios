import { Access, FieldAccess } from "payload/types";
import { User } from "payload/auth";

export const isAdmin: Access<any, User> = ({req: {user}}) => {
  //return true or false based on role (if admin --> true)
  // @ts-ignore
  return Boolean(user?.roles?.includes('admin'))
}

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({req: { user }}) => {
  // @ts-ignore
  return Boolean(user?.roles?.includes('admin'))
}

export const isEditor: Access<any, User> = ({req: {user}}) => {
  // @ts-ignore
  return Boolean(user?.roles?.includes('editor'))
}

export const isAdminOrSelf: Access = ({req: { user } }) => {
  // if logged in?
  if (user) {
    // user has role admin?
    if (user.roles?.includes("admin")) {
      return true;
    }

    // if not role admin; only provide access to themselves
    return {
      id: {
        equals: user.id
      }
    }
  }

  // reject everyone else
  return false;
}
