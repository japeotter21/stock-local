import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable, TextInput, Button, FlatList } from 'react-native';

export default function App() {
    const [searchText, setSearchText] = useState('')
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const ListItems = [
        {id: 0, name: 'Post 0', text: 'text0'},
        {id: 1, name: 'Post 1', text: 'text1'},
        {id: 2, name: 'Post 2', text: 'text2'},
        {id: 3, name: 'Post 3', text: 'text3'},
        {id: 4, name: 'Post 4', text: 'text4'},
        {id: 5, name: 'Post 5', text: 'text5'},
        {id: 6, name: 'Post 6', text: 'text6'},
        {id: 7, name: 'Post 7', text: 'text7'},
        {id: 8, name: 'Post 8', text: 'text8'},
        {id: 9, name: 'Post 9', text: 'text9'},
        {id: 10, name: 'Post 10', text: 'text10'}
    ]
    const PostItem = ({name, text}) => (
        <View style={{flex: 1, flexDirection:'row'}}>
          <Text style={{flex: 1}}>{name}</Text>
          <Text style={{flex: 1}}>{text}</Text>
        </View>
      );

    return (
        <View style={{marginTop:0.05*windowHeight, flex: 4, backgroundColor:'#fff', alignItems:'center' }}
        >
            <View style={{backgroundColor:'#fff', borderRadius: 6, flex:1, flexDirection:'row',
                borderWidth:1, borderColor:'#ddd', paddingVertical:8, paddingHorizontal:10, width: windowWidth
            }}
            >
                <TextInput value={searchText} onChangeText={(e)=>setSearchText(e.target.value)} placeholder="Search Google Maps"
                    style={{borderRadius: 6, borderWidth:1, borderColor:'#ddd', paddingVertical:8, paddingHorizontal:10, width:windowWidth-100, height:40}}
                />
                <Button
                    title='Search'
                    accessibilityLabel='Search'
                />
            </View>
            <View style={{backgroundColor:'#fff', flex:5, width: windowWidth
                }}
            >
                <Text style={{fontSize:20, textAlign:'center'}}>Latest Posts</Text>
                <FlatList style={{backgroundColor:'#fff', paddingVertical:8, paddingHorizontal:10
                    }}
                    data={ListItems}
                    renderItem={({item})=><PostItem name={item.name} text={item.text} />}
                    keyExtractor={item=>item.id}
                />
            </View>
            <View style={{backgroundColor:'#fff', flex:5, width: windowWidth, alignItems:'center', borderTopWidth: 1, borderTopColor:'#ddd'
                }}
            >
                <Text style={{fontSize:30}}>Location</Text>
            </View>
            <View style={{backgroundColor:'#fff', borderRadius: 6, flex:1, flexDirection:'row', justifyContent:'center',
                borderWidth:1, borderColor:'#ddd', paddingVertical:8, paddingHorizontal:10, width: windowWidth
            }}
            >
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={{fontSize:25, color:'cornflowerblue'}}>?</Text>
                    <Button
                        color='cornflowerblue'
                        title='View Nearby'
                        accessibilityLabel='Nearby'
                    />
                </View>
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={{fontSize:25, color:'darkred'}}>+</Text>
                    <Button
                        color="darkred"
                        title='Create Post'
                        accessibilityLabel='Create Post'
                    />
                </View>
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={{fontSize:25, color:'darkslategrey'}}>.</Text>
                    <Button
                        color="darkslategrey"
                        title='Profile'
                        accessibilityLabel='Profile'
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
    }


