Ext.define('extjs-webinar.view.layout.LayoutView',{
	xtype: 'layoutview',
  cls: 'layoutview',
  extend: 'Ext.Container',
  layout: 'fit',
  listeners: {
    afterrender: function() {
      //console.log('afterrender')
      //console.log(Ext.react)
      this.r = Ext.react.React.createElement(Ext.react.BasicLayout,{},null)
      Ext.react.ReactDOM.render(this.r,this.el.dom);
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