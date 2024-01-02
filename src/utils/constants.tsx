// ##############################
export const userRoles = {
  ROLE_PUBLIC: 1,
  ROLE_PRIVATE: 2,
  ROLE_ADMIN: 3,
};

export const redirectPathByRoles = {
  [userRoles.ROLE_PUBLIC]: "/",
  [userRoles.ROLE_PRIVATE]: "/dashboard",
  [userRoles.ROLE_ADMIN]: "/dashboard",
};