(function() {
  var app = ZendeskApps.defineApp(null)
  .reopenClass({
    experiments:{},
    location: {
      support: {
        ticket_sidebar:{
          url:'assets/iframe.html'
        }
      }
    },
    noTemplate:[],
    singleInstall: false,
    signedUrls: false
  })
  .reopen({
    appName: 'Requester X-ray',
    appVersion: '1.0',
    locationIcons: {},
    assetUrlPrefix: 'http://localhost:4567/',
    logoAssetHash: {'support': 'logo-small.png'},
    appClassName:'app-0',
    author: {
      name: 'Anthonie Lance',
      email: 'alance@sf.edu'
    },
    frameworkVersion: '2.0'
  })

  ZendeskApps['Request X-ray'] = app

  if (ZendeskApps['Request X-ray']) {
    ZendeskApps['Request X-ray'].install({
      id: 0,
      app_id: 0,
      app_name: 'Requester X-ray',
      enabled: true,
      requirements: null,
      collapsible: true,
      settings: {
        title: 'Requester X-ray'
      },
      updated_at:'2018-04-28T16:30:12-04:00',
      created_at:'2018-04-28T16:30:12-04:00'
    })
  }
}())

ZendeskApps.trigger && ZendeskApps.trigger('ready')