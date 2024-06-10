import jwt from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  // first take the token from users using the headers
  // and destructure the token
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not authorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    // when we generated the token we set the object with user id:userid now we took that and attach to req body
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// this middleware basically takes the token and convert into userid and using that id we can add remove and get data from the cart
export default authMiddleware;
