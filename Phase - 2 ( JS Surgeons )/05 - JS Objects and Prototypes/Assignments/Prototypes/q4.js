// create a playlist constructor that initializes with an empty songs array. add a method addSong(song) to the prototype that adds a new song to the playlist

function PlayList () {
    this.songs = []
}

PlayList.prototype.addSong = function (song) {
    this.songs.push(song)
}