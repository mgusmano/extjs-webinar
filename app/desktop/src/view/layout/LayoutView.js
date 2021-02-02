Ext.define('extjs-webinar.view.layout.LayoutView',{
	xtype: 'layoutview',
  cls: 'layoutview',
  extend: 'Ext.Container',
  layout: 'fit',
  listeners: {
    afterrender: function() {
      var me = this;
      var store = Ext.create('Ext.data.Store',{
        proxy: {
          type: 'ajax',
          reader: 'json',
          url: 'resources/desktop/widgets.json'
        },
        listeners: {
          load: function (store, records, successful, eOpts) {
            var widgets = []
            records.map(function(record,index) {
              widgets.push({
                renderable: Ext.create(record.data)
              })
            })
            var layoutsConfig = {
              widgets: widgets,
              layouts:  [
                {"x":0,"y":0,"w":2,"h":5,"i":"0"},
                {"x":2,"y":0,"w":2,"h":5,"i":"1"},
                {"x":4,"y":0,"w":2,"h":5,"i":"2"},
                {"x":0,"y":5,"w":3,"h":5,"i":"3"},
                {"x":3,"y":5,"w":3,"h":5,"i":"4"}
              ]
            }
            me.r = Ext.react.React.createElement(Ext.react.BasicLayout,{layoutsConfig: layoutsConfig},null)
            Ext.react.ReactDOM.render(me.r,me.el.dom);
          }
        }

      })
      store.load();
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