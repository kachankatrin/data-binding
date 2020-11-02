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
  components: {
    "Binding": Binding
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
        value: "john",
        lastName: "",
        department: ""
      }
    }
  },
  methods:{
    
  },
  template: `<Binding />`,
  // components: {
  //   "Binding": Binding
  // },
  // render: h => h(Binding, {
  // }),
});
// vm.$mount('#app')

console.log(vm)