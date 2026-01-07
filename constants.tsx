
import { City, Article, UserStory } from './types';

export const CITIES: City[] = [
  // --- Karnataka Cities ---
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    description: 'The Silicon Valley of India, known for its pleasant weather and lush parks.',
    culture: 'A cosmopolitan blend of traditional Kannada roots and a modern global lifestyle.',
    history: 'Founded by Kempegowda I in 1537, it evolved from a mud fort to a major British cantonment.',
    food: 'MTR Masala Dosa, Filter Coffee, and a thriving craft brewery scene.',
    festivals: 'Karaga Shaktyotsava and Kadalekai Parishe (Groundnut Fair).',
    landmarks: 'Lalbagh, Bangalore Palace, Vidhana Soudha.',
    image: 'https://images.unsplash.com/photo-1596760449248-34861160368a?q=80&w=800',
    coords: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: 'mysuru',
    name: 'Mysuru',
    state: 'Karnataka',
    country: 'India',
    description: 'The Cultural Capital of Karnataka, famous for its heritage and palaces.',
    culture: 'Known for silk sarees, sandalwood, and classical Carnatic music traditions.',
    history: 'The capital of the Kingdom of Mysore for nearly six centuries.',
    food: 'Mysore Pak, Mysore Masala Dosa, and authentic Thali.',
    festivals: 'The world-famous Mysore Dasara, celebrating victory of good over evil.',
    landmarks: 'Mysore Palace, Chamundi Hills, Brindavan Gardens.',
    image: 'https://images.unsplash.com/photo-1600100397608-f0907404396c?q=80&w=800',
    coords: { lat: 12.2958, lng: 76.6394 }
  },
  { id: 'mangauru', name: 'Mangaluru', state: 'Karnataka', country: 'India', description: 'Port city known for coastal beauty.', culture: 'Tuluva culture with Yakshagana art.', history: 'A key port for centuries.', food: 'Ghee Roast, Neer Dosa.', festivals: 'Mangalore Dasara.', landmarks: 'Panambur Beach, Kadri Temple.', image: 'https://images.unsplash.com/photo-1589183416458-382021939f1c?q=80&w=800', coords: { lat: 12.9141, lng: 74.8560 } },
  { id: 'hampi', name: 'Hampi', state: 'Karnataka', country: 'India', description: 'The ruins of the Vijayanagara Empire.', culture: 'Rich archaeological legacy.', history: '14th-century capital of one of the largest Hindu empires.', food: 'Simple South Indian meals.', festivals: 'Hampi Utsav.', landmarks: 'Virupaksha Temple, Stone Chariot.', image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800', coords: { lat: 15.3350, lng: 76.4600 } },
  { id: 'udupi', name: 'Udupi', state: 'Karnataka', country: 'India', description: 'Divine land of Krishna.', culture: 'Spiritual and culinary hub.', history: 'Home to the 13th-century Krishna Mutt.', food: 'World-famous Udupi cuisine.', festivals: 'Paryaya Festival.', landmarks: 'Malpe Beach, St Mary\'s Island.', image: 'https://images.unsplash.com/photo-1605370215980-0437438183ca?q=80&w=800', coords: { lat: 13.3409, lng: 74.7421 } },
  { id: 'hassan', name: 'Hassan', state: 'Karnataka', country: 'India', description: 'Gateway to Hoysala architecture.', culture: 'Deep historical roots.', history: 'Established by the Hoysala Empire.', food: 'Ragi Mudde.', festivals: 'Hasanamba Temple fair.', landmarks: 'Belur, Halebidu, Shravanabelagola.', image: 'https://images.unsplash.com/photo-1590490359854-dfba19688d70?q=80&w=800', coords: { lat: 13.0070, lng: 76.1028 } },
  { id: 'chikkamagaluru', name: 'Chikkamagaluru', state: 'Karnataka', country: 'India', description: 'Coffee Land of Karnataka.', culture: 'Serene estate life.', history: 'First place in India to grow coffee.', food: 'Malnad cuisine.', festivals: 'Kailpodh.', landmarks: 'Mullayanagiri, Baba Budangiri.', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800', coords: { lat: 13.3161, lng: 75.7720 } },
  
  // --- National Cities ---
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    country: 'India',
    description: 'The historic capital of India.',
    culture: 'A vibrant mix of old-world charm and modern city life.',
    history: 'The site of seven ancient cities.',
    food: 'Paranthas, Butter Chicken, and Chat.',
    festivals: 'Diwali and Republic Day.',
    landmarks: 'India Gate, Red Fort, Qutub Minar.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800',
    coords: { lat: 28.6139, lng: 77.2090 }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    description: 'The Maximum City.',
    culture: 'Bollywood and the spirit of resilience.',
    history: 'A group of seven islands transformed by the British.',
    food: 'Vada Pav, Pav Bhaji.',
    festivals: 'Ganesh Chaturthi.',
    landmarks: 'Gateway of India, Marine Drive.',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800',
    coords: { lat: 19.0760, lng: 72.8777 }
  },
  { id: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', country: 'India', description: 'The oldest living city.', culture: 'Spiritual heart of India.', history: 'Ancient center of learning.', food: 'Kachori Sabzi, Banarasi Paan.', festivals: 'Dev Deepawali.', landmarks: 'Ganga Ghats, Kashi Vishwanath.', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800', coords: { lat: 25.3176, lng: 82.9739 } },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', country: 'India', description: 'The Pink City.', culture: 'Royal Rajputana traditions.', history: 'Planned city by Jai Singh II.', food: 'Dal Baati Churma.', festivals: 'Gangaur.', landmarks: 'Hawa Mahal, Amber Fort.', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800', coords: { lat: 26.9124, lng: 75.7873 } },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', country: 'India', description: 'Queen of the Arabian Sea.', culture: 'Colonial and Malayali blend.', history: 'Major spice trading port.', food: 'Kerala Prawn Curry.', festivals: 'Cochin Carnival.', landmarks: 'Chinese Fishing Nets.', image: 'https://images.unsplash.com/photo-1590509837014-996160161493?q=80&w=800', coords: { lat: 9.9312, lng: 76.2673 } },
  { id: 'amritsar', name: 'Amritsar', state: 'Punjab', country: 'India', description: 'Home of the Golden Temple.', culture: 'Brave and welcoming Sikh spirit.', history: 'Founded by Guru Ram Das.', food: 'Amritsari Kulcha, Lassi.', festivals: 'Baisakhi.', landmarks: 'Golden Temple, Jallianwala Bagh.', image: 'https://images.unsplash.com/photo-1514222139-1796b23a76f7?q=80&w=800', coords: { lat: 31.6340, lng: 74.8723 } },
  { id: 'rishikesh', name: 'Rishikesh', state: 'Uttarakhand', country: 'India', description: 'Yoga Capital of the World.', culture: 'Meditation and adventure.', history: 'Spiritual gateway since ages.', food: 'Ayurvedic meals.', festivals: 'International Yoga Festival.', landmarks: 'Laxman Jhula, Triveni Ghat.', image: 'https://images.unsplash.com/photo-1545105511-063a56886e0c?q=80&w=800', coords: { lat: 30.0869, lng: 78.2676 } },
  { id: 'hubballi', name: 'Hubballi', state: 'Karnataka', country: 'India', description: 'Industrial and trading hub.', culture: 'North Karnataka style.', history: 'Key cotton trading center.', food: 'Dharwad Peda.', festivals: 'Basava Jayanti.', landmarks: 'Unkal Lake.', image: 'https://images.unsplash.com/photo-1623944889288-cd147dbb7f7c?q=80&w=800', coords: { lat: 15.3647, lng: 75.1240 } },
  { id: 'belagavi', name: 'Belagavi', state: 'Karnataka', country: 'India', description: 'City of Bamboo.', culture: 'Kannada-Marathi fusion.', history: 'Fort built by Rattas.', food: 'Kunda sweet.', festivals: 'Ganesh Chaturthi.', landmarks: 'Belgaum Fort.', image: 'https://images.unsplash.com/photo-1616422285623-13ff0167c958?q=80&w=800', coords: { lat: 15.8497, lng: 74.4977 } },
  { id: 'shimla', name: 'Shimla', state: 'Himachal Pradesh', country: 'India', description: 'Summer Capital of British India.', culture: 'Pahari and colonial.', history: 'Established as a hill station.', food: 'Madra.', festivals: 'Summer Festival.', landmarks: 'The Ridge, Mall Road.', image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?q=80&w=800', coords: { lat: 31.1048, lng: 77.1734 } },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', country: 'India', description: 'Oxford of the East.', culture: 'Maratha cultural heart.', history: 'Seat of the Peshwas.', food: 'Misal Pav.', festivals: 'Pune Festival.', landmarks: 'Shaniwar Wada.', image: 'https://images.unsplash.com/photo-1584839083835-9659968c7847?q=80&w=800', coords: { lat: 18.5204, lng: 73.8567 } },
  { id: 'shivamogga', name: 'Shivamogga', state: 'Karnataka', country: 'India', description: 'Gateway to Malnad.', culture: 'Nature focused.', history: 'Part of Keladi Kingdom.', food: 'Akki Rotti.', festivals: 'Sahyadri Utsav.', landmarks: 'Jog Falls.', image: 'https://images.unsplash.com/photo-1626014303757-646c246f477a?q=80&w=800', coords: { lat: 13.9299, lng: 75.5681 } },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', country: 'India', description: 'City of Pearls.', culture: 'Nizami and Telugu mix.', history: 'Qutb Shahi foundations.', food: 'Hyderabadi Biryani.', festivals: 'Bonalu.', landmarks: 'Charminar.', image: 'https://images.unsplash.com/photo-1616509091215-5700803450e1?q=80&w=800', coords: { lat: 17.3850, lng: 78.4867 } },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', country: 'India', description: 'City of Joy.', culture: 'Intellectual and artistic.', history: 'East India Company HQ.', food: 'Rosogolla, Fish Curry.', festivals: 'Durga Puja.', landmarks: 'Howrah Bridge.', image: 'https://images.unsplash.com/photo-1558431382-bb7b38c49051?q=80&w=800', coords: { lat: 22.5726, lng: 88.3639 } },
  { id: 'bidar', name: 'Bidar', state: 'Karnataka', country: 'India', description: 'City of Whispering Monuments.', culture: 'Sufi and Bahmani.', history: 'Bahmani capital.', food: 'Bidriware art influence.', festivals: 'Bidar Utsav.', landmarks: 'Bidar Fort.', image: 'https://images.unsplash.com/photo-1625244724123-1ee70e28e139?q=80&w=800', coords: { lat: 17.9120, lng: 77.5186 } },
  { id: 'kalaburagi', name: 'Kalaburagi', state: 'Karnataka', country: 'India', description: 'Land of Stone and Arches.', culture: 'Islamic and Hindu mix.', history: 'Gulbarga Kingdom capital.', food: 'Tahari.', festivals: 'Sharanabasaveshwara Fair.', landmarks: 'Gulbarga Fort.', image: 'https://images.unsplash.com/photo-1625400593406-d5d4d5483f94?q=80&w=800', coords: { lat: 17.3297, lng: 76.8343 } },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', country: 'India', description: 'Manchester of the East.', culture: 'Business and Garba.', history: 'Sabarmati Ashram home.', food: 'Dhokla, Khandvi.', festivals: 'Navratri.', landmarks: 'Sabarmati Riverfront.', image: 'https://images.unsplash.com/photo-1610444583731-9e1e9622aa52?q=80&w=800', coords: { lat: 23.0225, lng: 72.5714 } },
  { id: 'trivandrum', name: 'Trivandrum', state: 'Kerala', country: 'India', description: 'City of Lord Ananta.', culture: 'Lush and spiritual.', history: 'Travancore royal seat.', food: 'Sadhya.', festivals: 'Attukal Pongala.', landmarks: 'Padmanabhaswamy Temple.', image: 'https://images.unsplash.com/photo-1611095973763-4140195a1a5b?q=80&w=800', coords: { lat: 8.5241, lng: 76.9366 } },
  { id: 'ballari', name: 'Ballari', state: 'Karnataka', country: 'India', description: 'The Fort City.', culture: 'Hardworking mining town.', history: 'Historic hill fort.', food: 'Ragi Roti.', festivals: 'Ballari Utsav.', landmarks: 'Ballari Fort.', image: 'https://images.unsplash.com/photo-1623944889288-cd147dbb7f7c?q=80&w=800', coords: { lat: 15.1394, lng: 76.9214 } },
  { id: 'raichur', name: 'Raichur', state: 'Karnataka', country: 'India', description: 'Land of Doab.', culture: 'Agrarian heart.', history: 'Raichur Fort conflict site.', food: 'Jowar Roti.', festivals: ' स्थानीय जत्रा.', landmarks: 'Raichur Fort.', image: 'https://images.unsplash.com/photo-1623944889288-cd147dbb7f7c?q=80&w=800', coords: { lat: 16.2120, lng: 77.3439 } },
  { id: 'tumakuru', name: 'Tumakuru', state: 'Karnataka', country: 'India', description: 'The Coconut City.', culture: 'Education hub.', history: 'Known for Siddaganga Mutt.', food: 'Thatte Idli.', festivals: 'Siddaganga Fair.', landmarks: 'Devarayanadurga.', image: 'https://images.unsplash.com/photo-1596760449248-34861160368a?q=80&w=800', coords: { lat: 13.3392, lng: 77.1140 } },
  { id: 'dharwad', name: 'Dharwad', state: 'Karnataka', country: 'India', description: 'Gateway to South Karnataka.', culture: 'Intellectual and musical.', history: 'Cultural twin of Hubli.', food: 'Dharwad Peda.', festivals: 'Dharwad Utsav.', landmarks: 'Karnatak University.', image: 'https://images.unsplash.com/photo-1623944889288-cd147dbb7f7c?q=80&w=800', coords: { lat: 15.4589, lng: 75.0078 } }
];

export const ARTICLES: Article[] = [
  {
    id: 'g1',
    title: 'Budget Planning for Solo India Trip',
    excerpt: 'How to manage your finances while exploring the diverse landscapes of India.',
    content: 'Traveling solo in India is a rewarding experience. From hostels in Zostel to local trains, learn how to keep your daily budget under 2000 INR...',
    category: 'Budget',
    image: 'https://images.unsplash.com/photo-1524492459584-96c6f46dd17a?q=80&w=800',
    author: 'Elena Wright',
    date: 'Dec 12, 2024'
  },
  {
    id: 'g2',
    title: 'Safety Insights for Night Travelers',
    excerpt: 'Key precautions and app suggestions for staying safe during city hops.',
    content: 'Indian cities are generally safe, but common sense is key. Use Uber/Ola at night and stick to crowded areas...',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800',
    author: 'Rajesh Kumar',
    date: 'Dec 15, 2024'
  }
];

export const USER_STORIES: UserStory[] = [
  {
    id: 's1',
    userName: 'Anita Roy',
    city: 'Varanasi',
    country: 'India',
    story: 'The sunrise at Assi Ghat changed how I view life. The peace amidst chaos is real.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800'
  }
];
