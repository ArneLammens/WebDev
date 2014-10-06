App = Ember.Application.create();

App.ApplicationStore = DS.Store.extend({
    revision: 12,//notifi if there are changes made to the api 
    
});


App.Router.map(function() {
    this.resource('products');
    this.resource('login');
    this.resource('profile');
    this.resource('product',{ path:'product/:product_id'});
    this.resource('createProduct');
    this.resource('createAccount');


});

App.CreateAccountRoute = Ember.Route.extend({

model:function()
{
    return {};
}
});
App.CreateProductRoute = Ember.Route.extend({

model:function()
{
    return {};
}

});

App.LoginRoute = Ember.Route.extend({

model: function() {
    return {};
  }
});

App.ProductsRoute=Ember.Route.extend({
    model:function(){
        var products=$.getJSON('http://localhost:8080/Scriptie/webresources/product');
        return products; 
    }
    
});
App.ProductRoute=Ember.Route.extend({

    model:function(params){
        var product=$.getJSON('http://localhost:8080/Scriptie/webresources/product/'+params.product_id);
        return product ;
    },
    setupController: function(controller, model) {
    controller.set('model', model);
  }
});
App.ProfileRoute=Ember.Route.extend({
    model:function(){
        return{};
    }
});




