import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [formData, setFormData] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setFormData({});
    setIsExpanded(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const pageMap = {
      flights: '/flights',
      hotels: '/hotels',
      flightHotels: '/flighthotels',
      packages: '/packages',
    };

    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `${pageMap[activeTab]}?${queryString}`;
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const airportOptions = [
      { value: 'JFK', label: 'John F. Kennedy International Airport' },
      { value: 'LAX', label: 'Los Angeles International Airport' },
      { value: 'ORD', label: "O'Hare International Airport" },
      { value: 'ATL', label: 'Hartsfield-Jackson Atlanta International Airport' },
      { value: 'DFW', label: 'Dallas/Fort Worth International Airport' },
      { value: 'DEN', label: 'Denver International Airport' },
      { value: 'SFO', label: 'San Francisco International Airport' },
      { value: 'SEA', label: 'Seattle-Tacoma International Airport' },
      { value: 'LAS', label: 'McCarran International Airport' },
      { value: 'MCO', label: 'Orlando International Airport' },
      { value: 'CLT', label: 'Charlotte Douglas International Airport' },
      { value: 'PHX', label: 'Phoenix Sky Harbor International Airport' },
      { value: 'IAH', label: 'George Bush Intercontinental Airport' },
      { value: 'MIA', label: 'Miami International Airport' },
      { value: 'BOS', label: 'Logan International Airport' },
      { value: 'MSP', label: 'Minneapolis-Saint Paul International Airport' },
      { value: 'DTW', label: 'Detroit Metropolitan Airport' },
      { value: 'PHL', label: 'Philadelphia International Airport' },
      { value: 'LGA', label: 'LaGuardia Airport' },
      { value: 'FLL', label: 'Fort Lauderdale-Hollywood International Airport' },
      { value: 'BWI', label: 'Baltimore/Washington International Thurgood Marshall Airport' },
      { value: 'SLC', label: 'Salt Lake City International Airport' },
      { value: 'SAN', label: 'San Diego International Airport' },
      { value: 'IAD', label: 'Washington Dulles International Airport' },
      { value: 'DCA', label: 'Ronald Reagan Washington National Airport' },
      { value: 'MDW', label: 'Chicago Midway International Airport' },
      { value: 'TPA', label: 'Tampa International Airport' },
      { value: 'PDX', label: 'Portland International Airport' },
      { value: 'HNL', label: 'Daniel K. Inouye International Airport' },
      { value: 'STL', label: 'St. Louis Lambert International Airport' },
      { value: 'BNA', label: 'Nashville International Airport' },
      { value: 'AUS', label: 'Austin-Bergstrom International Airport' },
      { value: 'MCI', label: 'Kansas City International Airport' },
      { value: 'RDU', label: 'Raleigh-Durham International Airport' },
      { value: 'SJC', label: 'San Jose International Airport' },
      { value: 'OAK', label: 'Oakland International Airport' },
      { value: 'MSY', label: 'Louis Armstrong New Orleans International Airport' },
      { value: 'CLE', label: 'Cleveland Hopkins International Airport' },
      { value: 'SMF', label: 'Sacramento International Airport' },
      { value: 'SAT', label: 'San Antonio International Airport' },
      { value: 'PIT', label: 'Pittsburgh International Airport' },
      { value: 'IND', label: 'Indianapolis International Airport' },
      { value: 'CVG', label: 'Cincinnati/Northern Kentucky International Airport' },
      { value: 'MKE', label: 'Milwaukee Mitchell International Airport' },
      { value: 'JAX', label: 'Jacksonville International Airport' },
      { value: 'OMA', label: 'Eppley Airfield' },
      { value: 'OKC', label: 'Will Rogers World Airport' },
      { value: 'RIC', label: 'Richmond International Airport' },
      { value: 'SNA', label: 'John Wayne Airport' },
      { value: 'BUF', label: 'Buffalo Niagara International Airport' },
      { value: 'ABQ', label: 'Albuquerque International Sunport' },
      { value: 'ONT', label: 'Ontario International Airport' },
      { value: 'BHM', label: 'Birmingham-Shuttlesworth International Airport' },
      { value: 'PBI', label: 'Palm Beach International Airport' },
      { value: 'MEM', label: 'Memphis International Airport' },
      { value: 'BOI', label: 'Boise Airport' },
      { value: 'TUL', label: 'Tulsa International Airport' },
      { value: 'ANC', label: 'Ted Stevens Anchorage International Airport' },
      { value: 'RSW', label: 'Southwest Florida International Airport' },
      { value: 'CHS', label: 'Charleston International Airport' },
      { value: 'GSP', label: 'Greenville-Spartanburg International Airport' },
      { value: 'SDF', label: 'Louisville International Airport' },
      { value: 'ELP', label: 'El Paso International Airport' },
      { value: 'BDL', label: 'Bradley International Airport' },
      { value: 'TUS', label: 'Tucson International Airport' },
      { value: 'RNO', label: 'Reno-Tahoe International Airport' },
      { value: 'LIT', label: 'Bill and Hillary Clinton National Airport' },
      { value: 'PSP', label: 'Palm Springs International Airport' },
      { value: 'GEG', label: 'Spokane International Airport' },
      { value: 'BTV', label: 'Burlington International Airport' },
      { value: 'PWM', label: 'Portland International Jetport' },
      { value: 'SYR', label: 'Syracuse Hancock International Airport' },
      { value: 'ALB', label: 'Albany International Airport' },
      { value: 'GRR', label: 'Gerald R. Ford International Airport' },
      { value: 'PVD', label: 'T. F. Green Airport' },
      { value: 'SAV', label: 'Savannah/Hilton Head International Airport' },
      { value: 'GSO', label: 'Piedmont Triad International Airport' },
      { value: 'MYR', label: 'Myrtle Beach International Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'FAT', label: 'Fresno Yosemite International Airport' },
      { value: 'COS', label: 'Colorado Springs Airport' },
      { value: 'DAY', label: 'Dayton International Airport' },
      { value: 'LGB', label: 'Long Beach Airport' },
      { value: 'MSN', label: 'Dane County Regional Airport' },
      { value: 'ISP', label: 'Long Island MacArthur Airport' },
      { value: 'FSD', label: 'Sioux Falls Regional Airport' },
      { value: 'CAK', label: 'Akron-Canton Airport' },
      { value: 'XNA', label: 'Northwest Arkansas National Airport' },
      { value: 'ICT', label: 'Wichita Dwight D. Eisenhower National Airport' },
      { value: 'LFT', label: 'Lafayette Regional Airport' },
      { value: 'HSV', label: 'Huntsville International Airport' },
      { value: 'MHT', label: 'Manchester-Boston Regional Airport' },
      { value: 'BTR', label: 'Baton Rouge Metropolitan Airport' },
      { value: 'ROA', label: 'Roanoke-Blacksburg Regional Airport' },
      { value: 'FWA', label: 'Fort Wayne International Airport' },
      { value: 'GNV', label: 'Gainesville Regional Airport' },
      { value: 'CRW', label: 'Yeager Airport' },
      { value: 'LBB', label: 'Lubbock Preston Smith International Airport' },
      { value: 'MOB', label: 'Mobile Regional Airport' },
      { value: 'SHV', label: 'Shreveport Regional Airport' },
      { value: 'EVV', label: 'Evansville Regional Airport' },
      { value: 'FAR', label: 'Hector International Airport' },
      { value: 'TYS', label: 'McGhee Tyson Airport' },
      { value: 'AVL', label: 'Asheville Regional Airport' },
      { value: 'BIS', label: 'Bismarck Municipal Airport' },
      { value: 'PIA', label: 'General Wayne A. Downing Peoria International Airport' },
      { value: 'MLI', label: 'Quad City International Airport' },
      { value: 'MRY', label: 'Monterey Regional Airport' },
      { value: 'SBP', label: 'San Luis Obispo County Regional Airport' },
      { value: 'IDA', label: 'Idaho Falls Regional Airport' },
      { value: 'RAP', label: 'Rapid City Regional Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'FNT', label: 'Bishop International Airport' },
      { value: 'GRB', label: 'Green Bay Austin Straubel International Airport' },
      { value: 'MFE', label: 'McAllen Miller International Airport' },
      { value: 'LNK', label: 'Lincoln Airport' },
      { value: 'SGF', label: 'Springfield-Branson National Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'BGR', label: 'Bangor International Airport' },
      { value: 'MFR', label: 'Rogue Valley International-Medford Airport' },
      { value: 'PSC', label: 'Tri-Cities Airport' },
      { value: 'RDM', label: 'Redmond Municipal Airport' },
      { value: 'EUG', label: 'Eugene Airport' },
      { value: 'ACY', label: 'Atlantic City International Airport' },
      { value: 'SBA', label: 'Santa Barbara Municipal Airport' },
      { value: 'BLI', label: 'Bellingham International Airport' },
      { value: 'ECP', label: 'Northwest Florida Beaches International Airport' },
      { value: 'TLH', label: 'Tallahassee International Airport' },
      { value: 'GPT', label: 'Gulfport-Biloxi International Airport' },
      { value: 'AZO', label: 'Kalamazoo/Battle Creek International Airport' },
      { value: 'MGM', label: 'Montgomery Regional Airport' },
      { value: 'TRI', label: 'Tri-Cities Regional Airport' },
      { value: 'FAY', label: 'Fayetteville Regional Airport' },
      { value: 'LCH', label: 'Lake Charles Regional Airport' },
      { value: 'CSG', label: 'Columbus Metropolitan Airport' },
      { value: 'LAW', label: 'Lawton-Fort Sill Regional Airport' },
      { value: 'SWF', label: 'Stewart International Airport' },
      { value: 'HRL', label: 'Valley International Airport' },
      { value: 'MBS', label: 'MBS International Airport' },
      { value: 'BFL', label: 'Meadows Field Airport' },
      { value: 'SJT', label: 'San Angelo Regional Airport' },
      { value: 'TXK', label: 'Texarkana Regional Airport' },
      { value: 'ACT', label: 'Waco Regional Airport' },
      { value: 'ROW', label: 'Roswell International Air Center' },
      { value: 'LAR', label: 'Laramie Regional Airport' },
      { value: 'CPR', label: 'Casper-Natrona County International Airport' },
      { value: 'COD', label: 'Yellowstone Regional Airport' },
      { value: 'JAC', label: 'Jackson Hole Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'JFK', label: 'John F. Kennedy International Airport' },
      { value: 'LAX', label: 'Los Angeles International Airport' },
      { value: 'ORD', label: "O'Hare International Airport" },
      { value: 'ATL', label: 'Hartsfield-Jackson Atlanta International Airport' },
      { value: 'DFW', label: 'Dallas/Fort Worth International Airport' },
      { value: 'DEN', label: 'Denver International Airport' },
      { value: 'SFO', label: 'San Francisco International Airport' },
      { value: 'SEA', label: 'Seattle-Tacoma International Airport' },
      { value: 'LAS', label: 'McCarran International Airport' },
      { value: 'MCO', label: 'Orlando International Airport' },
      { value: 'CLT', label: 'Charlotte Douglas International Airport' },
      { value: 'PHX', label: 'Phoenix Sky Harbor International Airport' },
      { value: 'IAH', label: 'George Bush Intercontinental Airport' },
      { value: 'MIA', label: 'Miami International Airport' },
      { value: 'BOS', label: 'Logan International Airport' },
      { value: 'MSP', label: 'Minneapolis-Saint Paul International Airport' },
      { value: 'DTW', label: 'Detroit Metropolitan Airport' },
      { value: 'PHL', label: 'Philadelphia International Airport' },
      { value: 'LGA', label: 'LaGuardia Airport' },
      { value: 'FLL', label: 'Fort Lauderdale-Hollywood International Airport' },
      { value: 'BWI', label: 'Baltimore/Washington International Thurgood Marshall Airport' },
      { value: 'SLC', label: 'Salt Lake City International Airport' },
      { value: 'SAN', label: 'San Diego International Airport' },
      { value: 'IAD', label: 'Washington Dulles International Airport' },
      { value: 'DCA', label: 'Ronald Reagan Washington National Airport' },
      { value: 'MDW', label: 'Chicago Midway International Airport' },
      { value: 'TPA', label: 'Tampa International Airport' },
      { value: 'PDX', label: 'Portland International Airport' },
      { value: 'HNL', label: 'Daniel K. Inouye International Airport' },
      { value: 'STL', label: 'St. Louis Lambert International Airport' },
      { value: 'BNA', label: 'Nashville International Airport' },
      { value: 'AUS', label: 'Austin-Bergstrom International Airport' },
      { value: 'MCI', label: 'Kansas City International Airport' },
      { value: 'RDU', label: 'Raleigh-Durham International Airport' },
      { value: 'SJC', label: 'San Jose International Airport' },
      { value: 'OAK', label: 'Oakland International Airport' },
      { value: 'MSY', label: 'Louis Armstrong New Orleans International Airport' },
      { value: 'CLE', label: 'Cleveland Hopkins International Airport' },
      { value: 'SMF', label: 'Sacramento International Airport' },
      { value: 'SAT', label: 'San Antonio International Airport' },
      { value: 'PIT', label: 'Pittsburgh International Airport' },
      { value: 'IND', label: 'Indianapolis International Airport' },
      { value: 'CVG', label: 'Cincinnati/Northern Kentucky International Airport' },
      { value: 'MKE', label: 'Milwaukee Mitchell International Airport' },
      { value: 'JAX', label: 'Jacksonville International Airport' },
      { value: 'OMA', label: 'Eppley Airfield' },
      { value: 'OKC', label: 'Will Rogers World Airport' },
      { value: 'RIC', label: 'Richmond International Airport' },
      { value: 'SNA', label: 'John Wayne Airport' },
      { value: 'BUF', label: 'Buffalo Niagara International Airport' },
      { value: 'ABQ', label: 'Albuquerque International Sunport' },
      { value: 'ONT', label: 'Ontario International Airport' },
      { value: 'BHM', label: 'Birmingham-Shuttlesworth International Airport' },
      { value: 'PBI', label: 'Palm Beach International Airport' },
      { value: 'MEM', label: 'Memphis International Airport' },
      { value: 'BOI', label: 'Boise Airport' },
      { value: 'TUL', label: 'Tulsa International Airport' },
      { value: 'ANC', label: 'Ted Stevens Anchorage International Airport' },
      { value: 'RSW', label: 'Southwest Florida International Airport' },
      { value: 'CHS', label: 'Charleston International Airport' },
      { value: 'GSP', label: 'Greenville-Spartanburg International Airport' },
      { value: 'SDF', label: 'Louisville International Airport' },
      { value: 'ELP', label: 'El Paso International Airport' },
      { value: 'BDL', label: 'Bradley International Airport' },
      { value: 'TUS', label: 'Tucson International Airport' },
      { value: 'RNO', label: 'Reno-Tahoe International Airport' },
      { value: 'LIT', label: 'Bill and Hillary Clinton National Airport' },
      { value: 'PSP', label: 'Palm Springs International Airport' },
      { value: 'GEG', label: 'Spokane International Airport' },
      { value: 'BTV', label: 'Burlington International Airport' },
      { value: 'PWM', label: 'Portland International Jetport' },
      { value: 'SYR', label: 'Syracuse Hancock International Airport' },
      { value: 'ALB', label: 'Albany International Airport' },
      { value: 'GRR', label: 'Gerald R. Ford International Airport' },
      { value: 'PVD', label: 'T. F. Green Airport' },
      { value: 'SAV', label: 'Savannah/Hilton Head International Airport' },
      { value: 'GSO', label: 'Piedmont Triad International Airport' },
      { value: 'MYR', label: 'Myrtle Beach International Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'FAT', label: 'Fresno Yosemite International Airport' },
      { value: 'COS', label: 'Colorado Springs Airport' },
      { value: 'DAY', label: 'Dayton International Airport' },
      { value: 'LGB', label: 'Long Beach Airport' },
      { value: 'MSN', label: 'Dane County Regional Airport' },
      { value: 'ISP', label: 'Long Island MacArthur Airport' },
      { value: 'FSD', label: 'Sioux Falls Regional Airport' },
      { value: 'CAK', label: 'Akron-Canton Airport' },
      { value: 'XNA', label: 'Northwest Arkansas National Airport' },
      { value: 'ICT', label: 'Wichita Dwight D. Eisenhower National Airport' },
      { value: 'LFT', label: 'Lafayette Regional Airport' },
      { value: 'HSV', label: 'Huntsville International Airport' },
      { value: 'MHT', label: 'Manchester-Boston Regional Airport' },
      { value: 'BTR', label: 'Baton Rouge Metropolitan Airport' },
      { value: 'ROA', label: 'Roanoke-Blacksburg Regional Airport' },
      { value: 'FWA', label: 'Fort Wayne International Airport' },
      { value: 'GNV', label: 'Gainesville Regional Airport' },
      { value: 'CRW', label: 'Yeager Airport' },
      { value: 'LBB', label: 'Lubbock Preston Smith International Airport' },
      { value: 'MOB', label: 'Mobile Regional Airport' },
      { value: 'SHV', label: 'Shreveport Regional Airport' },
      { value: 'EVV', label: 'Evansville Regional Airport' },
      { value: 'FAR', label: 'Hector International Airport' },
      { value: 'TYS', label: 'McGhee Tyson Airport' },
      { value: 'AVL', label: 'Asheville Regional Airport' },
      { value: 'BIS', label: 'Bismarck Municipal Airport' },
      { value: 'PIA', label: 'General Wayne A. Downing Peoria International Airport' },
      { value: 'MLI', label: 'Quad City International Airport' },
      { value: 'MRY', label: 'Monterey Regional Airport' },
      { value: 'SBP', label: 'San Luis Obispo County Regional Airport' },
      { value: 'IDA', label: 'Idaho Falls Regional Airport' },
      { value: 'RAP', label: 'Rapid City Regional Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'FNT', label: 'Bishop International Airport' },
      { value: 'GRB', label: 'Green Bay Austin Straubel International Airport' },
      { value: 'MFE', label: 'McAllen Miller International Airport' },
      { value: 'LNK', label: 'Lincoln Airport' },
      { value: 'SGF', label: 'Springfield-Branson National Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'BGR', label: 'Bangor International Airport' },
      { value: 'MFR', label: 'Rogue Valley International-Medford Airport' },
      { value: 'PSC', label: 'Tri-Cities Airport' },
      { value: 'RDM', label: 'Redmond Municipal Airport' },
      { value: 'EUG', label: 'Eugene Airport' },
      { value: 'ACY', label: 'Atlantic City International Airport' },
      { value: 'SBA', label: 'Santa Barbara Municipal Airport' },
      { value: 'BLI', label: 'Bellingham International Airport' },
      { value: 'ECP', label: 'Northwest Florida Beaches International Airport' },
      { value: 'TLH', label: 'Tallahassee International Airport' },
      { value: 'GPT', label: 'Gulfport-Biloxi International Airport' },
      { value: 'AZO', label: 'Kalamazoo/Battle Creek International Airport' },
      { value: 'MGM', label: 'Montgomery Regional Airport' },
      { value: 'TRI', label: 'Tri-Cities Regional Airport' },
      { value: 'FAY', label: 'Fayetteville Regional Airport' },
      { value: 'LCH', label: 'Lake Charles Regional Airport' },
      { value: 'CSG', label: 'Columbus Metropolitan Airport' },
      { value: 'LAW', label: 'Lawton-Fort Sill Regional Airport' },
      { value: 'SWF', label: 'Stewart International Airport' },
      { value: 'HRL', label: 'Valley International Airport' },
      { value: 'MBS', label: 'MBS International Airport' },
      { value: 'BFL', label: 'Meadows Field Airport' },
      { value: 'SJT', label: 'San Angelo Regional Airport' },
      { value: 'TXK', label: 'Texarkana Regional Airport' },
      { value: 'ACT', label: 'Waco Regional Airport' },
      { value: 'ROW', label: 'Roswell International Air Center' },
      { value: 'LAR', label: 'Laramie Regional Airport' },
      { value: 'CPR', label: 'Casper-Natrona County International Airport' },
      { value: 'COD', label: 'Yellowstone Regional Airport' },
      { value: 'JAC', label: 'Jackson Hole Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },
      { value: 'MSO', label: 'Missoula International Airport' },
      { value: 'BIL', label: 'Billings Logan International Airport' },
      { value: 'GTF', label: 'Great Falls International Airport' },
      { value: 'FCA', label: 'Glacier Park International Airport' },
      { value: 'BTM', label: 'Bert Mooney Airport' },
      { value: 'BZN', label: 'Bozeman Yellowstone International Airport' },
      { value: 'HLN', label: 'Helena Regional Airport' },

    // Add more options as needed
  ];

  const renderFlightFields = () => (
    <>
      <select
        className="custom-select"
        name="flyingFrom"
        onChange={(e) => setFormData({ ...formData, flyingFrom: e.target.value })}
        onFocus={handleExpand}
      >
        <option value="">Flying From</option>
        {airportOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        className="custom-select"
        name="flyingTo"
        onChange={(e) => setFormData({ ...formData, flyingTo: e.target.value })}
        onFocus={handleExpand}
      >
        <option value="">Flying To</option>
        {airportOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input type="date" name="departureDate" onChange={handleInputChange} />
      <input type="date" name="returnDate" onChange={handleInputChange} />
      {isExpanded && (
        <>
          <input
            type="text"
            name="airline"
            placeholder="Airline"
            onChange={handleInputChange}
          />
          <select name="class" onChange={handleInputChange}>
            <option value="">Class</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
          <select name="passengers" onChange={handleInputChange}>
            <option value="">No of Passengers</option>
            {[...Array(9).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Passenger{num > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );

  const renderHotelFields = () => (
    <>
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        onChange={handleInputChange}
        onFocus={handleExpand}
      />
      <input type="date" name="checkInDate" onChange={handleInputChange} />
      <input type="date" name="checkOutDate" onChange={handleInputChange} />
      {isExpanded && (
        <>
          <select name="rooms" onChange={handleInputChange}>
            <option value="">No of Rooms</option>
            {[...Array(9).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Room{num > 0 ? 's' : ''}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="guestsAge"
            placeholder="Guests Age"
            onChange={handleInputChange}
          />
        </>
      )}
    </>
  );

  const renderFlightHotelFields = () => (
    <>
      {renderFlightFields()}
      {renderHotelFields()}
    </>
  );

  const renderPackageFields = () => (
    <>
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        onChange={handleInputChange}
      />
      <input type="date" name="startDate" onChange={handleInputChange} />
      <input type="date" name="endDate" onChange={handleInputChange} />
      <select name="numberOfPeople" onChange={handleInputChange}>
        <option value="">No of People</option>
        {[...Array(9).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1} Person{num > 0 ? 's' : ''}
          </option>
        ))}
      </select>
    </>
  );

  const renderFormFields = () => {
    switch (activeTab) {
      case 'flights':
        return renderFlightFields();
      case 'hotels':
        return renderHotelFields();
      case 'flightHotels':
        return renderFlightHotelFields();
      case 'packages':
        return renderPackageFields();
      default:
        return null;
    }
  };

  return (
    <div className="search-bar">
      <div className="tabs">
        <button
          className={activeTab === 'flights' ? 'active' : ''}
          onClick={() => handleTabClick('flights')}
        >
          Flights
        </button>
        <button
          className={activeTab === 'hotels' ? 'active' : ''}
          onClick={() => handleTabClick('hotels')}
        >
          Hotels
        </button>
        <button
          className={activeTab === 'flightHotels' ? 'active' : ''}
          onClick={() => handleTabClick('flightHotels')}
        >
          Flight & Hotels
        </button>
        <button
          className={activeTab === 'packages' ? 'active' : ''}
          onClick={() => handleTabClick('packages')}
        >
          Packages
        </button>
      </div>
      <div className="form-fields">{renderFormFields()}</div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;