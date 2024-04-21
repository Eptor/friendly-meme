<script setup></script>

<template>
  <div
    class="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12"
  >
    <div class="relative py-3 sm:mx-auto sm:max-w-xl">
      <div
        class="relative mx-8 rounded-3xl bg-white px-4 py-10 shadow sm:p-10 md:mx-0"
      >
        <div class="mx-auto max-w-md">
          <div class="flex items-center space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 7.586V5z"
                clip-rule="evenodd"
              />
            </svg>
            <div
              class="block self-start pl-2 text-xl font-semibold text-gray-700"
            >
              <h2 class="leading-relaxed">Mi Proyecto</h2>
              <p class="text-sm font-normal leading-relaxed text-gray-500">
                Landing Page con Vue.js y Tailwind CSS
              </p>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
            >
              <p>Una descripción atractiva de tu proyecto.</p>
              <p>Información adicional sobre tu proyecto.</p>
            </div>
            <div
              class="pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7"
            >
              <p>
                ¿Quieres saber más?
                <router-link
                  to="/login"
                  class="text-blue-600 hover:text-blue-700"
                >
                  Inicia sesión
                </router-link>
                o
                <router-link
                  to="/register"
                  class="text-blue-600 hover:text-blue-700"
                >
                  Regístrate
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
