<template>
  <div
    class="flex items-center shrink-0"
    :class="compact ? 'gap-2.5' : 'gap-3'"
    aria-hidden="true"
  >
    <span
      :class="[
        'font-serif font-bold text-accent leading-none select-none',
        compact ? 'text-2xl' : 'text-3xl lg:text-4xl'
      ]"
    >
      JD
    </span>

    <div
      :class="compact ? 'h-7 w-px' : 'h-9 lg:h-10 w-px'"
      class="bg-accent shrink-0"
    />

    <span
      :class="[
        'font-sans font-semibold uppercase text-primary leading-none tracking-[0.2em]',
        compact ? 'text-[11px]' : 'text-xs sm:text-sm lg:text-base'
      ]"
    >
      JOAODONO
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  compact?: boolean
}>()
</script>
