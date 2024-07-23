import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";

  if (password !== password2) {
    // 패스워드 확인
    return res.render("join", { pageTitle, errorMessage: "Password confirmation does not match" });
  }

  const exists = await User.exists({ $or: [{ username: req.body.username }, { email }] });
  if (exists) {
    return res.render("join", { pageTitle, errorMessage: "This username/email is already taken" });
  }

  // $or:[{a},{b}] : 배열 중 어떤 조건이 하나라도 true면 해당 데이터를 찾아온다,

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("see");
