var playlist = {
  Beatles: 'Yesterday',
  ['Freddy Mercury']: ['Notorious BIG']
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
