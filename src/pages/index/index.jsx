import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import { AtButton } from 'taro-ui'


import './index.scss'

export default function Index() {
  const [name, setName] = useState("")

  useLoad(() => {
    console.log('Page loaded.')
  })

  useEffect(() => {
    setName("zoomzoom")
  }, [!!name]);

  return (
    <View className='index'>
      <Text>Hello world!  </Text>
      <Text>Hello {name}!</Text>
      {/*<Button variant='contained'>Hello world</Button>*/}
        <AtButton type='primary'>提交</AtButton>
    </View>
  )
}
