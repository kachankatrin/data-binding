<template>
  <div>
    <header>
      <h1>Vue Styling</h1>
    </header>
    <section id="assignment">
      <!-- 1) Fetch the user input and use it as a CSS class -->
      <!-- The entered class should be added to the below paragraph -->
      <input type="text" v-model="styled" />
      <!-- (available classes: "user1", "user2") -->
      <p :class="[styled, isVisible]">{{ employee.value | capitalize }}</p>
      <!-- <myPartial/> -->
      <!-- <partial name="first-partial"></partial> -->
      <button @click="show = !show">Toggle Paragraph</button>
      <!-- 2) Use the "visible" and "hidden" classes to show/ hide the above paragraph -->
      <!-- Clicking the button should toggle between the two options -->

      <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
      <input type="text" v-model="bgcolor" />
      <p :style="{backgroundColor: bgcolor.length ? bgcolor : '#8ddba4'}">Style me inline!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Binding",
  props: {
    initialEmployee: Object
  },
  data() {
    return {
      text: "style me!",
      styled: "",
      bgcolor: "",
      show: true,
      info: {},
      employee: {
        id: "",
        value: "init",
        lastName: "",
        department: ""
      }
    };
  },
  computed: {
    isVisible() {
      return this.show ? "visible" : "hidden";
    }
  },
  created() {
    this.updateEmployee(this.initialEmployee);
    this.$emit("initUpdateEmployeeFunc", this.updateEmployee);
  },
  updated() {},
  methods: {
    hide() {
      this.show = !this.show;
    },
    updateEmployee(newEmployee) {
      this.employee = newEmployee;
    },
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#assignment {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#assignment h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}

#assignment input {
  font: inherit;
  border: 1px solid #ccc;
}

#assignment input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#assignment button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#assignment button:hover,
#assignment button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.user1 {
  background-color: blue;
  color: white;
}

.user2 {
  background-color: purple;
  color: white;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}
</style>
