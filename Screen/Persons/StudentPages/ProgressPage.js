import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BackHandler } from 'react-native';
import { AsyncStorage } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Icon style={styles.arrow} name="arrow-right" size={24} color="#8c3e3c" /> 
    </View>
  );
}

export default function ProgressPage(props) {
  const [data, setData] = useState({"data": []})

  function handleBackButtonClick() {
    AsyncStorage.setItem('teacherPage', 'false');
    props.navigation.replace('StudentScreen');
    return true;
  }

  useEffect(() => {

    AsyncStorage.setItem('teacherPage', 'true');

    let value = AsyncStorage.getItem('page');

    value.then((res) => {
      if(res != null)
        setData(JSON.parse(res));
    })

    value = AsyncStorage.getItem('userProjects');

    value.then((res) => {
      if(res != null){
        let obj = JSON.parse(res)
        setData(obj);
      }
    })

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);


  const processItem = (item) =>{
    console.log(item.id)
    props.navigation.replace('Project' + item.id + 'Screen');
  }
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#777777"/>
      <View style={styles.header}>
        <View style={styles.leftBlock}>
          <TouchableOpacity onPress={handleBackButtonClick}>
            <FontAwesomeIcon  icon={ faArrowLeft } size={30} color="#8c3e3c" />
          </TouchableOpacity>
          <Text  style={styles.logoText}>Проекты</Text>
        </View>
        <Image style={styles.logo}  source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.searchBlock}>
        <View>
          <TextInput style={{paddingLeft: 20}} placeholder="Поиск по проектам"/>
        </View>
        <View>
          <TouchableHighlight onPress={()=>{}}>
            <View>
              <Icon style={{paddingRight: 10}} name="search" size={24} color="#8c3e3c" />   
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <SafeAreaView style={{flex: 1, marginTop: 60, marginBottom: 10, width: '90%'}}>
        <FlatList
          data={data.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={ () => processItem(item)}>
              <Item title={item.title} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'Sans-serif'
  },
  header:{
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: '#e9e9e8',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo:{
    width: 90,
    height: 90,
    resizeMode: 'contain'
  },
  logoText:{
    fontSize: 24,
    color: '#8c3e3c',
    marginLeft: 10
  },
  burg:{
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 10
  },
  leftBlock:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBlock:{
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: '#8c3e3c',
    marginTop: 10
  },
  item:{
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#8c3e3c',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title:{
    width: '80%',
    marginLeft: 15,
  },
  arrow:{
    marginRight: 15,
    marginBottom: 30
  }
});