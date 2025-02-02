import { LineChart, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";

function AsideNav() {
	return (
		<aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
			<nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
				<Link
					to='/'
					className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
				>
					<Home className='h-5 w-5' />
					<span className='sr-only'>Dashboard</span>
				</Link>
			</nav>
			<nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
				<Link
					to='/settings'
					className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
				>
					<Settings className='h-5 w-5' />
					<span className='sr-only'>Settings</span>
				</Link>
			</nav>
		</aside>
	);
}

export default AsideNav;
