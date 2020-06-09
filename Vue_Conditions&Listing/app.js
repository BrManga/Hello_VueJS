/* Simple Component */
Vue.component('hello', {
    template: '<h1>Hello from simple Component</h1>'
})
var app = new Vue({
    el: "#app",
    data: {
        show: true,
        number: 10,
        showParag: false,
        products: ["PC", "Laptop", "Monitor"],
        persons: [
            { name: "Alex De Sousa", email: "alex@gmail.com" },
            { name: "Fredo Giovanni", email: "fgiovanni@gmail.com" }
        ]
    }
})
/* Reaching to ref */
setTimeout(() => {
    /* What important here is: It won't be in VueJS Instance so watcher layer won't look at it */
    app.$refs.MyButton.innerText = "Later Changed"
}, 3000);
/* Using String Template and Mount Together */
var app2 = new Vue({
    template: '<h1>I am coming from template in app.js</h1>'
})
app2.$mount(".forTemplate")