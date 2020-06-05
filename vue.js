var app = new Vue({
    el: '#app',
    data: {
        message: "Hello VUEJS"
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        seen: true
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})
app3.todos.push({ text: "I am the last one added here by push" })

var app4 = new Vue({
    el: "#app4",
    data: {
        message: "Reverse me if you can"
    },
    methods: {
        reverseIt: function () {
            this.message = this.message.split("").reverse().join("")
        }
    }
})
var app5 = new Vue({
    el: "#app5",
    data: {
        message: "HALLO"
    }
})