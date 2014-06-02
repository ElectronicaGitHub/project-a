exports.usersViews = function(app) {
	app.get('/', function (req, res, next) {
	    res.render('index')
	});
} 	