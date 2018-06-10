/**
 * Created by Rivers on 2018/6/10.
 */
var app = new Vue({
    el: '#app',
    data: {
        shoppingList: [
            {
                id: 1,
                name: 'iPhone X',
                price: 7399,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for (var i = 0; i < this.shoppingList.length; i++) {
                var item = this.shoppingList[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce: function(index) {
            if (this.shoppingList[index].count === 1) return;
            this.shoppingList[index].count--;
        },
        handleAdd: function(index) {
            this.shoppingList[index].count++;
        },
        handleRemove: function(index) {
            this.shoppingList.splice(index, 1);
        }
    }
});