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
      //this.r = Ext.react.React.createElement(Ext.react.BasicLayout,{},null)
      this.r = Ext.react.React.createElement(Ext.react.App,{},null)
      //this.r = Ext.react.elementApp
      Ext.react.ReactDOM.render(this.r,this.el.dom);

      // Ext.react.ReactDOM.render(
      //   Ext.react.React.createElement(
      //     Ext.react.App,
      //     {},
      //     null
      //   ),
      //   this.el.dom
      // );
      //console.log(this.r)
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