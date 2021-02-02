Ext.define('extjs-webinar.view.home.HomeView',{
	xtype: 'homeview',
  cls: 'homeview',
	// controller: {type: 'homeviewcontroller'},
	// viewModel: {type: 'homeviewmodel'},
	// requires: [],
  extend: 'Ext.Container',
  layout: 'fit',
  listeners: {
    afterrender: function() {
      console.log('afterrender')
      console.log(Ext.react)

      Ext.react.ReactDOM.render(
        Ext.react.React.createElement(
          Ext.react.App,
          {},
          null
        ),
        this.el.dom
      );

    },
    beforedestroy: function() {
      var r = Ext.react.ReactDOM.unmountComponentAtNode(this.el.dom)
      if (r == true) {
        console.log('beforedestroy - destroyed',r,this.el.dom)
      }
      else {
        console.log('beforedestroy - NOT destroyed',r,this.el.dom)
      }
    }
},
});