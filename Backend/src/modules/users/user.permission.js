//src/modules/users/user.permission.js 
import permission from "../../core/security/permissions.js";

export default {
    CREATE_USER: permissions.USER_CREATE,
    READ_USER: permissions.USER_READ,
    UPDATE_USER: permissions.USER_UPDATE,
    DELETE_USER: permissions.USER_DELETE,
};

