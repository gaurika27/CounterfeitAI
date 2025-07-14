// import React, { useState } from 'react';
// import { AlertTriangle, TrendingUp, MapPin } from 'lucide-react';

// interface WorldMapProps {
//   worldMapData: any[];
//   detectionData: any[];
// }

// const WorldMap = ({ worldMapData, detectionData }: WorldMapProps) => {
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
//   const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

//   const getCountryColor = (countryName: string) => {
//     const country = worldMapData.find(c => c.country === countryName);
//     if (!country) return '#374151'; // Default gray
    
//     if (country.risk > 80) return '#ef4444'; // Red
//     if (country.risk > 60) return '#f59e0b'; // Orange
//     if (country.risk > 40) return '#eab308'; // Yellow
//     return '#10b981'; // Green
//   };

//   const getCountryData = (countryName: string) => {
//     return worldMapData.find(c => c.country === countryName);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Interactive World Map */}
//       <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-lg font-semibold text-white">Global Counterfeit Risk Map</h3>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//               <span className="text-sm text-gray-300">High Risk (80%+)</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <span className="text-sm text-gray-300">Medium Risk (40-80%)</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <span className="text-sm text-gray-300">Low Risk (&lt;40%)</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* World Map SVG */}
//           <div className="lg:col-span-2">
//             <div className="bg-slate-800 rounded-lg p-4 relative overflow-hidden">
//               <svg
//                 viewBox="0 0 1000 500"
//                 className="w-full h-80"
//                 style={{ background: '#1e293b' }}
//               >
//                 {/* North America */}
//                 <path
//                   d="M150 80 L280 70 L320 90 L350 120 L340 160 L300 180 L250 190 L200 185 L160 170 L140 140 L130 110 Z"
//                   fill="#10b981"
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('USA')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('USA')}
//                 />
                
//                 {/* South America */}
//                 <path
//                   d="M280 220 L320 210 L360 230 L380 280 L370 340 L340 360 L310 350 L290 320 L270 280 Z"
//                   fill="#10b981"
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Brazil')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Brazil')}
//                 />

//                 {/* Europe */}
//                 <path
//                   d="M450 90 L520 85 L540 110 L530 140 L500 150 L470 145 L455 125 Z"
//                   fill="#10b981"
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Europe')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Europe')}
//                 />

//                 {/* Africa */}
//                 <path
//                   d="M480 160 L540 155 L560 180 L570 220 L560 280 L540 320 L510 330 L480 320 L460 280 L465 220 Z"
//                   fill="#10b981"
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Africa')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Africa')}
//                 />

//                 {/* Russia */}
//                 <path
//                   d="M550 70 L750 65 L780 90 L770 120 L740 130 L680 125 L620 115 L580 105 L560 85 Z"
//                   fill="#374151"
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Russia')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Russia')}
//                 />

//                 {/* China */}
//                 <path
//                   d="M680 140 L750 135 L780 155 L770 185 L740 195 L700 190 L680 170 Z"
//                   fill={getCountryColor('China')}
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('China')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('China')}
//                 />

//                 {/* India */}
//                 <path
//                   d="M620 180 L680 175 L700 200 L690 230 L660 240 L630 235 L610 210 Z"
//                   fill={getCountryColor('India')}
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('India')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('India')}
//                 />

//                 {/* Pakistan */}
//                 <path
//                   d="M580 180 L620 175 L630 195 L615 210 L590 205 L575 190 Z"
//                   fill={getCountryColor('Pakistan')}
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Pakistan')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Pakistan')}
//                 />

//                 {/* Bangladesh */}
//                 <path
//                   d="M650 200 L670 195 L675 210 L665 220 L650 215 Z"
//                   fill={getCountryColor('Bangladesh')}
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Bangladesh')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Bangladesh')}
//                 />

//                 {/* Vietnam */}
//                 <path
//                   d="M720 210 L740 205 L750 230 L745 250 L730 255 L715 240 Z"
//                   fill={getCountryColor('Vietnam')}
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Vietnam')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Vietnam')}
//                 />

//                 {/* Australia */}
//                 <path
//                   d="M750 320 L820 315 L850 340 L840 370 L800 375 L760 370 L745 350 Z"
//                   fill="#10b981"
//                   stroke="#64748b"
//                   strokeWidth="1"
//                   className="cursor-pointer hover:brightness-110 transition-all duration-200"
//                   onMouseEnter={() => setHoveredCountry('Australia')}
//                   onMouseLeave={() => setHoveredCountry(null)}
//                   onClick={() => setSelectedCountry('Australia')}
//                 />

