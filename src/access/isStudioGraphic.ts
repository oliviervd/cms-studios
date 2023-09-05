import {Access, FieldAccess, FieldExxess} from "payload/types";
import {User} from "payload/auth"

export const isStudioGraphic: Access<any, User> = ({req: {user}}) => {
    //return true or false based on role (if studio-graphic ==> true)
    // @ts-ignore
    return Boolean(user?.roles?.includes('studio-graphic'))
}

export const isStudioGraphicFieldLevel: FieldAccess<{id: string}, unknown, User> = ({req: {user }}) => {
    return Boolean(user?.roles?.includes('studio-graphic'))
}

