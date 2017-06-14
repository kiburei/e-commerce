import Ember from 'ember';
    var products = [{
                name: 'Meko',
                price: "KES 12,000",
                description: "On Fire, woun't go off",
                image: "http://www.hungryaphrodite.com/wp-content/uploads/2013/07/jiko5.jpg"
                }, {
                name: 'Crib',
                price: "KES 15,500",
                description: "That kid is not going any where",
                image:""
                }, {
                name: 'Percolator',
                price: "KES 7,000",
                description: "Heated the water of life",
                image: ""
}];

export default Ember.Route.extend({
    model () {
        return products;
    },
    actions: {
        addNewProduct(params) {
            products.push(params);
            
        }
    }
});