//                 {/* Risk Indicators */}
//                 {worldMapData.map((country) => {
//                   const positions: { [key: string]: { x: number; y: number } } = {
//                     'China': { x: 720, y: 165 },
//                     'India': { x: 655, y: 205 },
//                     'Pakistan': { x: 600, y: 190 },
//                     'Bangladesh': { x: 662, y: 207 },
//                     'Vietnam': { x: 732, y: 230 }
//                   };
                  
//                   const pos = positions[country.country];
//                   if (!pos) return null;
                  
//                   return (
//                     <g key={country.country}>
//                       <circle
//                         cx={pos.x}
//                         cy={pos.y}
//                         r="8"
//                         fill={country.risk > 80 ? '#ef4444' : country.risk > 60 ? '#f59e0b' : '#10b981'}
//                         stroke="#ffffff"
//                         strokeWidth="2"
//                         className="animate-pulse cursor-pointer"
//                         onClick={() => setSelectedCountry(country.country)}
//                       />
//                       <text
//                         x={pos.x}
//                         y={pos.y + 4}
//                         textAnchor="middle"
//                         className="text-xs fill-white font-bold pointer-events-none"
//                       >
//                         {country.risk}%
//                       </text>
//                       <text
//                         x={pos.x}
//                         y={pos.y - 15}
//                         textAnchor="middle"
//                         className="text-xs fill-purple-300 font-medium pointer-events-none"
//                       >
//                         {country.cases}
//                       </text>
//                     </g>
//                   );
//                 })}

//                 {/* Hover tooltip */}
//                 {hoveredCountry && (
//                   <g>
//                     <rect
//                       x="20"
//                       y="20"
//                       width="200"
//                       height="60"
//                       fill="#1f2937"
//                       stroke="#7c3aed"
//                       strokeWidth="1"
//                       rx="8"
//                       className="opacity-90"
//                     />
//                     <text x="30" y="40" className="text-sm fill-white font-medium">
//                       {hoveredCountry}
//                     </text>
//                     <text x="30" y="55" className="text-xs fill-purple-300">
//                       Click for detailed analysis
//                     </text>
//                   </g>
//                 )}
//               </svg>
//             </div>
//           </div>

//           {/* Country Details Panel */}
//           <div className="space-y-4">
//             <h4 className="text-md font-medium text-purple-300 flex items-center">
//               <MapPin className="w-4 h-4 mr-2" />
//               {selectedCountry ? `${selectedCountry} Details` : 'High Risk Regions'}
//             </h4>
            
//             {selectedCountry ? (
//               <div className="bg-gray-800/50 rounded-lg p-4">
//                 {(() => {
//                   const countryData = getCountryData(selectedCountry);
//                   if (!countryData) {
//                     return (
//                       <div className="text-center py-8">
//                         <p className="text-gray-400">No data available for {selectedCountry}</p>
//                       </div>
//                     );
//                   }
                  
//                   return (
//                     <>
//                       <div className="flex items-center justify-between mb-4">
//                         <h5 className="text-white font-bold text-lg">{countryData.country}</h5>
//                         <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//                           countryData.risk > 80 ? 'bg-red-500/20 text-red-400' :
//                           countryData.risk > 60 ? 'bg-yellow-500/20 text-yellow-400' :
//                           'bg-green-500/20 text-green-400'
//                         }`}>
//                           {countryData.risk}% Risk
//                         </div>
//                       </div>
                      
//                       <div className="space-y-3">
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Total Cases:</span>
//                           <span className="text-white font-medium">{countryData.cases}</span>
//                         </div>
                        
//                         <div className="w-full bg-gray-700 rounded-full h-3">
//                           <div 
//                             className={`h-3 rounded-full transition-all duration-500 ${
//                               countryData.risk > 80 ? 'bg-red-500' :
//                               countryData.risk > 60 ? 'bg-yellow-500' :
//                               'bg-green-500'
//                             }`}
//                             style={{ width: `${countryData.risk}%` }}
//                           ></div>
//                         </div>
                        
