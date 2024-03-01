import Users from "../models/user.models.js";
import { errorHandler } from "../utils/error.js";

export const updateUserCart = async (req, res, next) => {
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
export const updateUserOrder = async (req, res, next) => {
  const { carts, orders } = req.body;

  const id = req.params.id;
  try {
    const user = await Users.findById(id);
    if (!user) {
      return next(errorHandler(404, "Такой пользователь не найден"));
    }
    user.carts = carts;
    user.orders = orders;
    console.log(user);
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};
