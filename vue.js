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
Vue.component('to-do', {
    template: '<li>List item</li>'
})
var app6 = new Vue({
    el: "#app6",
})
Vue.component('to-do1', {
    props: ['todo1'],
    template: '<li>{{todo1.text}}</li>'
})
var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [{ id: 1, text: "Shampoo" }, { id: 2, text: "Bread" }, { id: 3, text: "Apple" }]
    }
})
var app8 = new Vue({
    el: '#app8',
    data: {
        link: "https://www.google.com",
        blogLink: "<a href='https://www.bing.com'>Bing</a>"
    }
})
var app9 = new Vue({
    el: '#app9',
    data: {
        Counter: 0
    }
})
new Vue({
    el: "#app10",
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY
        }
    }
})
new Vue({
    el: "#app11",
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY
        }
    }
})
new Vue({
    el: "#app12",
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY
        },
        showAlert: () => {
            alert("Enter or Space key keyup event")
        }
    }
})