//                         <div className="pt-2">
//                           <p className="text-sm text-gray-300 mb-2">Risk Factors:</p>
//                           <div className="space-y-1">
//                             <div className="flex items-center text-xs">
//                               <AlertTriangle className="w-3 h-3 text-yellow-400 mr-2" />
//                               <span className="text-gray-300">High counterfeit production</span>
//                             </div>
//                             <div className="flex items-center text-xs">
//                               <TrendingUp className="w-3 h-3 text-red-400 mr-2" />
//                               <span className="text-gray-300">Increasing trend detected</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })()}
//               </div>
//             ) : (
//               <div className="space-y-3">
//                 {worldMapData.map(country => (
//                   <div 
//                     key={country.country} 
//                     className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
//                     onClick={() => setSelectedCountry(country.country)}
//                   >
//                     <div>
//                       <p className="text-white font-medium">{country.country}</p>
//                       <p className="text-sm text-gray-400">{country.cases} cases detected</p>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <div className="w-16 bg-gray-700 rounded-full h-2">
//                         <div 
//                           className={`h-2 rounded-full transition-all duration-300 ${
//                             country.risk > 80 ? 'bg-red-500' : 
//                             country.risk > 60 ? 'bg-yellow-500' : 'bg-green-500'
//                           }`}
//                           style={{ width: `${country.risk}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-white font-medium w-12 text-right">{country.risk}%</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Platform Analytics */}
//       <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
//         <h3 className="text-lg font-semibold text-white mb-4">Platform Risk Analytics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {detectionData.map(platform => (
//             <div key={platform.platform} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
//               <div className="flex items-center justify-between mb-2">
//                 <h5 className="text-white font-medium">{platform.platform}</h5>
//                 <span className={`text-sm font-medium ${
//                   platform.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'
//                 }`}>
//                   {platform.trend}
//                 </span>
//               </div>
//               <div className="mb-3">
//                 <div className="flex justify-between text-sm mb-1">
//                   <span className="text-gray-400">Risk Level</span>
//                   <span className="text-white">{platform.percentage}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2">
//                   <div 
//                     className={`h-2 rounded-full transition-all duration-500 ${
//                       platform.percentage > 40 ? 'bg-red-500' : 
//                       platform.percentage > 20 ? 'bg-yellow-500' : 'bg-green-500'
//                     }`}
//                     style={{ width: `${platform.percentage}%` }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-end justify-between">
//                 <div>
//                   <p className="text-2xl font-bold text-white">{platform.count}</p>
//                   <p className="text-sm text-gray-400">Total cases</p>
//                 </div>
//                 <div className={`p-2 rounded-lg ${
//                   platform.percentage > 40 ? 'bg-red-500/20' : 
//                   platform.percentage > 20 ? 'bg-yellow-500/20' : 'bg-green-500/20'
//                 }`}>
//                   <AlertTriangle className={`w-4 h-4 ${
//                     platform.percentage > 40 ? 'text-red-400' : 
//                     platform.percentage > 20 ? 'text-yellow-400' : 'text-green-400'
//                   }`} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorldMap;

// import React, { useState } from 'react';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import { AlertTriangle, TrendingUp, MapPin } from 'lucide-react';

// const geoUrl =
//   'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

// interface CountryData {
//   country: string;
//   risk: number;
//   cases: number;
// }

// interface DetectionData {
//   platform: string;
//   percentage: number;
//   count: number;
//   trend: string;
// }

// interface WorldMapProps {
//   worldMapData: CountryData[];
//   detectionData: DetectionData[];
// }

// const WorldMap = ({ worldMapData, detectionData }: WorldMapProps) => {
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
//   const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

//   const getColor = (countryName: string) => {
//     const country = worldMapData.find(
//       c => c.country.toLowerCase() === countryName.toLowerCase()
//     );
//     if (!country) return '#374151'; // default gray
//     if (country.risk > 80) return '#ef4444'; // red
//     if (country.risk >= 40) return '#eab308'; // yellow
//     return '#10b981'; // green
//   };

//   const getCountryData = (name: string) =>
//     worldMapData.find(c => c.country.toLowerCase() === name.toLowerCase());

