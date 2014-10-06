

App.ApplicationController = Ember.ObjectController.extend(
        {
            needs: ['login'],
            actions: {
                logout: function() {
                    this.set("controllers.login.loginshow", false);
                },
                profileRedirect:function()
                {
                   this.transitionToRoute('/profile')
                
                },
                loginRedirect:function()
                {
                    this.transitionToRoute('/login')
                }
            }
        });
App.IndexController = Ember.Controller.extend(
        {
            needs: ['login'],
    
            actions:{
                productsRedirect:function()
                {
                    this.transitionToRoute('/products')
                }
            }
        });

App.CreateAccountController = Ember.Controller.extend({
    needs: ['login'],
    createAccount: {},
    actions:
            {
                createAccountAction: function()
                {
                    $.ajax({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        url: "http://localhost:8080/Scriptie/webresources/user",
                        type: "POST",
                        data: JSON.stringify(this.createAccount),
                        dataType: 'json',
                        success: function(data, textStatus, jqXHR)
                        {
                            this.set('controllers.login.user', data)
                            this.set('controllers.login.loginshow', true)
                            this.transitionToRoute('/')
                        }.bind(this),
                        error: function(jqXHR, textStatus, errorThrown)
                        {
                            alert("something whent wrong");
                        }
                    });

                }
            },
            cancelRedirect:function()
            {
                this.transitionToRoute('/')
            }
            

});
App.CreateProductController = Ember.Controller.extend({
    needs: 'login',
    createProduct: {},
    actions:
            {
                createProductAction: function()
                {
                    this.createProduct.addBy = this.get('controllers.login.user');

                    $.ajax({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        url: "http://localhost:8080/Scriptie/webresources/product",
                        type: "POST",
                        data: JSON.stringify(this.createProduct),
                        dataType: 'json',
                        success: function(data, textStatus, jqXHR)
                        {
                            this.transitionToRoute('/products')
                        }.bind(this),
                        error: function(jqXHR, textStatus, errorThrown)
                        {
                            alert("something whent wrong");
                        }
                    });

                }
            },
            cancelRedirect:function()
            {
                this.transitionToRoute('/products')
            }

});
App.LoginController = Ember.ObjectController.extend({
    loginshow: false,
    user: {},
    actions: {
        login: function()
        {

            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/Scriptie/webresources/user/" + this.get('email') + "/" + this.get('password'),
                type: "GET",
                dataType: 'json',
                success: function(data, textStatus, jqXHR)
                {
                    user = data;
                    this.set('user', data);
                    this.set('loginshow', true);
                    this.transitionToRoute('/')
                }.bind(this),
                error: function(jqXHR, textStatus, errorThrown)
                {
                    alert("something whent wrong");

                }
            });


        },createAccountRedirect:function()
        {
            this.transitionToRoute("/createAccount")
        }
        
    }
});



App.ProfileController = Ember.Controller.extend({
    needs: 'login',
    actions: {
        modifyAccount: function()
        {
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/Scriptie/webresources/user/" + this.get('controllers.login.user.id'),
                type: "PUT",
                data: JSON.stringify(this.get('controllers.login.user')),
                dataType: 'json',
                success: function(data, textStatus, jqXHR)
                {
                    this.transitionToRoute('/')
                }.bind(this),
                error: function(jqXHR, textStatus, errorThrown)
                {
                    alert("something whent wrong");
                }
            });
        },
        IndexRedirect:function()
        {
            this.transitionToRoute('/')
        }
    }
});

App.ProductController = Ember.ObjectController.extend({
    equalUser: true,
    checkUser: function() {

        if (true)
        {

            return this.equalUser = true;
        }

    },
    actions:
            {
                removeProduct: function(id)
                {
                    $.ajax({
                        url: "http://localhost:8080/Scriptie/webresources/product/" + id,
                        type: "DELETE",
                        success: function(data, textStatus, jqXHR)
                        {
                            this.transitionToRoute('/products')
                        }.bind(this),
                        error: function(jqXHR, textStatus, errorThrown)
                        {
                            alert("something whent wrong");
                        }
                    });
                }
            }

});

App.ProductsController = Ember.ObjectController.extend({
    needs: ['login'],
    selected: '',
    options: ["alphabetical", "price"],
    selectedDidChange: function() {

        if (this.get('selected') === "alphabetical")
        {
            this.set('model', this.get('model').sortBy('name'))
        }
        else if (this.get('selected') === "price")
        {
            this.set('model', this.get('model').sortBy('price'))
        }
    }.observes('selected'),
actions:{
    createProductRedirect:function()
    {
        this.transitionToRoute("/createProduct")
    }
}
});
