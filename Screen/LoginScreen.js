import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faPencilAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function LoginScreen({navigation}) {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitPress = () => {
    if (!userLogin || !userPassword) {
      alert('Неверные данные для входа');
      return;
    }

    if (userLogin == "galogenIT@gmail.com" && userPassword == "admin") {
      navigation.replace('DrawerTeacherRoutes');
    }else if (userLogin == "maksikoriginal@gmail.com" && userPassword == "user") {
      navigation.replace('DrawerStudentRoutes');
    }else{
      alert('Неверные данные для входа');
      return;
    }
  }

  return (
    <View style={styles.container}>
       <StatusBar
        backgroundColor="#777777"/>
      <View style={styles.header}>
        <Image style={styles.logo}  source={require('../assets/logo.png')} />
        <Text  style={styles.logoText}>ИГХТУ</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.message}>При возникновении проблем со входом в{"\n"}учетную запись обратитесь в службу{"\n"}поддержки</Text>
        <View style={styles.loginBlock}>
          <FontAwesomeIcon style={styles.loginBlockIcon} 
                           icon={ faUser } size={20}/>
          <TextInput onChangeText={(userLogin) =>
                  setUserLogin(userLogin)
                } autoCapitalize="none" style={styles.nameInput}  placeholder="Логин" />
        </View>
        <View style={styles.loginBlock}>
          <FontAwesomeIcon style={styles.loginBlockIcon} 
                           icon={ faPencilAlt } size={20}/>
          <TextInput onChangeText={(userPass) =>
                  setUserPassword(userPass)
                } autoCapitalize="none" style={styles.nameInput} secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"  placeholder="Пароль" />
        </View>
        <View style={styles.textPart}>
          <FontAwesomeIcon style={styles.textPartIcon}  icon={ faSignInAlt } color={'#fffeff'} size={20}/>
          <TouchableHighlight onPress={handleSubmitPress}>
            <Text style={styles.enterButton}>
                Вход
            </Text>
          </TouchableHighlight>
        </View>
        <Text style={{marginTop: 20, 
          color: '#fffeff', 
          textDecorationLine: "underline",
          fontStyle: 'italic',}}>Забыли пароль?</Text>
        <Text style={{marginTop: 50, 
          color: '#fffeff', fontSize: 20,
          textDecorationLine: "underline",
          fontStyle: 'italic',}}>Техподдержка</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    height: '40%',
  },
  body:{
    height: '60%',
    alignSelf: 'stretch',
    backgroundColor: '#8c3e3c',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo:{
    width: 160,
    height: 160,
    marginTop: 20,
    resizeMode: 'contain'
  },
  logoText:{
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#5c0404'
  },
  message: {
    textAlign: 'center', 
    flexWrap: 'wrap',
    flexShrink: 1,
    color: 'white',
    marginTop: 20
  },
  nameInput:{
    backgroundColor: '#fffeff',
    width: 200,
    height: 32,
    paddingLeft: 5
  },
  loginBlock:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#fffeff',
    borderWidth: 2
  },
  loginBlockIcon:{
    marginTop: 5,
    marginLeft: 3
  },
  textPart:{
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  enterButton:{
    color: '#fffeff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 3,
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 5
  },
  textPartIcon:{
    marginTop: 3,
    marginLeft: 5
  }
});
