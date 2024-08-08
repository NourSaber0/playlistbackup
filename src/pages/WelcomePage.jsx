const WelcomePage = () => {
	  return (
		  <div className="bg-base-100 py-20 mb-4 h-screen">
			  <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
				  <div className="max-w-md ">
					  <h1 className="text-5xl font-bold">Welcome to Spotify Playlist Backup</h1>
					  <p className="py-6">
						 Login with your Spotify account to backup your playlists.
					  </p>
					  <button className="btn btn-primary">Login With Spotify</button>
				  </div>
			  </div>
		  </div>
  );
}
export default WelcomePage;