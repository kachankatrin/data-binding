import Vue from 'vue';
import Binding from './components/Binding.vue';
//import App from './App.vue';
const axios = require('axios');

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
      value: "John",
      lastName: "",
      department: ""
    },
    updateEmployeeFunc: {}
  },
  render : function(createElement) {
    var self = this;
    return createElement(Binding, {
      props : {
        initialEmployee : self.employee
      },
      on : {
        initUpdateEmployeeFunc : function(updateEmployee) {
          self.updateEmployeeFunc = updateEmployee;
        }
      }
    });
  },
  methods : {
    updateEmployee(newEmpl) {
      if (this.updateEmployeeFunc) {
        this.updateEmployeeFunc(newEmpl);
      }
    }
  }
});

setInterval(() => {
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
      vm.updateEmployee(response.data);
    })
}, 4000);