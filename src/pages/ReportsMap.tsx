import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import "leaflet/dist/leaflet.css";

// Albania coordinates (approximately center)
const albaniaCenter = [41.3275, 19.8189];

function MapClickHandler({ onClick }) {
	const map = useMapEvents({
		click: (e) => {
			const { lat, lng } = e.latlng;
			onClick(lat, lng);
		},
	});
	return null;
}

export default function ReportsMap() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [incidentData, setIncidentData] = useState({
		latitude: "",
		longitude: "",
		category: "",
		description: "",
	});

	const handleMapClick = (lat, lng) => {
		setIncidentData((prev) => ({
			...prev,
			latitude: lat,
			longitude: lng,
		}));
		setDrawerOpen(true); // Open the drawer when the user clicks on the map
	};

	const handleSelectChange = (value) => {
		setIncidentData((prev) => ({
			...prev,
			category: value,
		}));
	};

	const handleDescriptionChange = (e) => {
		setIncidentData((prev) => ({
			...prev,
			description: e.target.value,
		}));
	};

	return (
		<div className='flex flex-col min-h-screen bg-gray-900 text-white p-4'>
			<h1 className='text-2xl font-semibold mb-6'>
				Incident Reporting Dashboard{" "}
				<span className='text-sm font-normal'>
					-<a href='/'>Go Back Home</a>
				</span>
			</h1>
			<div className='flex-1 relative'>
				{/* Dashboard Section */}
				<div className='bg-gray-800 rounded-lg shadow-md p-6'>
					<h2 className='text-lg mb-4'>Map of Albania</h2>
					<MapContainer
						center={albaniaCenter}
						zoom={8}
						style={{
							height: "75vh",
							width: "100%",
							borderRadius: "8px",
						}}
						className='z-0'
					>
						<TileLayer
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							attribution='&copy; OpenStreetMap contributors'
						/>
						<MapClickHandler onClick={handleMapClick} />
					</MapContainer>
				</div>
			</div>

			<Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
				<SheetContent side='right' className='z-50'>
					{" "}
					<h2 className='text-lg font-medium'>Report Incident</h2>
					<div className='space-y-4 mt-4'>
						<div>
							<Label>Location</Label>
							<p>Lat: {incidentData.latitude}</p>
							<p>Lng: {incidentData.longitude}</p>
						</div>
						<div>
							<Label htmlFor='category'>Category</Label>
							<Select onValueChange={handleSelectChange}>
								<SelectTrigger>
									<SelectValue placeholder='Select category' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='Air Quality'>
										Air Quality
									</SelectItem>
									<SelectItem value='Water Pollution'>
										Water Pollution
									</SelectItem>
									<SelectItem value='Greenery Issue'>
										Greenery Issue
									</SelectItem>
									<SelectItem value='Waste Management'>
										Waste Management
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor='description'>Description</Label>
							<Input
								id='description'
								placeholder='Short description'
								value={incidentData.description}
								onChange={handleDescriptionChange}
							/>
						</div>
					</div>
					<Button className='mt-4'>Submit</Button>
				</SheetContent>
			</Sheet>
		</div>
	);
}
