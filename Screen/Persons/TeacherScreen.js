import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';

export default function TeacherScreen(props) {
  useEffect(() => {
    AsyncStorage.setItem('teacherPage', 'true');
  });

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  const ToProgressPage = () =>{
    props.navigation.navigate('ProjectsScreenStack', { screen: 'ProjectsScreen' });
  }
  const ToCalendarPage = () =>{
    props.navigation.replace('Calendar');
  }
  const ToContactsPage = () =>{
    props.navigation.replace('Contacts');
  }
  const ToHelpPage = () =>{
    props.navigation.replace('Help');
  }
  const ToMessagesPage = () =>{
    props.navigation.replace('Messages');
  }
  const ToSupportPage = () =>{
    props.navigation.replace('Support');
  }
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#777777"/>
      <View style={styles.header}>
        <View style={styles.leftBlock}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Image style={styles.burg}  source={require('../../assets/menu-burger.png')}  />
          </TouchableOpacity>
          <Text  style={styles.logoText}>Личный кабинет</Text>
        </View>
        <Image style={styles.logo}  source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.userInfoBlock}>
        <View style={styles.userPhotoAndData}> 
          <View style={styles.userPhoto}>
            <Image style={{width: 100, 
                           marginTop: 10,
                           resizeMode: 'contain'}} source={require('../../assets/boss.png')} />
          </View>
          <View>
            <View style={styles.userInfoItem}>
              <Text>Галиаскаров</Text>
              <Text>Эдуард</Text>
              <Text>Геннадьевич</Text>
            </View>
            <View style={styles.userInfoItem}>
              <Text>Доцент кафедры</Text>
              <Text>ИТиЦЭ</Text>
            </View>
            <View style={styles.userInfoItem}>
              <Text>Место работы</Text>
              <Text style={{fontStyle:'italic'}}>ИГХТУ</Text>
            </View>
          </View>
        </View>
        <View style={styles.userRole}>
          <Text>Зарегистрирован в качестве</Text>
          <Text style={{marginLeft: 50, 
                        color: '#8c3e3c',
                        fontStyle: 'italic'}}>Руководитель</Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <TouchableOpacity onPress={ToProgressPage}>
          <Text style={styles.infoText}>Прогресс выполнения текущих проектов</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToCalendarPage}>
          <Text style={styles.infoText}>Календарь</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToContactsPage}>
          <Text style={styles.infoText}>Контактная информация</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToMessagesPage}>
          <Text style={styles.infoText}>Сообщения</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToHelpPage}>
          <Text style={styles.infoText}>Справка</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToSupportPage}>
          <Text style={styles.infoText}>Техподдержка</Text>
        </TouchableOpacity>
      </View>
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
  infoBlock:{
    width: '100%',
    height: '45%',
    justifyContent: 'space-between',
    marginTop: 10
  },
  infoText:{
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderLeftColor: '#8c3e3c',
    borderLeftWidth: 5,
    marginLeft: 10,
    marginRight: 10
  },
  userInfoBlock:{
    width: '100%',
    height: '35%',
    justifyContent: 'space-between'
  },
  userRole:{
    width: '100%',
    marginLeft: 10, 
    marginBottom: 10,
  },
  userPhotoAndData:{
    flexDirection: 'row',
  },
  userPhoto:{
    width: '40%',
    alignItems: 'center',
  },
  userInfoItem:{
    marginBottom: 15
  }
});
