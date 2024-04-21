<template>
  <div class="p-6">
    <h2 class="mb-4 text-2xl font-bold">Dashboard</h2>

    <div class="mb-8">
      <h3 class="mb-2 text-xl font-semibold">Incidentes</h3>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Descripción</th>
            <th class="px-4 py-2">Ubicación</th>
            <th class="px-4 py-2">Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(incident, index) in incidents" :key="index">
            <td class="border px-4 py-2">{{ incident.id }}</td>
            <td class="border px-4 py-2">{{ incident.descripcion }}</td>
            <td class="border px-4 py-2">{{ incident.ubicacion }}</td>
            <td class="border px-4 py-2">{{ incident.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 class="mb-2 text-xl font-semibold">Notificaciones</h3>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Mensaje</th>
            <th class="px-4 py-2">ID del Incidente</th>
            <th class="px-4 py-2">Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notification, index) in notifications" :key="index">
            <td class="border px-4 py-2">{{ notification.id }}</td>
            <td class="border px-4 py-2">{{ notification.mensaje }}</td>
            <td class="border px-4 py-2">{{ notification.incidente_id }}</td>
            <td class="border px-4 py-2">{{ notification.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../../utils/supabase";

const incidents = ref([]);
const notifications = ref([]);

onMounted(async () => {
  let { data: incidentsData, error: incidentsError } = await supabase
    .from("Incidente")
    .select("*");

  if (incidentsError) console.error(incidentsError);
  else incidents.value = incidentsData;

  let { data: notificationsData, error: notificationsError } = await supabase
    .from("Notificacion")
    .select("*");

  if (notificationsError) console.error(notificationsError);
  else notifications.value = notificationsData;

  console.log(incidentsData, notificationsData);
});
</script>
