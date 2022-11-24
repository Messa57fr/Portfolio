import Layout from "../../components/Layout";
import Image from "next/image";
import { useStore } from "../../store/store";
import css from "../../styles/Cart.module.css"
import { urlFor } from "../../lib/client";
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';



export default function Cart() {
  const CartData = useStore((State)=> State.cart)
  const removePizza = useStore((State)=> State.removePizza)
  const handleRemove = (i) => {
    removePizza(i);
    toast.error("Item Removed")
  }
  return(
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>
            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0 &&
              CartData.pizzas.map((pizza, i) => {
                const src = urlFor(pizza.image).url()
                return(
                <tr key={i}>
                  <td className = {css.imageTd}>
                    <Image
                    loader = {()=> src}
                    src = {src}
                    alt = ""
                    objectFit = "cover"
                    width = {85}
                    height = {85}
                    />
                  </td>
                  <td>
                    {pizza.name}
                  </td>
                  <td>
                    {
                      pizza.size === 0 ?
                      "Small" :
                      pizza.size === 1 ?
                      "Medium" : "Large"
                    }
                  </td>
                  <td>
                    {pizza.price}
                  </td>
                  <td>
                    {pizza.quantity}
                  </td>
                  <td>
                    {pizza.price * pizza.quantity}
                  </td>
                  <td
                    style={{
                      color: "var(--themeRed)", cursor: "pointer"
                    }}
                    onClick={()=>handleRemove(i)}
                    >
                    x
                  </td>
                </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
        <div className={css.cart}>

        </div>
      </div>
      <Toaster/>
    </Layout>
  )

};
