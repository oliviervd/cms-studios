import { Access, FieldAccess} from "payload/types";
import {User} from "payload/auth";

export const isAdmin: Access<any, User> = ({req: {user}}) => {
    //return true or false based on role (if admin --> true)
    return Boolean(user?.roles?.includes('admin'))
}

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({req: { user }}) => {
    return Boolean(user?.roles?.includes('admin'))
}