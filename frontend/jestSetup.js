jest.mock("@expo/vector-icons", () => {
    return {
      Ionicons: jest.fn(() => null),
    };
  });
  