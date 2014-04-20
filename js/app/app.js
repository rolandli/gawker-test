/**
 * Application controller view
 * Starts application, inits a new CommentCollection collection, assigns the empty list to 
 * a CommentlistView controller, also inits a NewButtonView instance to handle new comment insertion.
 * 
 * Check index.html to find the place where App is initialized, it's right after the container
 * DOM node is rendered.
 *
 * @class App
 * @extends Backbone.View
 * @author Bodnar Istvan <istvan@gawker.com>
 */
 
 /**
	My answer to question 6:
	Rather than loading all the comments at once in the listview, you could use 
	ajax and infinity loading to load comments as the user scrolls down the page 
	to browse them.  If there are a lot of comments, it would result in longer load 
	times and performance would suffer.  Other minor things you can do to optimize speed
	include minimizing js files, and caching the background image asset.
	/*global CommentCollection, CommentlistView, FormView, NewButtonView, RandomButtonView and CommentModel!*/
var App = Backbone.View.extend(
/** @lends App.prototype */
	{
		/**
		 * Initialize new application instance
		 */
		initialize: function () {
			// create empty comment collection
			var collection = new CommentCollection();
			
			var prerender1 = new CommentModel({author: 'Call Kotaku', text: 'This is a "pre-rendered" comment'});
			var prerender2 = new CommentModel({author: 'Fighting Game Community Bias', text: 'This is a "pre-rendered" comment'});
			collection.add([prerender1,prerender2]);
			// bind the NewButtonView to the already rendered 'newcomment' DOM element, we'll need to know the
			// collection to work with so FormView can insert the new comment properly
			new NewButtonView({collection: collection, el: this.$el.find('.newcomment')});
			
			// bind the RandomButtonView to the already rendered 'randomcomment' DOM element
			new RandomButtonView({collection: collection, el: this.$el.find('.randomcomment')});

			// create comment list view, assign our empty collection
			var listview = new CommentlistView({collection: collection, el: this.$el.find('.commentlist')});
			listview.render();
		}
	}
);


/**
 * Documentation related comments
 */
/**
 * @name Backbone
 * @class Backbone
 * Application is a Backbone based application
 * @link http://documentcloud.github.com/backbone/
 */


/**
 * @name Backbone.Model
 * @class Backbone.Model
 * Backbone model superclass
 * @link http://documentcloud.github.com/backbone/
 */

/**
 * @name Backbone.Collection
 * @class Backbone.Collection
 * Backbone collection superclass
 * @link http://documentcloud.github.com/backbone/
 */

/**
 * @name Backbone.View
 * @class Backbone.View
 * By default all views extend Backbone.View
 * @link http://documentcloud.github.com/backbone/
 */

 