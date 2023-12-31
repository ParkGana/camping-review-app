import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        margin: 10
    },
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    BackIcon: {
        width: 24,
        height: 18
    },
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    EditText: {
        color: Color.blue,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight
    },
    DeleteText: {
        color: Color.red,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight,
        marginRight: 20
    }
})
