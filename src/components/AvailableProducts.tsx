import { useCartStore } from "../store/CartStore"

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [state.availableItems, state.addToCart]);

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => {
              addToCart(item)
            }}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}