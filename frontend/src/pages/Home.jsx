import Maincarousel from "../components/Maincarousel"
import Productscarouselmaterial from "../components/Productscarouselmaterial"

export default function Home() {
  return (
    <>
      <Maincarousel />
      <Productscarouselmaterial material='Acrylic'/>
      <Productscarouselmaterial material='Bamboo'/>
      <Productscarouselmaterial material='Fry Bamboo'/>
      <Productscarouselmaterial material='PVC'/>
    </>
  )
}