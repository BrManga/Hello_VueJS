<template>
  <div>
    <p>Lamp : {{status}}</p>
    <button @click="openLamp">ON</button>
  </div>
</template>
    
<script>
export default {
  data: function() {
    return {
      status: "Off"
    };
  },
  methods: {
    openLamp() {
      this.status = "Open";
    }
  }
};
</script>

