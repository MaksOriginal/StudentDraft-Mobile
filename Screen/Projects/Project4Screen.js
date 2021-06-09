import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Button, TouchableOpacity} from 'react-native';
import { BackHandler } from 'react-native';
import { AsyncStorage } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Project2Screen({ navigation }) {
  const [teacher, setTeacher] = useState(false)
  const [ids, SetId] = useState({})

  function handleBackButtonClick() {
    navigation.replace('ProjectsScreen');
    return true;
  }

  useEffect(() => {

    let value = AsyncStorage.getItem('teacherPage');

    value.then((res) => {
      if(res == 'true')
        setTeacher(true);
    })

    value = AsyncStorage.getItem('page');

    value.then((res) => {
      SetId(res);
    })

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  const SubscribeButton = () =>{
    if(!teacher){
      return (
        <View style={{width: '100%', margin: 5, color: 'black'}}>
          <Button onPress={()=>{
              let obj;

              const value = AsyncStorage.getItem('userProjects');

              value.then((res) => {
                if(res == null)
                  obj = { data : []}
                else
                  obj = res
                  obj.data.push(JSON.parse(ids))
                  AsyncStorage.setItem('userProjects', JSON.stringify(obj))
                  Alert.alert("Нет свободных вакансий.")
              })
          }}
            title="Команда сформирована"
          />
        </View>
      )
    }else{
      return null;
    }
  }

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#777777"/>
      <View style={styles.header}>
        <View style={styles.leftBlock}>
          <TouchableOpacity onPress={handleBackButtonClick}>
              <FontAwesomeIcon  icon={ faArrowLeft } size={30} color="#8c3e3c" />
          </TouchableOpacity>
          <Text  style={styles.logoText}>Страница проекта</Text>
        </View>
        <Image style={styles.logo}  source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Создание мобильного приложения для учета продаж товаров</Text>
      </View>
      <ScrollView style={styles.text}>
        <Text style={styles.head}>Заказчик</Text>
        <Text>Кафедра ИТиЦЭ</Text>
        <Text style={styles.head}>Руководитель</Text>
        <View style={styles.withContact}>
          <Text>Смирнова Н.В.</Text>
          <Text style={styles.contact}>(контактные данные)</Text>
        </View>
        <Text style={styles.head}>Вакансии</Text>
        <View style={styles.withContact}>
          <Text>Скворцова Е.А.</Text>
          <Text style={styles.contact}>(исполнитель)</Text>
        </View>
        <View style={styles.withContact}>
          <Text>Орлов К.Н.</Text>
          <Text style={styles.contact}>(исполнитель)</Text>
        </View>
        <View style={styles.withContact}>
          <Text>Киюшкин С.Р.</Text>
          <Text style={styles.contact}>(исполнитель)</Text>
        </View>
        <View style={styles.withContact}>
          <Text>Гаврилов Е.Д.</Text>
          <Text style={styles.contact}>(исполнитель)</Text>
        </View>
        <Text style={styles.head}>Краткая информация о проекте:</Text>
        <Text>
        Необходимо разработать мобильное приложение для учета продаж товаров.</Text>
        <Text style={styles.head}>Полная информация о проекте:</Text>
        <Text>
        Мобильное приложение – это тот инструмент, с помощью которого пользователи совершают свои периодические покупки. {"\n"}
        В этом есть и хорошая и плохая сторона – с одной стороны это означает, что если ваш интернет-магазин не рассчитан 
        на повторные продажи (например, вы продаете только пылесосы, которые люди покупают один раз в жизни), то приложение
        ему нужно в меньшей степени. Но с другой стороны, если ваш ассортимент подразумевает повторные продажи, то пользователи
        по достоинству оценят, если вы предложите им удобное мобильное приложение.
        </Text>
      </ScrollView>
      <SubscribeButton/>
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
  titleWrapper:{
    margin: 10
  },
  title:{
    fontSize: 30
  },
  text:{
    backgroundColor: '#e9e9e8',
    margin: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#8c3e3c',
    paddingLeft: 3
  },
  head:{
    color: '#618ea7',
    fontSize: 18,
    fontStyle: 'italic'
  },
  withContact:{
    flexDirection: 'row'
  },
  contact:{
    color: '#8c3e3c',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginLeft: 5
  }
});
