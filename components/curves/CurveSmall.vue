<script setup lang="ts"></script>

<template>
  <div class="curve">
    <svg
      width="1440"
      height="166"
      viewBox="0 0 1440 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-0.5 19.7066L119.5 13.8044C239.5 7.9022 479.5 -4.74531 719.5 2.00003C959.5 7.9022 1199.5 32.3541 1319.5 44.1584L1439.5 55.9628V165.575H1319.5C1199.5 165.575 959.5 165.575 719.5 165.575C479.5 165.575 239.5 165.575 119.5 165.575H-0.5V19.7066Z"
        fill="#CE9983"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.curve {
  position: absolute;
  display: flex;
  bottom: calc(100% - 1px);
  left: 0;
  width: 100%;

  svg {
    height: auto;
    width: 100%;
  }
}
</style>
