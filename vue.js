Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (event) {
      // alert();

      // 未入力なら追加されない
      if (this.newItem == '') return

      var todo = {
        item: this.newItem,
        isDone: false
      }

      this.todos.push(todo)

      this.newItem = ''
    },

    deleteItem: function (index) {
      // alert(index)
      this.todos.splice(index, 1)
    }
  }
});

