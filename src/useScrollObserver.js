import { ref, watch, onUnmounted } from 'vue';

export function useScrollObserver() {
  const observer = ref(null);
  const observedElements = ref([]);

  const callback = (entries) => {
    entries.forEach((entry) => {
      const observedEl = observedElements.value.find(
        (el) => el.target === entry.target
      );
      if (observedEl) {
        observedEl.callback(entry);
      }
    });
  };

  watch(
    () => observedElements.value,
    () => {
      if (observer.value) {
        observer.value.disconnect();
      }

      if (observedElements.value.length) {
        observer.value = new IntersectionObserver(callback, {
          root: null,
          threshold: 0.5,
          rootMargin: '0px', 
        });

        observedElements.value.forEach((el) => {
          observer.value.observe(el.target);
        });
      }
    },
    { deep: true }
  );

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });

  function startObserving(target, index, onIntersection) {
    observedElements.value.push({
      target,
      callback: (entry) => onIntersection(entry, index),
    });
  }

  return {
    startObserving,
  };
}
