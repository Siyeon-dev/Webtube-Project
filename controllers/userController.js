export const join = (req, res) => res.render("join", { pageTitle : "Join"});
export const login = (req, res) => res.render("login", { pageTitle : "login"});
export const users = (req, res) => res.render("users", { pageTitle : "Users"});
export const logout = (req, res) => res.render("logout", { pageTitle : "Logout"});
export const user_detail = (req, res) => res.render("userDetail", { pageTitle : "User Detail"});
export const edit_profile = (req, res) => res.render("editProfile", { pageTitle : "Edit Profile"});
export const change_password = (req, res) => res.render("changePassword", { pageTitle : "Change Password"});