import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReportsMap from "./pages/ReportsMap";

function App() {
	return (
		<div className='max-w-full mx-auto h-screen'>
			<Router>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/reports-map' element={<ReportsMap />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
