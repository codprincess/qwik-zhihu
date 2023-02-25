import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <ul>
      <li> home</li>
      <li> <Link href="/about"> About</Link></li>
    </ul>
  )
})
