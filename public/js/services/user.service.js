'use  strict';

/*
create a User jsdata resource 
*/

app.factory('User', function(DS) {
    var User = {
    	basePath: '/api/user',
		name: 'user',
		idAtrribute: '_id',
		relations: {
			hasMany: {
				post: {
					localField: 'posts',
					foreignKey: 'author'
				}
			}
		},
		methods: {}
    };
    return User;

}).run(function(User) {});


