import { StyleSheet, Text, View ,FlatList,TouchableOpacity , Image ,Dimensions } from 'react-native'
import React ,{useState , useEffect}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './Header';
import Test from '../navigation/Test';
import Loader from '../navigation/Loader';

 
const BASE_IMAGE_URL = 'http://creat8.in/mycity/api/category/';

const Category = (props) => {
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
   
  }, []);
  
      const selectcat = (id ,name) => {
        // console.log(id + ' ' + name);
       props.navigation.navigate('Servicelist',{id : id ,name: name});
      }
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => {selectcat(item.catid,item.catname) }}>
      <View style={styles.itemContainer}>
          <Image
                 style={styles.circleImage}
                 source={{ uri: item.catimage }}  // Dynamically load images from the assets directory
              />
          <Text style={styles.title}>{item.catname}</Text>
        </View>
        </TouchableOpacity>

      );
    
      const numColumns = 4;
      const itemWidth = Dimensions.get('window').width / numColumns;
    
  return (
    <View style={styles.container}>
      <Header/>
      <Text  style={styles.cattext} >- Category -</Text>
      {isLoading && <Loader />}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.catid}
        numColumns={numColumns}
        columnWrapperStyle={styles.row}
      />
      <Test navigation={props.navigation}/>
    </View>
  )
}

export default Category

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
      row: {
        flex: 1,
        justifyContent: 'space-between',
      },
      itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: hp('3%'),
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
      },
      circleImage: {
        width: 60, // Set your desired circle image size
        height: 60,
        borderRadius: 30, // Make sure to set borderRadius to half of width/height to get a perfect circle
      },
      title: {
        fontFamily: 'Fredoka-Light',
     color: '#ffffff',
        marginTop: 5,
        textAlign: 'center',
      },
})