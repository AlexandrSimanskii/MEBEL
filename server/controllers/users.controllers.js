import Users from "../models/user.models.js";
import { errorHandler } from "../utils/error.js";

// export const updateUser = async (req, res, next) => {
//   const reqCart = req.body.cart;

//   try {
//     const user = await Users.findById(req.params.id);
//     let { carts, password, ...rest } = user._doc;
//     const cartInCarts = carts.some((item) => item._id === reqCart._id);

//     if (!cartInCarts) {
//       carts.push(reqCart);
//     } else {
//       carts = carts.map((item) => (item._id === reqCart._id ? reqCart : item));
//     }

//     const updatedUser = await Users.findByIdAndUpdate(req.params.id, { carts });

//     res.json(updateUser);
//   } catch (error) {
//     next(error);
//   }
// };

export const updateUser = async (req, res, next) => {
  const reqCart = req.body.carts;

  try {
    const user = await Users.findById(req.params.id);

    const existingCartItemIndex = user.carts.findIndex(
      (item) => item._id === reqCart._id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = { ...reqCart };

      updatedCart.count > 0
        ? (user.carts[existingCartItemIndex] = updatedCart)
        : user.carts.splice(existingCartItemIndex, 1);
    } else {
      user.carts.push(reqCart);
    }

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};
