export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      explanation: undefined;
      home: {
        excludeArea?: string;
        createHabit?: string;
        updatedHabit?: string;
      };
      habitPage: {
        create: boolean,
        habit: {
          habitArea: string
        }
      }
    }
  }
}