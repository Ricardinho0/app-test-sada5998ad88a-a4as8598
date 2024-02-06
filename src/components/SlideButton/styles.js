import { StyleSheet, Dimensions } from "react-native"
import { Theme } from "../../theme"

const DIMENSIONS = Dimensions.get("window")
export const SHEET_WHIDTH = 25
export const SHEET_OVER_DRAG = 30

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500'
  },
  circle: {
    backgroundColor: Theme.background,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})