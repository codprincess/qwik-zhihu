import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";
import Menu from "~/components/menu/menu";
import Footer from "~/components/footer/footer";
export default component$(() => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <Slot />  {/*Slot: 组件下的嵌套路由*/}
        </div>
      </div>

      <Footer/>

    </>
  )
})
