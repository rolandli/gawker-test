var PopUpView = Backbone.View.extend({
	events:{
		'click .submit2': 'submit',
		'click .cancel2': 'delete',
		
	},
	
	render: function (){
		var template = $('#pop-up-template').text();
		var template_vars = {
			message: this.options.message
		};
		this.$el.html(Mustache.to_html(template, template_vars));
		return this;
	},
	delete: function () {
		this.remove();
		return false;
	},
	submit: function() {
		this.remove();
		this.options.view.remove();
		return false;
	}
	
})
	