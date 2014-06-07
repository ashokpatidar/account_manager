
// Entry in Ext JS 4 application 

Ext.application({
	requires: ['Ext.container.Viewport'],
	name: 'AM',
	appFolder: 'app',

	//Hier wird der benutzte Controller definiert
	controllers: [
		'Users'
	],

	//Hier kommt die launch-Methode (grün):
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [
				{
					//xtype: 'panel',
					xtype: 'userlist', //'userlist' ist in der View als 'alias' definiert
					title: 'Users',
					html: 'List of users will go here'
				}
			]
		});
	}
});