<script setup>
import JobData from "@/jobs.json";
import { ref } from "vue";

const jobs = ref(JobData);
</script>

<template>
  <div v-for="job in jobs" :key="job.id">
    {{ job.title }}
  </div>
</template>
