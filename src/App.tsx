import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { GuitarCard } from "./components/Guitar"
import { useCart } from "./hooks/useCart"




export const App = () => {

    const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart();




    return (
        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <GuitarCard
                            key={guitar.id}
                            gui={guitar}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}