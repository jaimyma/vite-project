<template>
  <section ref="statsSection" class="bg-gray-900 text-white py-16 px-6 rounded-xl max-w-6xl mx-auto z-10 relative">
    <div class="max-w-4xl mx-auto text-center">
      <p class="inline-block bg-purple-200 text-purple-900 px-4 mb-2 py-1 rounded-2xl w-fit mx-auto text-sm font-medium">Numbers</p>
      <h2 class="text-3xl font-bold">Trusted by creators worldwide</h2>
      <p class="text-gray-400 mt-2">Lorem ipsum dolor sit amet consect adipiscing possimus.</p>
    </div>

    <div class="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-0.75">
      <div v-for="(stat, index) in stats" :key="index" class="bg-gray-800 p-6 text-center"
        :class="{
          'rounded-l-lg md:rounded-l-2xl': index === 0,
          'rounded-r-lg md:rounded-r-2xl': index === stats.length - 1
        }">
        <p class="text-xl font-semibold">
          {{ stat.prefix }}{{ displayedStats[index] }}{{ stat.suffix }}
        </p>
        <p class="text-gray-400 text-sm">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const statsSection = ref(null);
    const stats = ref([
      { number: 8000, label: "Creators on the platform", prefix: "", suffix: "" },
      { number: 3, label: "Flat platform fee", prefix: "", suffix: "%" },
      { number: 99.9, label: "Uptime guarantee", prefix: "", suffix: "%" },
      { number: 70, label: "Paid out to creators", prefix: "$", suffix: "M" }
    ]);
    const displayedStats = ref([0, 0, 0, 0]);
    let observer = null;

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounting();
            observer.disconnect(); // Stop observer na starten animatie
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(statsSection.value);
    });

    function startCounting() {
      stats.value.forEach((stat, index) => {
        let start = 0;
        let end = stat.number;
        let duration = 2000; // 2 seconden
        let startTime = null;

        function animate(timestamp) {
          if (!startTime) startTime = timestamp;
          let progress = (timestamp - startTime) / duration;
          if (progress > 1) progress = 1;

          displayedStats.value[index] = Math.floor(progress * end);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            displayedStats.value[index] = end;
          }
        }

        requestAnimationFrame(animate);
      });
    }

    return {
      statsSection,
      stats,
      displayedStats
    };
  }
};
</script>
