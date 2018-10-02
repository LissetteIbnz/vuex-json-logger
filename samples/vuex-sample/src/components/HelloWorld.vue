<template>
  <div class="hello">
    <button @click="increment">Increment</button>
    <button @click="decrease">Decrease</button>
    <input type="number" v-model="value" />
    <button @click="setCounter">Set</button>
    <p>Counter value: {{ $store.state.count }}</p>
    <button @click="exportJson">Export state</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    increment() {
      this.$store.commit("increaseCounter");
    },
    decrease() {
      this.$store.commit("decreaseCounter");
    },
    setCounter() {
      this.$store.commit("setCounter", Number(this.value));
    },
    exportJson() {
      this.$store.commit("hola");
    }
  }
};
</script>
