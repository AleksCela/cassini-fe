import { Link } from "react-router-dom";

import {
	Activity,
	CircleUser,
	CreditCard,
	DollarSign,
	Menu,
	Package2,
	Search,
	Users,
	TrendingUp,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../components/ui/chart";

import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";

export const description =
	"An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export default function Dashboard() {
	const chartData = [
		{ month: "January", desktop: 186, mobile: 80 },
		{ month: "February", desktop: 305, mobile: 200 },
		{ month: "March", desktop: 237, mobile: 120 },
		{ month: "April", desktop: 73, mobile: 190 },
		{ month: "May", desktop: 209, mobile: 130 },
		{ month: "June", desktop: 214, mobile: 140 },
	];
	const chartConfig = {
		desktop: {
			label: "Desktop",
			color: "hsl(var(--chart-1))",
		},
		mobile: {
			label: "Mobile",
			color: "hsl(var(--chart-2))",
		},
	} satisfies ChartConfig;
	return (
		<div className='flex min-h-screen w-full flex-col'>
			<header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
				<nav className='hidden flex-col gap-4 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
					<Link
						to='#'
						className='flex items-center gap-2 text-lg font-semibold md:text-base'
					>
						<Package2 className='h-6 w-6' />
						<span className='sr-only'>Acme Inc</span>
					</Link>
					<Link
						href='#'
						className='text-foreground transition-colors hover:text-foreground'
					>
						Dashboard
					</Link>
					<Link
						href='#'
						className='text-muted-foreground transition-colors hover:text-foreground'
					>
						Air Quality
					</Link>
					<Link
						href='#'
						className='text-muted-foreground transition-colors hover:text-foreground'
					>
						Water Quality
					</Link>
					<Link
						href='#'
						className='text-muted-foreground transition-colors hover:text-foreground'
					>
						Greenery Index
					</Link>
					<Link
						to='/reports-map'
						className='text-muted-foreground transition-colors hover:text-foreground'
					>
						Raporting Map
					</Link>
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='shrink-0 md:hidden'
						>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>
								Toggle navigation menu
							</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<nav className='grid gap-6 text-lg font-medium'>
							<Link
								href='#'
								className='flex items-center gap-2 text-lg font-semibold'
							>
								<Package2 className='h-6 w-6' />
								<span className='sr-only'>Acme Inc</span>
							</Link>
							<Link href='#' className='hover:text-foreground'>
								Dashboard
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground'
							>
								Orders
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground'
							>
								Products
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground'
							>
								Customers
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground'
							>
								Analytics
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
				<div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
					<form className='ml-auto flex-1 sm:flex-initial'>
						<div className='relative'>
							<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
							<Input
								type='search'
								placeholder='Search products...'
								className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
							/>
						</div>
					</form>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='secondary'
								size='icon'
								className='rounded-full'
							>
								<CircleUser className='h-5 w-5' />
								<span className='sr-only'>
									Toggle user menu
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
			<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
				<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
					<Card x-chunk='dashboard-01-chunk-0'>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>
								Total Reports
							</CardTitle>
							<DollarSign className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>$45,231.89</div>
							<p className='text-xs text-muted-foreground'>
								+20.1% from last month
							</p>
						</CardContent>
					</Card>
					<Card x-chunk='dashboard-01-chunk-1'>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>
								Subscriptions
							</CardTitle>
							<Users className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>+2350</div>
							<p className='text-xs text-muted-foreground'>
								+180.1% from last month
							</p>
						</CardContent>
					</Card>
					<Card x-chunk='dashboard-01-chunk-2'>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>
								Sales
							</CardTitle>
							<CreditCard className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>+12,234</div>
							<p className='text-xs text-muted-foreground'>
								+19% from last month
							</p>
						</CardContent>
					</Card>
					<Card x-chunk='dashboard-01-chunk-3'>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>
								Active Now
							</CardTitle>
							<Activity className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>+573</div>
							<p className='text-xs text-muted-foreground'>
								+201 since last hour
							</p>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Area Chart - Gradient</CardTitle>
						<CardDescription>
							Showing the total of reports vs the solved ones for
							the past 6 months
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ChartContainer config={chartConfig}>
							<AreaChart
								accessibilityLayer
								data={chartData}
								margin={{
									left: 12,
									right: 12,
								}}
							>
								<CartesianGrid vertical={false} />
								<XAxis
									dataKey='month'
									tickLine={false}
									axisLine={false}
									tickMargin={8}
									tickFormatter={(value) => value.slice(0, 3)}
								/>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent />}
								/>
								<defs>
									<linearGradient
										id='fillDesktop'
										x1='0'
										y1='0'
										x2='0'
										y2='1'
									>
										<stop
											offset='5%'
											stopColor='var(--color-desktop)'
											stopOpacity={0.8}
										/>
										<stop
											offset='95%'
											stopColor='var(--color-desktop)'
											stopOpacity={0.1}
										/>
									</linearGradient>
									<linearGradient
										id='fillMobile'
										x1='0'
										y1='0'
										x2='0'
										y2='1'
									>
										<stop
											offset='5%'
											stopColor='var(--color-mobile)'
											stopOpacity={0.8}
										/>
										<stop
											offset='95%'
											stopColor='var(--color-mobile)'
											stopOpacity={0.1}
										/>
									</linearGradient>
								</defs>
								<Area
									dataKey='mobile'
									type='natural'
									fill='url(#fillMobile)'
									fillOpacity={0.4}
									stroke='var(--color-mobile)'
									stackId='a'
								/>
								<Area
									dataKey='desktop'
									type='natural'
									fill='url(#fillDesktop)'
									fillOpacity={0.4}
									stroke='var(--color-desktop)'
									stackId='a'
								/>
							</AreaChart>
						</ChartContainer>
					</CardContent>
					<CardFooter>
						<div className='flex w-full items-start gap-2 text-sm'>
							<div className='grid gap-2'>
								<div className='flex items-center gap-2 font-medium leading-none'>
									For every 5 raports one is solved
									<TrendingUp className='h-4 w-4' />
								</div>
								<div className='flex items-center gap-2 leading-none text-muted-foreground'>
									January - June 2024
								</div>
							</div>
						</div>
					</CardFooter>
				</Card>

				<div className='grid gap-4 md:gap-8 grid-cols-2 '>
					{/* Current Reports */}
					<Card>
						<CardHeader>
							<CardTitle>Current Reports</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Report ID</TableHead>
										<TableHead>Type</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>#12345</TableCell>
										<TableCell>Air Quality</TableCell>
										<TableCell>Open</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>#12346</TableCell>
										<TableCell>Water Quality</TableCell>
										<TableCell>Solved</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>

					{/* Previous Reports */}
					<Card>
						<CardHeader>
							<CardTitle>Previous Reports</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Report ID</TableHead>
										<TableHead>Type</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>#12340</TableCell>
										<TableCell>Greenery Index</TableCell>
										<TableCell>Solved</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
