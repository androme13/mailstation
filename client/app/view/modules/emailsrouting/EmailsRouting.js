/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('Desktop.view.modules.emailsrouting.EmailsRouting', {
    extend: 'Ext.grid.Panel',
    xtype: 'emailsrouting',
    
    requires: [
      'Desktop.view.modules.emailsrouting.EmailsRoutingController'  
    ],
    alias: 'widget.emailsrouting',
    controller: 'emailsrouting',
    title: 'Simpsons',
    startMenu: 'routage|emails',
    startTitle:'routage',
    //store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ]
});

