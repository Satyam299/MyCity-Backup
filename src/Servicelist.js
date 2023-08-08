import { StyleSheet ,ScrollView, TouchableOpacity ,Image ,FlatList, Text, View } from 'react-native'
import React , {useState , useEffect} from 'react'
import Header from './Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Test from '../navigation/Test';
import Loader from '../navigation/Loader';

const BASE_IMAGE_URL = 'http://creat8.in/mycity/api/clientimage/';

const Servicelist = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    // Fetch data and set state
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
    const filteredData = data.filter((item) => item.catid === props.route.params.id);
    setFilteredData(filteredData);
  }, [data, props.route.params.id]);

  const selectpro = (id , name) => {
    // console.log(id + ' ' + name);
   props.navigation.navigate('Card',{ id: id ,name : name});
  }
      const renderItem = ({ item }) => (
        <View style={styles.card}>
     <Image
        source={{ uri: item.proimg }}
        style={styles.proimage}
      />

        <View style={styles.textcon}>
          <Text style={styles.font}>Name : {item.name}</Text>
          <Text style={styles.font}>Location : {item.address}</Text>
          <Text style={styles.font}>Phone : {item.mobile}</Text>
          <Text style={[styles.charge  ]}>Charges-{item.charges}/Mo</Text>
       <TouchableOpacity onPress={() => {selectpro(item.id ,item.name) }}>
          <Text style={[styles.viewmore  ]}>View More</Text>
       </TouchableOpacity>
        </View>
    </View>
      );
  return (
    <View style={styles.container} >
        <Header/>
       <Text  style={styles.cattext} >- {props.route.params.name} -</Text>
      <View style={styles.content} >
      <ScrollView
        showsVerticalScrollIndicator={false} // Remove vertical scroll bar
        showsHorizontalScrollIndicator={false} // Remove horizontal scroll bar
      >
         <FlatList
         data={filteredData}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         showsVerticalScrollIndicator={false}
         />
         </ScrollView>
      </View>
      <Test navigation={props.navigation}/>
      {isLoading && <Loader />}
    </View>

  )
}

export default Servicelist

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      content:{
        marginTop:30,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '73%',
      },
      card:{
        backgroundColor: '#323248',
        width: wp('90%'),
        height: hp('17%'),
        padding: 9,
        borderRadius: 20,
        flexDirection: 'row',
      
        marginBottom:20
        
      },
      charge :{
        fontFamily: 'Fredoka-SemiBold',
          color: '#ffffff',
          fontSize: 11,
          marginTop: 4,
        backgroundColor: '#00C2FF',
        padding:2,
        width: wp('20%'),
        borderRadius: 3,
        textAlign: 'center',    
      },
      viewmore:{
        fontFamily: 'Fredoka-SemiBold',
          color: '#ffffff',
          fontSize: 11,
          marginTop: 4,
        backgroundColor: '#00C2FF',
        padding:2,
        width: wp('20%'),
        top: hp('-4%'),
        left: hp('16%'),
        borderRadius: 3,
        textAlign: 'center',  
      },
      proimage:{
          borderRadius: 50,
          height: hp('10.5%'),
          width: wp('22%'),
          top: hp('1.5%'),

        },
        font:{
          fontFamily: 'Fredoka-SemiBold',
          color: '#ffffff',
          fontSize: 12,
        },
        textcon:{
          marginLeft:24,
          marginTop:14,
          gap:9,
          },
})