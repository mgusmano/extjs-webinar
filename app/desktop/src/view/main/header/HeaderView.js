Ext.define('extjs-webinar.view.main.header.HeaderView', {
  extend: 'Ext.toolbar.Toolbar',
  height: 50,
  xtype: 'headerview',
  cls: 'headerview',
  defaults: {
    ui:'toolbutton-toolbar',
    handler:'onToolButtonClicked'
  },
  items: [
    {
      xtype: 'button',
      ui: 'toolbutton-toolbar',
      reference: 'navtoggle',
      handler: 'onHeaderViewNavToggle',
      iconCls: 'x-fa fa-navicon'
    },
    {
      xtype: 'component',
      bind: {html: '{heading}'},
    },
    '->',
    '->',





    {name:'calendar', iconCls:'x-fa fa-calendar', tooltip:'calendar',
      handler: function() {
        var d = Date.now()
        console.log('sending: ' + d)
        window.dispatchEvent(new CustomEvent('mjg',{detail:{message:d}}));
      }},
    {name:'bolt',     iconCls:'x-fa fa-bolt',     tooltip:'bolt'},
    {name:'search',   iconCls:'x-fa fa-search',   tooltip:'search'},
    {
      reference: 'detailtoggle',
      iconCls:'x-fa fa-arrow-left',
      tooltip: 'show and hide detail view',
      ui: 'headerviewbutton-toolbar',
      handler: 'onHeaderViewDetailToggle'
    }
  ]
});
