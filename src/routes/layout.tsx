import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import {Footer} from "~/components/footer/footer";
export const useGetServerTime = loader$(() => {
  return {
    time: Date.now()
  }
});

export default component$(() => {
  const signal = useGetServerTime();
  return (
    <main>
      <Slot /> {/* <== Child layout/route inserted here */}
      <Footer />
    </main>
  );
});
