import { View, Text} from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const PageNumber = ({currentPage, totalPage}) => {
    const { pdfPage } = useContext(AppContext)

    return (
        <View className='absolute top-96 z-10 right-2 bg-white rounded-full px-2 py-1'>
            <Text className='text-[12px]'>{currentPage} / {totalPage}</Text>
        </View>
    )
}

export default PageNumber

