import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { loader$ } from "@builder.io/qwik-city";

// export const useGetServerTime = loader$(() => {
//   return {
//     time: Date.now()
//   }
// })
// })

export default component$(() => {
  //const signal = useGetServerTime();
  return (
    <>index</>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
