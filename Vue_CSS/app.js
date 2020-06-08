var css1 = new Vue({
    el: "#css1",
    data: {
        active: true,
        color: "green"
    },
    computed: {
        divClass: function () {
            return { yellow: this.active, blue: !this.active }
        }
    }
})
var css2 = new Vue({
    el: "#css2",
    data: {
        color: "green",
        height: 100
    },
    computed: {
        customStyle: function () {
            return {
                backgroundColor: this.color,
                height: this.height + "px"
            }
        }
    }
})