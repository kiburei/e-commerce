import Ember from 'ember';

export default Ember.Component.extend({
    productForm: false,
    actions: {
        showAddProductForm() {
            this.set('productForm', true);
        },
        addNewProduct() {
            var params = {
                name: this.get('name'),
                descritpion: this.get('decription'),
                price: this.get('price'),
                image: this.get('image'),
            };
            this.set('name', '');
            this.set('decription', '');
            this.set('price', '');
            this.set('image', '');
            this.sendAction('addNewProduct', params);
        }
    }
});
