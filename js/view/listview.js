/**
 * Comment list controller and view
 * Subscribes to comment collection events and renders a list of comments according
 *
 * @class CommentlistView
 * @extends Backbone.View
 * @author Bodnar Istvan <istvan@gawker.com>
 */
/*global CommentView */
var CommentlistView = Backbone.View.extend(
/** @lends CommentlistView.prototype */
	{
		/**
		 * Subscribe to collection 'reset' and 'add' events
		 */
		initialize: function () {
			this.collection.on('add reset', this.render, this);
		},
		
		/**
		 * Render comments using CommentView instances for each model in the collection.
		 * @returns {CommentlistView} Returns the view instance itself, to allow chaining view commands.
		 */
		 /** My Explaination for why this function is inefficient:
		 Render iterates over every single model and creates a CommentView each time the comment 
		 CommentlistView is rendered and the CommentlistView is rendered each time something is changed
		in the collection.  This is unnecessary when you can remove or add commentviews to or from this 
		list view in the functions associated with the commentView.
		 **/
		render: function () {
			// first clean up the container
			this.$el.empty();
			
			// iterate over models in collection and render comments using the CommentView view class
			this.collection.each(function (item) {
				// create new CommentView instance
				var commentview = new CommentView({
					model: item
				});
				
				// append rendered CommentView instance to CommentlistViews container
				this.$el.append(commentview.render().$el);
			}, this);
			
			return this;
		}
	}
);