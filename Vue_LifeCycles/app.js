
/* LIFE CYCLE */
new Vue({
    el: "#lifeCycle",
    data: {
        title: "Lifecycle Methods "
    },
    methods: {
        destroy: function () {
            this.$destroy()
        }
    },
    beforeCreate: function () {
        console.log("beforeCreate triggered")
    },
    created: function () {
        console.log("created triggered")
    },
    beforeMount: function () {
        console.log("beforeMount triggered")
    },
    mounted: function () {
        console.log("mounted triggered")
    },
    beforeUpdate: function () {
        console.log("beforeUpdate triggered")
    },
    updated: function () {
        console.log("updated triggered")
    },
    beforeDestroy: function () {
        console.log("beforeDestroy triggered")
    },
    destroyed: function () {
        console.log("destroyed triggered")
    }

})