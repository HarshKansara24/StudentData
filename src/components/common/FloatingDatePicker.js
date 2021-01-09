import React from 'react'
import { StyleSheet, Text } from 'react-native'
import ModalDatePicker from './ModalDatePicker'
import { FloatingEditText, EditText } from '.'
import { Colors } from '../../utils';
import ResponsivePixels from '../../utils/ResponsivePixels';


const FloatingDatePicker = ({ style, minimumDate, maximumDate, defaultDate, onDateChange, placeHolderText, textColor, placeHolderTextColor, ...props }) => (
  <ModalDatePicker
    style={[styles.container, style]}
    renderDate={({ year, month, day, date }) => {
      // if (!date) {
      //   return <Text style={[styles.text, { ...styles.placeholderText, color: placeHolderTextColor || '#7C7C7C' },]}>{placeHolderText || 'Select date'}</Text>
      // }
      const dateStr = !date ? '' : `${day}-${month}-${year}`
      return <EditText textColor = {textColor} rightIcon={'calendar'} editable={false} disabled hint={placeHolderText} value={dateStr} />
    }}
    startDate={defaultDate}
    minDate={minimumDate}
    maxDate={maximumDate}
    onDateChanged={(date) => {
      onDateChange(date.date)
    }}
  />
)
const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop:ResponsivePixels.size14,
    justifyContent: 'center'
  },
  placeholderText: {
    color: '#7C7C7C'
  },
  text: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    color: Colors.DarkGreyColor
  }
})
export default FloatingDatePicker