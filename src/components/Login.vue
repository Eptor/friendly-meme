<script setup>
import { onMounted } from "vue";
import { supabase } from "../../utils/supabase.js";
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = async (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;

  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      throw error;
    }

    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
};

const verifySession = async () => {
  const user = await supabase.auth.getSession();
  if (user) {
    console.log("AAA");
    router.push("/user");
  } else {
    console.log("No active session");
  }
};

onMounted(() => {
  verifySession();
});
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión en tu cuenta
        </h2>
      </div>
      <form class="mt-8 space-y-6" method="POST" @submit.prevent="handleLogin">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only"
              >Dirección de correo electrónico</label
            >
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Dirección de correo electrónico"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Recuérdame
            </label>
          </div>

          <div class="text-sm">
            <a
              href="/register"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Crear cuenta
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
