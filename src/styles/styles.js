import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  container: {
    flex:1,
    bottom:0,
    left:0
  },
  headerContainer: {
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'20%',  
    backgroundColor:'#1285ff',
  },
  headerImageViewStyle:{
    position:'absolute',
    top:5,
    left:75,
    bottom:5,

  },
  headerImageStyle: {        
    width: width * 0.15,
    height: width*0.15,   
    resizeMode:'contain',    
  },
  headerText: {
    color: '#464646',
    fontSize: 22,
  },
  headerTextView: {
    backgroundColor: '#E8E8E8',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    position: 'absolute',
    bottom: 5,
    left: 20,
  },  
  navSectionStyle: {    
    width:'100%',
    height:'70%',
    left:0,
    top:'20%'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  navItemStyle: {
    paddingTop: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTextStyle: {
    paddingLeft: 15,
    fontSize: 18,
  },
  navIconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  footerContainer: {
    position: 'absolute',
    bottom:0,
    left:0,
    width:'100%',
    height:'10%',    
    alignItems:'flex-end',    
  },
  footerImageStyle: {
    flex: .7,
    width: 138,
    height: 30,
    resizeMode: 'contain',    
    marginRight:30
  },  
  footerText: {    
    color: 'gray',
    fontSize: 15,
    opacity: 0.4,
    flex:.3,
    marginRight:10
  },
};
