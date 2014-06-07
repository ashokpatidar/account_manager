//Model

//So einfach definiert man ein Model. Es definiert die Feld-Struktur der Datensätze.
Ext.define('AM.model.User', {
	extend: 'Ext.data.Model',
	fields: ['name', 'email']
});