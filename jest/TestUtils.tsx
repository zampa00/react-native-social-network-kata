export const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    route: {
      params: props
    },
    ...props
  });

export const mockNavigation = () => jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native")
    return {
      ...actualNav,
      useFocusEffect: () => jest.fn(),
      useNavigation: () => ({
        navigate: jest.fn(),
      }),
    }
  });