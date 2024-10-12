import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

const placeOrder = asyncHandler(async (req, res) => {
  const { orderPurpose, orderItem, shippingAddress, paymentMethod } = req.body;

  if (orderItem && orderItem.length == 0) {
    res.status(400);
    throw new Error("No items in the orderlist");
  } else {
    const order = new Order({
      orderPurpose,
      orderItem: orderItem.map((x) => ({
        ...x,
        product: x._id,
      })),

      shippingAddress,
      paymentMethod,
      user: req.user._id,
    });
    const createdOrder = await order.save();
    res.status(200).json(createdOrder);
  }
});

export { placeOrder };
