import { useCartStore } from "../store/CartStore"

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart
  ]);

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => {
              removeFromCart(item.id)
            }}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  )
}