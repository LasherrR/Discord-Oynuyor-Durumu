const RPC = require('discord-rpc');

const clientId = '1388885753366581278'; // Discord Developer Portal'dan alınan CLIENT ID
RPC.register(clientId);

const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  rpc.setActivity({
    details: 'discord.gg/altyapi',
    state: 'Neva Development | Sunucu Geliştiriliyor',
    startTimestamp: new Date(),
    largeImageKey: 'lasher', // Discord Developer Portal'da tanımladığın resim adı
    largeImageText: 'Neva Development',
    buttons: [
      { label: 'Sunucuya Katıl', url: 'https://discord.gg/altyapi' },
      { label: 'Web Sitesi', url: 'https://as/' }
    ]
  });
  console.log('✅ Discord Oynuyor aktif edildi [Neva Development]');
});

rpc.login({ clientId }).catch(console.error);