//   return (
//     <div className="space-y-6">
//       {/* World Map with Real Countries */}
//       <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
//         <h3 className="text-lg font-semibold text-white mb-4">
//           Global Counterfeit Risk Map
//         </h3>
//         <ComposableMap
//           projection="geoEqualEarth"
//           className="rounded-xl overflow-hidden border border-slate-600"
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map(geo => {
//                 const countryName = geo.properties.name;
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     onMouseEnter={() => setHoveredCountry(countryName)}
//                     onMouseLeave={() => setHoveredCountry(null)}
//                     onClick={() => setSelectedCountry(countryName)}
//                     style={{
//                       default: {
//                         fill: getColor(countryName),
//                         outline: 'none',
//                         stroke: '#64748b',
//                         strokeWidth: 0.5,
//                       },
//                       hover: {
//                         fill: '#6366f1',
//                         outline: 'none',
//                       },
//                       pressed: {
//                         fill: '#8b5cf6',
//                         outline: 'none',
//                       },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>

//         {/* Tooltip (optional) */}
//         {hoveredCountry && (
//           <div className="mt-4 text-sm text-white">
//             <strong>{hoveredCountry}</strong> — Click for analysis
//           </div>
//         )}

//         {/* Selected Country Info */}
//         {selectedCountry && (
//           <div className="mt-6 bg-gray-800/40 p-4 rounded-lg">
//             <h4 className="text-purple-300 text-md font-medium flex items-center">
//               <MapPin className="w-4 h-4 mr-2" />
//               {selectedCountry} Details
//             </h4>
//             {(() => {
//               const data = getCountryData(selectedCountry);
//               if (!data) {
//                 return (
//                   <p className="text-gray-400 mt-2">
//                     No data available for {selectedCountry}.
//                   </p>
//                 );
//               }

//               return (
//                 <div className="space-y-3 mt-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-white text-lg font-bold">{data.country}</span>
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm ${
//                         data.risk > 80
//                           ? 'bg-red-500/20 text-red-400'
//                           : data.risk >= 40
//                           ? 'bg-yellow-500/20 text-yellow-400'
//                           : 'bg-green-500/20 text-green-400'
//                       }`}
//                     >
//                       {data.risk}% Risk
//                     </span>
//                   </div>
//                   <p className="text-gray-300">Cases: {data.cases}</p>
//                   <div className="w-full bg-gray-700 rounded-full h-2">
//                     <div
//                       className={`h-2 rounded-full transition-all duration-500 ${
//                         data.risk > 80
//                           ? 'bg-red-500'
//                           : data.risk >= 40
//                           ? 'bg-yellow-500'
//                           : 'bg-green-500'
//                       }`}
//                       style={{ width: `${data.risk}%` }}
//                     ></div>
//                   </div>

//                   {/* Fake Risk Factors (example only) */}
//                   <div className="pt-2">
//                     <p className="text-sm text-gray-300 mb-2">Risk Factors:</p>
//                     <div className="space-y-1">
//                       <div className="flex items-center text-xs">
//                         <AlertTriangle className="w-3 h-3 text-yellow-400 mr-2" />
//                         <span className="text-gray-300">High counterfeit production</span>
//                       </div>
//                       <div className="flex items-center text-xs">
//                         <TrendingUp className="w-3 h-3 text-red-400 mr-2" />
//                         <span className="text-gray-300">Increasing trend detected</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })()}
//           </div>
//         )}
//       </div>

//       {/* Platform Risk Analytics */}
//       <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
//         <h3 className="text-lg font-semibold text-white mb-4">Platform Risk Analytics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {detectionData.map(platform => (
//             <div
//               key={platform.platform}
//               className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h5 className="text-white font-medium">{platform.platform}</h5>
//                 <span
//                   className={`text-sm font-medium ${
//                     platform.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'
//                   }`}
//                 >
//                   {platform.trend}
//                 </span>
//               </div>
//               <div className="mb-3">
//                 <div className="flex justify-between text-sm mb-1">
//                   <span className="text-gray-400">Risk Level</span>
//                   <span className="text-white">{platform.percentage}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full transition-all duration-500 ${
//                       platform.percentage > 40
//                         ? 'bg-red-500'
//                         : platform.percentage > 20
//                         ? 'bg-yellow-500'
//                         : 'bg-green-500'
//                     }`}
//                     style={{ width: `${platform.percentage}%` }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-end justify-between">
//                 <div>
//                   <p className="text-2xl font-bold text-white">{platform.count}</p>
//                   <p className="text-sm text-gray-400">Total cases</p>
//                 </div>
//                 <div
//                   className={`p-2 rounded-lg ${
//                     platform.percentage > 40
//                       ? 'bg-red-500/20'
//                       : platform.percentage > 20
//                       ? 'bg-yellow-500/20'
//                       : 'bg-green-500/20'
//                   }`}
//                 >
//                   <AlertTriangle
//                     className={`w-4 h-4 ${
//                       platform.percentage > 40
//                         ? 'text-red-400'
//                         : platform.percentage > 20
//                         ? 'text-yellow-400'
//                         : 'text-green-400'
//                     }`}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorldMap;

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { MapPin, AlertTriangle, TrendingUp } from 'lucide-react';

// ✅ New working TopoJSON URL
const geoUrl = 'https://unpkg.com/world-atlas@2/countries-110m.json';

interface CountryData {
  country: string;
  risk: number;
  cases: number;
}

interface DetectionData {
  platform: string;
  percentage: number;
  count: number;
  trend: string;
}

interface WorldMapProps {
  worldMapData: CountryData[];
  detectionData: DetectionData[];
}

const WorldMap = ({ worldMapData, detectionData }: WorldMapProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const getColor = (name: string) => {
    const country = worldMapData.find(
      c => c.country.toLowerCase() === name.toLowerCase()
    );
    if (!country) return '#374151';
    if (country.risk > 80) return '#ef4444';
    if (country.risk >= 40) return '#eab308';
    return '#10b981';
  };

  const getData = (name: string) =>
    worldMapData.find(c => c.country.toLowerCase() === name.toLowerCase());

  return (
    <div className="space-y-6">
      {/* ✅ Map Container */}
      <div className="bg-black/30 p-6 rounded-xl border border-purple-500/20">
        <h3 className="text-white text-lg font-semibold mb-4">
          Global Counterfeit Risk Map
        </h3>
        <ComposableMap projection="geoEqualEarth" width={980} height={500}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const name = geo.properties.name;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredCountry(name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onClick={() => setSelectedCountry(name)}
                    style={{
                      default: {
                        fill: getColor(name),
                        stroke: '#64748b',
                        strokeWidth: 0.5,
                      },
                      hover: { fill: '#6366f1' },
                      pressed: { fill: '#8b5cf6' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {hoveredCountry && (
          <div className="mt-2 text-white text-sm">
            <strong>{hoveredCountry}</strong> — Click for details
          </div>
        )}

        {selectedCountry && (
          <div className="mt-6 bg-gray-800/40 p-4 rounded-lg">
            <h4 className="flex items-center text-purple-300 font-medium">
              <MapPin className="w-4 h-4 mr-2" />
              {selectedCountry} Details
            </h4>
            {(() => {
              const data = getData(selectedCountry);
              if (!data) {
                return <p className="text-gray-400 mt-2">No data for {selectedCountry}</p>;
              }
              return (
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-lg">{data.country}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        data.risk > 80
                          ? 'bg-red-500/20 text-red-400'
                          : data.risk >= 40
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {data.risk}% Risk
                    </span>
                  </div>
                  <p className="text-gray-300">Cases: {data.cases}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        data.risk > 80
                          ? 'bg-red-500'
                          : data.risk >= 40
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${data.risk}%` }}
                    />
                  </div>
                  <div className="pt-2 space-y-1">
                    <p className="text-sm text-gray-300">Risk Factors:</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <AlertTriangle className="w-3 h-3 text-yellow-400 mr-2" />
                      High counterfeit production
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <TrendingUp className="w-3 h-3 text-red-400 mr-2" />
                      Increasing trend detected
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* ✅ Platform Analytics (unchanged) */}
      <div className="bg-black/30 p-6 rounded-xl border border-purple-500/20">
        <h3 className="text-white text-lg font-semibold mb-4">
          Platform Risk Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {detectionData.map(platform => (
            <div
              key={platform.platform}
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-white">{platform.platform}</h5>
                <span className={`text-sm font-medium ${platform.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'}`}>
                  {platform.trend}
                </span>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Risk Level</span>
                  <span className="text-white">{platform.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      platform.percentage > 40
                        ? 'bg-red-500'
                        : platform.percentage > 20
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${platform.percentage}%` }}
                  />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white text-2xl font-bold">{platform.count}</p>
                  <p className="text-gray-400 text-sm">Total cases</p>
                </div>
                <div className={`p-2 rounded-lg ${
                  platform.percentage > 40
                    ? 'bg-red-500/20'
                    : platform.percentage > 20
                    ? 'bg-yellow-500/20'
                    : 'bg-green-500/20'
                }`}>
                  <AlertTriangle className={`w-4 h-4 ${
                    platform.percentage > 40
                      ? 'text-red-400'
                      : platform.percentage > 20
                      ? 'text-yellow-400'
                      : 'text-green-400'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;

