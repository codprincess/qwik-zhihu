import { component$ } from '@builder.io/qwik';

// Import the loader from the layout
import { useGetServerTime } from "~/routes/layout";

export const Footer = component$(() => {
  // Consume the loader data
  const signal = useGetServerTime();
  return <div>Server time: {signal.value.time}</div>;
});
