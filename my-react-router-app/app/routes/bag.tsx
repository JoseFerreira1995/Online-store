import { Box, Typography, Button, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCart, removeFromCart } from "~/data/products";
import { Form, redirect, useLoaderData } from "react-router";
import { useState } from "react";

export async function loader({ request }: any) {
  return getCart();
}

export async function action({ request }: any) {
  const formData = await request.formData();
  const id = Number(formData.get("id"));
  removeFromCart(id);
}

export default function Bag() {
  const cartItems = useLoaderData<typeof loader>();
  // const [cartItems, setCartItems] = useState(initialCart);

  const hasItems = cartItems.length > 0;

  // const handleIncrement = (id: number) => {
  //   incrementProductCart(id); // update cart data
  //   setCartItems(getCart()); // refresh state from data layer
  // };

  // const handleRemove = (id: number) => {
  //   removeFromCart(id); // update data layer
  //   setCartItems(getCart()); // sync local state
  // };

  return (
    <Box sx={{ display: "flex", gap: 4, p: 4 }}>
      <Box sx={{ flex: 2 }}>
        {hasItems ? (
          cartItems.map((item) => (
            <Paper
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "grey.200",
                  borderRadius: 1,
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography>${item.price}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography>{item.quantity}</Typography>
                <Button variant="outlined">+</Button>
              </Box>
              <Form method="post">
                <input type="hidden" name="id" value={item.id} />
                <IconButton type="submit" color="error">
                  <DeleteIcon />
                </IconButton>
              </Form>
            </Paper>
          ))
        ) : (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 10 }}
          >
            🛒 Your cart is emptier than my fridge at the end of the month!
          </Typography>
        )}
      </Box>

      {hasItems && (
        <Paper sx={{ flex: 1, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Cart Summary
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Subtotal</Typography>
            <Typography>
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" fullWidth>
              Checkout
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
