import AsideNav from "./AsideNav";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function HeaderNav({ user, handleLogout }) {
	const navigate = useNavigate();
	const navigateToSettings = () => navigate("/settings");
	return (
		<header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
			<AsideNav />
			<div>Welcome, {user.name}</div>
			<div className='relative ml-auto flex-1 md:grow-0'></div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='overflow-hidden rounded-full'
					>
						<img
							src={`https://avatar.oxro.io/avatar.svg?name=${user.name}`}
							width={36}
							height={36}
							alt='Avatar'
							className='overflow-hidden rounded-full'
						/>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem onClick={() => navigate("/")}>
						Home
					</DropdownMenuItem>
					<DropdownMenuItem onClick={navigateToSettings}>
						Settings
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={handleLogout}>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
}

export default HeaderNav;
