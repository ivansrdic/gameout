export default () => {
  if(ServiceConfiguration.configurations.find({service: 'facebook'}).count() === 0) {
    ServiceConfiguration.configurations.insert({
      service : 'facebook',
      appId : '1089454264427484',
      secret : '21d271d8b7f479a81e7e41fb058c3f5f',
      loginStyle : 'popup'
    });
  }
  if(ServiceConfiguration.configurations.find({service: 'google'}).count() === 0) {
    ServiceConfiguration.configurations.insert({
      service : 'google',
      clientId : '75149473645-ei5vv1bat68kfe40721o56k6v45i71qh.apps.googleusercontent.com',
      'secret' : 'yijxa4yUhD4_ocZFQlrk9YjX',
      'loginStyle' : 'popup'
    });
  }

  Accounts.config({
    sendVerificationEmail: true
  });

  process.env.MAIL_URL = 'smtp://postmaster@sandbox4e333d9d03c8498ca87e533468696cb2.mailgun.org:6cfce0f331307da7674e899a5f454b0c@smtp.mailgun.org:587';
};