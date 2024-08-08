const NavBar = () => {
	return(
		<div className="navbar bg-base-300 ">
			<div className="flex-1">
				<a className="btn btn-ghost text-3xl ">PlayList Backup</a>
			</div>
			<div className="flex-none">
				<input type="checkbox" value="light" className="toggle theme-controller" />
			</div>
		</div>
	)
}
export default NavBar;