import { StyleSheet, FlatList , ScrollView, Text, View ,TouchableOpacity , Image} from 'react-native'
import React, { useEffect ,useState } from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './Header';
import Test from '../navigation/Test';
import Loader from '../navigation/Loader';
import { AirbnbRating } from 'react-native-ratings';


const BASE_IMAGE_URL = 'http://creat8.in/mycity/api/category/';

const Home = ({navigation}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);




  const getAPIData = async () => {
    try {
      const url = 'http://creat8.in/mycity/api/category.php';
      const response = await fetch(url);
      const jsonData = await response.json();

      // Assuming the catimage field contains the image filename (e.g., image1.jpg)
      const dataWithFullURLs = jsonData.map((item) => ({
        ...item,
        catimage: BASE_IMAGE_URL + item.catimage, // Concatenate the base URL with the image filename
      }));

      setData(dataWithFullURLs);
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);

    }
  };

  useEffect(() => {
    getAPIData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
        <Image source={{ uri: item.catimage }} style={styles.serimage} />
        <Text style={styles.title}>{item.catname}</Text>
      </View>
    );


    const images = [
      require('../assets/slide1.jpg'), 
      require('../assets/slide2.jpg'), 
      require('../assets/slide33.webp'), 
    ];  
  
   
  
  const TopServicedata = [
    { id: '1', toptitle: 'Item 1', topimage: require('../assets/topser/car.png') , proimage : require('../assets/pro.png') , name : 'Sonu Mechanic'},
    { id: '2', toptitle: 'Item 2', topimage: require('../assets/topser/painting.png') , proimage : require('../assets/pro.png') , name : 'raju'},
    { id: '3', toptitle: 'Item 3', topimage: require('../assets/topser/tile.png') , proimage : require('../assets/pro.png') , name : 'raju'},
    { id: '4', toptitle: 'Item 4', topimage: require('../assets/topser/plumber.png') , proimage : require('../assets/pro.png') , name : 'raju'},
    { id: '5', toptitle: 'Item 5', topimage: require('../assets/topser/tile.png') , proimage : require('../assets/pro.png') , name : 'raju'},
    { id: '6', toptitle: 'Item 6', topimage: require('../assets/topser/painting.png') , proimage : require('../assets/pro.png') , name : 'raju'},
    { id: '7', toptitle: 'Item 7', topimage: require('../assets/topser/car.png') , proimage : require('../assets/pro.png') , name : 'raju'},

    // Add more items as needed
  ];

  const renderTopServices = ({ item }) => (
    <View style={styles.topcard}>
      <Image source={item.topimage} style={styles.topimage} />
      <Text style={styles.toptitle}>{item.toptitle}</Text>
      <Image source={item.proimage} style={styles.topproimage} />
      <AirbnbRating size={9}  count={5}  starContainerStyle={styles.starContainer}
        defaultRating={3} showRating={false}/> 
      <Text style={styles.topname}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}> 
   
      <Header navigation={navigation} />
        <View style={styles.content}>
        <ScrollView
        showsVerticalScrollIndicator={false} // Remove vertical scroll bar
        showsHorizontalScrollIndicator={false} // Remove horizontal scroll bar
      >
              <SliderBox style={styles.slider}
                  images={images}
                // onCurrentImagePressed={(index) => console.log(`Image at index ${index} pressed.`)}
             />
           <Text style={[styles.serText]}>- Services -</Text>
           <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Category')}
             >
             <Text style={[styles.view]}>View all</Text>
         </TouchableOpacity>
             <View style={styles.services}>
               <FlatList
                  data={data.slice(0, 9)}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true} // Set FlatList to scroll horizontally
                  contentContainerStyle={styles.listContainer}
                  showsHorizontalScrollIndicator={false}
               />
             </View>
             <Text style={[styles.serText]}>-Top Services -</Text>
             <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Card')}
             >
             <Text style={[styles.view]}>View all</Text>
         </TouchableOpacity>

             <View style={styles.services}>
               <FlatList
                  data={TopServicedata}
                  renderItem={renderTopServices}
                  keyExtractor={(item) => item.id}
                  horizontal={true} // Set FlatList to scroll horizontally
                  contentContainerStyle={styles.toplistContainer}
                  showsHorizontalScrollIndicator={false}
               />
             </View>
             <Text style={[styles.serText]}>-Top Services -</Text>
             <Text style={[styles.view]}>View all</Text>
             <View style={styles.services}>
               <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true} // Set FlatList to scroll horizontally
                  contentContainerStyle={styles.listContainer}
                  showsHorizontalScrollIndicator={false}
               />
             </View>
             <Text style={[styles.serText]}>-Top Services -</Text>
             <Text style={[styles.view]}>View all</Text>
             <View style={styles.services}>
               <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true} // Set FlatList to scroll horizontally
                  contentContainerStyle={styles.listContainer}
                  showsHorizontalScrollIndicator={false}
               />
             </View>
             <Text style={[styles.serText]}>-Top Services -</Text>
             <Text style={[styles.view]}>View all</Text>
             <View style={styles.services}>
               <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true} // Set FlatList to scroll horizontally
                  contentContainerStyle={styles.listContainer}
                  showsHorizontalScrollIndicator={false}
               />
             </View>
             <Text style={[styles.serText]}>-Top Services -</Text>
             <Text style={[styles.view]}>View all</Text>
             <View style={styles.services}>
               <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true} // Set FlatList to scroll horizontally
                  contentContainerStyle={styles.listContainer}
                  showsHorizontalScrollIndicator={false}
               />
             </View>
         </ScrollView>
         </View>  
      <Test navigation={navigation}/>
      {isLoading && <Loader />}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1E1E2A',
    display: 'flex',
    justifyContent: 'flex-start',
  },
   content: {
  flex: 1,
  height :hp('200%'),
   top: hp('2%'),
   },
