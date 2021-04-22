import styled from 'styled-components/native'
import { StatusBar} from "react-native"

import colors from '../constans/colors'

const TopText = styled.Text`
color: ${colors.white};
font-size: 24px;
font-weight: 700;
paddingTop: 10px;
text-align:center;
background-color: ${colors.blue};
paddingBottom: ${StatusBar.currentHeight -15}px;
`

export default TopText