/**
 * New comment creation button
 *
 * @class NewButtonView
 * @extends Backbone.View
 * @author Bodnar Istvan <istvan@gawker.com>
 */
/*global CommentModel, FormView */
var NewButtonView = Backbone.View.extend(
/** @lends NewButtonView.prototype */
	{
		/**
		 * The map of delegated event handlers
		 * @type Object
		 */
		events: {
			'click': 'createComment'
		},
		
		formViewFlag: false,
		
		/**
		 * Initialize view, make sure button has a comment collection to work with
		 */
		initialize: function () {
			if (this.collection === undefined) {
				throw 'NoCollectionDefined';
			}
		},
		
		/**
		 * Click event handler that first creates a new empty comment model, and assigns the model to a FormView instance.
		 * FormView will handle internally new comment creation and existing comment editing.
		 * @returns {Boolean} Returns false to stop propagation
		 */
		createComment: function () {
			if(this.formViewFlag){
				return false;
			}
			// create new comment model
			var comment = new CommentModel({});
			
			// render form view right after new button
			var formview = new FormView({model: comment, commentView: this});
			this.$el.after(formview.render().$el);
		
			// add saved model to collection after form was submitted successfully
			formview.on('success', this.handleFormSuccess, this);
			
			this.formViewFlag=true;

			// finally, return false to stop event propagation
			return false;
		},
		
		/**
		 * Method to handle FormView success event
		 * @param {CommentModel} model Model data returned by FormViews save request
		 */
		handleFormSuccess: function (model) {
			this.collection.add(model);
		}
	
	}
);