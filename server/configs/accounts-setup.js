export default () => {
  if(ServiceConfiguration.configurations.find({service: 'facebook'}).count() === 0) {
    ServiceConfiguration.configurations.upsert({
      service : 'facebook',
      appId : '1089454264427484',
      secret : '21d271d8b7f479a81e7e41fb058c3f5f',
      loginStyle : 'popup'
    });
  }
  if(ServiceConfiguration.configurations.find({service: 'google'}).count() === 0) {
    ServiceConfiguration.configurations.upsert({
      service : 'google',
      clientId : '75149473645-ei5vv1bat68kfe40721o56k6v45i71qh.apps.googleusercontent.com',
      'secret' : 'yijxa4yUhD4_ocZFQlrk9YjX',
      'loginStyle' : 'popup'
    });
  }
  if(ServiceConfiguration.configurations.find({service: 'twitter'}).count() === 0) {
    ServiceConfiguration.configurations.upsert({
      service : 'twitter',
      consumerKey : 'elSGgXY8JPqLCDJ3XOOw97b7W',
      secret : 'EcpFnLGerqj1JnVDr3jaPS8EELaFkFKOnJZENIKLvR10o7KUDK',
      loginStyle : 'popup'
    });
  }
};