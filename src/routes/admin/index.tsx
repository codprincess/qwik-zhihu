import { component$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';


export const useIsLogged = loader$(({cookie}) => {
  return {
    logged: checkcookie(cookie)
  }
});

export const useGetCurrentUser = loader$(({cookie}) => {
  return {
    user: currentUserFromcookie(cookie)
  }
});

export default component$(() => {
  const logged = useIsLogged();
  const user = useGetCurrentUser();
  return (
    <section>
      <h1>Admin</h1>
      {logged.value.logged ? (
        <p>Welcome {user.value.user.name}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </section>
  );
});




