import Vue from 'vue';
import Binding from './components/Binding.vue';

Vue.config.productionTip = false;
Vue.filter('uppercase', function (value) {
  if (!value) return ''
  value = value.toString();
  return value.toUpperCase();
});
const vm = new Vue({
  el: "#app",
  data: {
    text: "style me!",
    styled: "",
    bgcolor: "",
    date: "",
    show: true,
    employee: {
      id: "",
      firstName: "John",
      lastName: "",
      department: ""
    }
  },
  render: h => h(Binding, {
  }),
  methods:{
    
  }
});
// vm.$mount('#app')

console.log(vm)