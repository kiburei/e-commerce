import Ember from 'ember';
    var products = [{
                name: 'Meko',
                price: "KES 12,000",
                description: "On Fire, woun't go off",
                image: ""
                }, {
                name: 'Crib',
                price: "KES 15,500",
                description: "That kid is not going any where",
                image: ""
                }, {
                name: 'Percolator',
                price: "KES 7,000",
                description: "Heated the water of life",
                image: ""
}];

export default Ember.Route.extend({
    model () {
        return products;
    }
});