slider: {
  borderRadius: 30,
  width: wp('95%'),
  height: hp('25%'),
   left: hp('1.09%'),
},
serText: {
  fontFamily: 'Fredoka-SemiBold',
  color: '#ffffff',
  left: hp('3%'),
  top: hp('3%'),
},
view: {
  fontFamily: 'Fredoka-Light',
  color: '#ffffff',
  left: hp('39%'),
  top: hp('1%'),
  fontSize: 12,
},
services: {
  top: hp('1.2%'),
  // flex: 1,
},
listContainer: {
  paddingVertical: 16,
  paddingHorizontal: 18,
},
card: { 
  borderRadius: 8,
  marginLeft: 1,
  // overflow: 'hidden', // To ensure image doesn't go beyond card boundaries
  width: wp('23%'), // Set the width of each card
},
serimage: {
  width: wp('19%'),
  height: hp('9.5%'),
},
title: {
  fontSize: 13,
  left: hp('0.7%'),
  padding: 10,
  fontFamily: 'Fredoka-Light',
  color: '#ffffff',
},
topcard :{
  backgroundColor: '#323348',
  borderRadius: 20,
  marginLeft: 7,
  // overflow: 'hidden', // To ensure image doesn't go beyond card boundaries
  width: wp('45%'), // Set the width of each card
},
toplistContainer: {
  paddingVertical: 11,
  paddingHorizontal: 2,
},
topimage: {
  width: wp('42%'),
  height: hp('13%'),
  left: hp('0.7%'),
  top: hp('0.7%'),
},
toptitle: {
  borderRadius: 11,
  height: hp('2.5%'),
  width: wp('15%'),
  backgroundColor: '#1E1E2A',
  position: 'absolute',
  fontSize: 10,
  top: hp('1%'),
  left: hp('1.5%'),
  paddingLeft: hp('1.5%'),
  paddingTop: hp('0.3%'),
  fontFamily: 'Fredoka-SemiBold',
  color: '#ffffff',
},
topproimage: {
  top: hp('4%'),
  left: hp('1.5%'),
  width: wp('11%'),
  height: hp('5.3%'),
},
topname: {
  fontSize: 15,
  top: hp('-1.2%'),
  left: hp('6.5%'),
  padding: 10,
  fontFamily: 'Fredoka-SemiBold',
  color: '#ffffff',
},

})