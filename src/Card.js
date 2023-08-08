import { StyleSheet, FlatList, Image , Text, View, Linking ,TouchableOpacity  } from 'react-native'
import React , {useState , useEffect} from 'react'
import Header from './Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Test from '../navigation/Test';
import Loader from '../navigation/Loader';


const BASE_IMAGE_URL = 'http://creat8.in/mycity/api/clientimage/';


const Card = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const getAPIData = async () => { 
      try {
        const url = 'http://creat8.in/mycity/api/clientdata.php';
        const response = await fetch(url);
        const jsonData = await response.json();

        // Modify data array to include full URLs for catimage
        const dataWithFullURLs = jsonData.map((item) => ({
          ...item,
          proimg: BASE_IMAGE_URL + item.proimg, // Concatenate the base URL with the image filename
        }));

        setData(dataWithFullURLs);
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);

      }
    };

    getAPIData();

    const filteredData = data.filter((item) => item.id === props.route.params.id);
    setFilteredData(filteredData);
  } , [data, props.route.params.id]);

  const handleContactPress = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Phone number not supported");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred: ', err));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.proimg }} style={styles.proImage} /> 
     <View style={styles.part1}>
       <Text style={[styles.name, styles.font ]}>Name : {item.name}</Text>
       <Text style={[styles.location, styles.font ]}>Location : {item.location}</Text>
       <Text style={[styles.work , styles.font ]}>Age : {item.age}</Text>
       <Text style={[styles.charge , styles.font ]}>Charges-{item.charges}/Mo</Text>
      </View>
      <View style={styles.part2}>
       <Text style={[styles.name, styles.font ]}>{item.work}</Text>
       <Text style={[styles.location, styles.font ]}>Working Time : {item.working}</Text>
       <Text style={[styles.work , styles.font ]}>Speciality : {item.speciality}</Text>
       <TouchableOpacity onPress={() => handleContactPress(item.mobile)}>
          <Text style={[styles.contbutton]}>Contact Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Header/>
      <Text  style={styles.cattext} >- {props.route.params.name} -</Text>
         <View style={styles.card}>
         <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
         </View>
         <Test navigation={props.navigation}/>
         {isLoading && <Loader />}

    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1E1E2A',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  cattext: {
    backgroundColor: '#323248',
    fontFamily: 'Fredoka-SemiBold',
    color: '#ffffff',
    top: hp('2%'),
    borderRadius: 7,
    padding: 9,
     margin: 8,
     textAlign: 'center',    
  },
  card: {
    backgroundColor: '#323248',
    top: hp('2%'),
    height: hp('68%'),
    width: wp('85%'),
    margin: hp('3.6%'),
    borderRadius: 8,
    
  },
  itemContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  proImage: {
    top: hp('2%'),
    height: hp('11.1%'),
    width: wp('22.5%'),
    margin: hp('2.5%'),
    borderRadius: 50,
  },
  part1: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap: 12,
    marginTop:20,
  },
  font:{
    fontFamily: 'Fredoka-SemiBold',
    color: '#ffffff',
    fontSize: 13,
  },
  charge :{
    marginTop: 40,
    backgroundColor: '#00C2FF',
    padding:5,
    width: wp('40%'),
    borderRadius: 5,
    textAlign: 'center',    
  },
  part2: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap: 15,
    marginTop:30,
  },
  contbutton:{
    fontFamily: 'Fredoka-Light',
    color: '#ffffff',
    backgroundColor: '#00C2FF',
    padding:9,
    width: wp('60%'),
    textAlign: 'center',    
    borderRadius: 5,
    marginTop: 28,
  }
})