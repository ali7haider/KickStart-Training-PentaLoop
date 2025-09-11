export const baseTheme = {
  token: {
    borderRadius: 8, 
    fontSize: 14,
    lineHeight: 1.5715,
    sizeUnit: 4,
    sizeStep: 4,
    controlHeight: 32,
  },
  components: {
    Card: {
      borderRadius: 12,
      borderRadiusLG: 16,
      padding: 20,
      paddingLG: 24,
      boxShadow: 'none',
      boxShadowTertiary: 'none',
    },
    Button: {
      controlHeight: 40,
      paddingContentHorizontal: 20,
    },
    Input: {
      controlHeight: 40,
      borderRadius: 8,
    },
    Menu: {
      horizontalItemHeight: 40,
      itemHeight: 40,
      itemPaddingInline: 16,
      itemBorderRadius: 8,
      itemMarginInline: 4,
    },
    Layout: {
      headerHeight: 64,
      headerPadding: '0 24px',
    },
  },
};